# Basic Login System

A simple Node.js and Express-based login system with MongoDB for user authentication. This app allows users to register and log in securely, using hashed passwords and basic validation.

## Features
- User registration with email, username, and password
- Passwords hashed using bcrypt
- User login with authentication
- MongoDB for data storage
- RESTful API endpoints

## Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- bcrypt
- dotenv
- jsonwebtoken

## API Endpoints

### Register User
- **URL:** `/api/users/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "your name",
    "email": "test@email.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  - Success: `201 Created` with user data
  - Error: `400 Bad Request` if user exists or validation fails

### Login User
- **URL:** `/api/users/login`
- **Method:** `GET`
- **Body:**
  ```json
  {
    "email": "your@email.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  - Success: `200 OK` with login message and user info
  - Error: `400 Bad Request` if credentials are incorrect

## Project Structure
```
Basic_Login_System/
├── controllers/
│   └── userController.js
├── db/
│   └── connection.js
├── models/
│   └── userAuth.js
├── routes/
│   └── userRouter.js
├── server.js
├── package.json
├── readme.md
└── .env
```
