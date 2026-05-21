const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const submissions = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Server-Side Rendering Demo',
    currentYear: new Date().getFullYear(),
    submissions
  });
});

app.post('/greet', (req, res) => {
  const name = (req.body.name || '').trim();

  if (!name) {
    return res.status(400).render('result', {
      pageTitle: 'Greeting Result',
      title: 'Greeting form needs a name',
      message: 'Please go back and enter your name before submitting the form.',
      submittedAt: new Date().toLocaleString(),
      submission: null,
      allSubmissions: submissions
    });
  }

  const submission = {
    type: 'Greeting',
    name,
    details: `Hello, ${name}!`,
    submittedAt: new Date().toLocaleString()
  };

  submissions.unshift(submission);

  res.render('result', {
    pageTitle: 'Greeting Result',
    title: 'Greeting received on the server',
    message: `The server read your form data and created this HTML for ${name}.`,
    submittedAt: submission.submittedAt,
    submission,
    allSubmissions: submissions
  });
});

app.post('/feedback', (req, res) => {
  const name = (req.body.name || '').trim();
  const email = (req.body.email || '').trim();
  const message = (req.body.message || '').trim();

  if (!name || !email || !message) {
    return res.status(400).render('result', {
      pageTitle: 'Feedback Result',
      title: 'Feedback form is incomplete',
      message: 'Please fill in name, email, and message before submitting the form.',
      submittedAt: new Date().toLocaleString(),
      submission: null,
      allSubmissions: submissions
    });
  }

  const submission = {
    type: 'Feedback',
    name,
    email,
    details: message,
    submittedAt: new Date().toLocaleString()
  };

  submissions.unshift(submission);

  res.render('result', {
    pageTitle: 'Feedback Result',
    title: 'Feedback received on the server',
    message: 'This page was rendered after Express processed your POST request.',
    submittedAt: submission.submittedAt,
    submission,
    allSubmissions: submissions
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});