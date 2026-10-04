# Juice Shop Login Form

## Description

This project is a simple login page created with HTML, CSS, JavaScript, Node.js, and Express. The purpose of the project is to practice both client-side and server-side input validation and explore common web security vulnerabilities.

The form contains an email field, password field, login button, and an area for displaying validation messages and server responses.

## Features

- Email and password input fields
- Prevents empty form submissions
- Checks that the email contains an `@` symbol
- Requires passwords to be at least 8 characters long
- Performs client-side validation using JavaScript
- Performs server-side validation using Node.js and Express
- Displays validation errors to the user
- Displays a server response after valid input is submitted

## How to Run

1. Download or clone this repository
2. Open the project folder in a terminal
3. Install the required dependencies with:

`npm install`

4. Start the server with:

`npm start`

5. Open a web browser and go to:

`http://localhost:3000`

6. Enter an email address and password into the login form
7. Click the **Login** button to test the validation

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express

## Validation

The application uses both client-side and server-side validation. The browser first checks that the fields are not empty, that the email contains an `@` symbol, and that the password is at least eight characters long. If the input passes those checks, it is sent to the Express server, where the same validation is performed again.

## Purpose

This project was created for an assignment involving OWASP and web application security. The application will be tested against  vulnerabilities such as, Cross-Site Scripting (XSS) to better understand how improper input handling can affect a web application.