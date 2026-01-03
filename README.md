#  Library Management System

A full-stack **Book Management System** built using **React** for the frontend, **Express.js** for the backend, and **MongoDB** as the database.  
This project implements complete ***CRUD operations*** with proper validations and error handling.

---

##  Tech Stack

- **Frontend:** React, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Testing Tools:** Postman, MongoDB Shell

---

##  Features

###  Create
- Inserted a minimum of **7 books** into the database  
- Each book contains:
  - **Title**
  - **Author**
  - **Category**
  - **Publication Year**
  - **Number of Copies**

---

###  Read
- Retrieve **all books**
- Retrieve books **by category**
- Retrieve books ***published after 2015***

---

###  Update
- Increase or decrease the number of available copies
- Change the book category
- Prevent ***invalid updates*** such as negative stock

---

###  Delete
- Automatically remove a book when the number of copies reaches **0**

---

##  Error Handling

The application properly handles the following cases:

- **Book not found**
- **Invalid update requests**
- ***Negative stock prevention***
- **Invalid input data**

Clear and meaningful error messages are returned from the backend and handled on the frontend.

---

##  Testing

- CRUD operations tested using **Postman**
- Database operations verified directly in **MongoDB**
- Frontend tested to confirm correct API integration and data updates

---

##  Environment Variables

Create a `.env` file inside the **server** directory and add:

- MONGO_URI=your_mongodb_connection_string
- PORT=5000
---
##  Project Structure

```text
project-root/
│
├── client/          # React frontend
│   ├── src/
│   └── package.json
│
├── server/          # Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── .env             # Environment variables (not committed)
├── .gitignore
└── README.md

