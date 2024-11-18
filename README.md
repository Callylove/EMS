# Employee Management System (EMS)

This is an **Employee Management System (EMS)** that allows admins to manage employee data, upload necessary documents, and view employee profiles. It is built using **React** for the frontend and **Node.js** with **Express** for the backend.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
3. [Frontend Setup (React)](#frontend-setup-react)
4. [Backend Setup (Node.js)](#backend-setup-nodejs)
5. [Database Setup](#database-setup)
6. [Running the Application](#running-the-application)
7. [API Routes](#api-routes)
8. [File Upload](#file-upload)

---

## Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/) (for running the server and React)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)) (for managing packages)
- [MySQL](https://www.mysql.com/) (for the database)

---

## Getting Started

Follow the steps below to get the application up and running on your local machine.

---

### Frontend Setup (React)

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/employee-management-system.git
    ```

2. **Navigate to the frontend directory**:
    ```bash
    cd employee-management-system/frontend
    ```

3. **Install dependencies**:
    Make sure you are in the `frontend` folder and run:
    ```bash
    npm install
    ```
    or if you are using yarn:
    ```bash
    yarn install
    ```

4. **Start the React development server**:
    Once the dependencies are installed, you can run the frontend on port 3000:
    ```bash
    npm dev
    ```
    or with yarn:
    ```bash
    yarn dev
    ```

    Your React app will be available at [http://localhost:3000](http://localhost:3000).

---

### Backend Setup (Node.js)

1. **Navigate to the backend directory**:
    ```bash
    cd employee-management-system/backend
    ```

2. **Install dependencies**:
    Inside the `backend` directory, run the following command:
    ```bash
    npm install
    ```

3. **Configure the Database**:
    Ensure your MySQL database is set up and the connection details are configured in the backend. 

    In the `backend` directory, create a `db.js` file and add the following configuration:
    
    ```bash
    DB_HOST=localhost
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=employee_management
    JWT_SECRET_KEY=your_jwt_secret_key
    ```

4. **Start the backend server**:
    After the dependencies are installed and the database is set up, you can start the Node.js server:
    ```bash
    npm start
    ```
    This will start the backend on port **3000** (you can configure it to use another port in the `.env` file if needed).

    The backend server will be available at [http://localhost:3000](http://localhost:3000).

---

### Database Setup

The backend interacts with a **MySQL** database. You'll need to set up the following tables:

1. **Create the database**:
    ```sql
    CREATE DATABASE employee_management;
    ```

2. **Set up the necessary tables**:

    - `employees` - Stores employee details
    - `users` - Stores user login details
    - `admin` - Stores admin login details
    - `category` - stores category details

## Running the Application

1. **Frontend**: 
   - Make sure the React development server is running using `npm dev` or `yarn dev`.
   
2. **Backend**:
   - Ensure the backend server is also running on port 3000 by using `npm start` from the backend directory.

Once both servers are running, your application will be live:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:3000](http://localhost:3000)

---

## API Routes

Below are some of the key API routes for the application:

### Authentication Routes:

- **POST /login**: Logs in an admin or user and returns a JWT token.
- **POST /register**: Registers a new user (with image upload support).

### Employee Routes:

- **GET /employees**: Fetches a list of all employees.
- **POST /employee**: Adds a new employee to the system.
- **PUT /employee/:id**: Updates an employee's information.
- **DELETE /employee/:id**: Deletes an employee.

### File Upload Routes:

- **POST /upload**: Uploads employee documents such as the WAEC result, JAMB result, Degree certificate, Employment letter, and Job termination.

---

## File Upload

To upload files (such as employee documents), ensure that your Node.js backend has the `multer` middleware set up to handle file uploads.

