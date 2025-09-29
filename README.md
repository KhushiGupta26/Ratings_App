# Rating App (Fullstack)
This repository contains my solution to the coding challenge provided by Roxiler Systems.

**📌Project Review / Conclusion**

The Rating App is a fullstack web application built using React (frontend), Node.js with Express (backend), and MySQL with Sequelize (database). The project successfully demonstrates core functionalities of a role-based system:
- Users can sign up and log in securely (JWT-based authentication).
- After login, users can add new stores and view the complete store list.
- Users are able to submit ratings (1–5) for stores, and the average rating of each store updates dynamically.
- The application includes a simple and clean frontend UI where signup, login, and store-related operations can be performed easily.
- Data persistence is ensured through MySQL, where Users, Stores, and Ratings tables are maintained and can be verified through MySQL Workbench.

This project demonstrates the integration of frontend, backend, and database technologies into a working fullstack application. It provides a foundation that can be extended further with advanced features such as admin dashboards, store owner views, data filtering, and validation rules.

**✅Features Completed**

## User Authentication
1. Signup (name, email, address, password)
2. Login (JWT token generated, stored in localStorage)

## Stores
1. Normal users (after login) can add a new store.
2. All users can see store list.

## Ratings
1. Logged-in users can rate any store (1–5).
2. If rating updated, store’s average rating auto-updates.

## Frontend Integration
1. Signup page → alert “Signed up!”
2. Login page → alert “Login OK”, redirect to Stores page
3. Stores page → list of stores visible, add store, add rating (alerts shown)

## Database
1. MySQL schema created with 3 tables → Users, Stores, Ratings.
2. Data visible in MySQL Workbench.

**Tech Stack**
- Frontend: React + Axios + React Router
- Backend: Node.js + Express.js
- Database: MySQL (ORM: Sequelize)
- Authentication: JWT (JSON Web Tokens)
- Password Security: bcrypt (hashing)

**Run Instructions**
### Backend
cd backend
npm install
node index.js

### Frontend
cd frontend
npm install
npm start

**Future Enhancements**
- Better UI styling (Material UI / Tailwind).
- Pagination for large store/user lists.

- Unit tests for APIs.

