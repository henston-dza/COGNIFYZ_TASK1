## Task 1: HTML Structure and Basic Server Interaction

### Objective

The objective of this task was to understand server-side rendering and basic form handling using Node.js, Express, and EJS.

### Project Overview

I built a lightweight web application using **Express.js** and **EJS** that demonstrates how server-side rendering works along with handling user form submissions.

The application includes:

* HTML forms for user input
* Express server setup
* POST routes for handling form data
* Dynamic HTML generation using EJS templates
* Basic UI styling with CSS

### Project Structure

* `app.js` — Contains the main server logic and route handling
* `views/index.ejs` — Home page containing input forms
* `views/result.ejs` — Displays submitted form data dynamically
* `public/styles.css` — Handles the application styling

### Features Implemented

#### 1. HTML Forms for User Input

Created forms that allow users to:

* Submit their name through a greeting form
* Send feedback using a larger feedback form

#### 2. Express Server Setup

Set up a basic Node.js server using the Express.js framework to:

* Serve pages
* Handle routing
* Process incoming form data

#### 3. Server-Side Form Handling

Implemented:

* `GET /` route to render the homepage
* `POST /greet` route to process greeting submissions
* `POST /feedback` route to process feedback form submissions

Express reads the submitted form data, creates JavaScript objects from the request body, and sends that data to EJS templates for rendering.

#### 4. Server-Side Rendering with EJS

Used EJS for server-side rendering.
The server dynamically generates HTML before sending it to the browser, demonstrating how SSR (Server-Side Rendering) works in a Node.js application.

The homepage also dynamically displays:

* The current year
* Previously submitted form data stored in memory

### Testing and Verification

The project was verified successfully by:

* Running `npm install`
* Checking the application using `node --check app.js`
* Confirming there were no syntax errors

### How to Run the Project

1. Open a terminal in the project directory
2. Run:

   ```bash
   npm install
   npm start
   ```
3. Open the browser and visit:

   ```text
   http://localhost:3000
   ```

### Note

Currently, form submissions are stored only in memory, so the data resets whenever the server restarts. This project can be further improved by:

* Adding a database for persistent storage
* Organizing the project into a more scalable folder structure
* Implementing validation and authentication features
