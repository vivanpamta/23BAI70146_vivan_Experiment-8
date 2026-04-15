# 🧪 Experiment 8: Frontend Integration with JWT APIs (Session-Based Authentication)

## 📌 Objective

The objective of this experiment is to develop a frontend application using React that integrates with backend JWT-based authentication APIs. The system implements session-based 
authentication, restricts access to protected routes, and demonstrates secure communication between frontend and backend.

## 🛠️ Technologies Used

* React.js (Frontend Framework)
* Node.js & Express.js (Backend)
* JSON Web Token (JWT) for authentication
* Axios for API communication
* Bootstrap & Material UI for styling

---

## 📁 Project Structure

```
Experiment-8/
│── backend/
│   ├── server.js
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Dashboard.js
│   │   │   ├── ProtectedRoute.js
│   │   ├── App.js
│   │   ├── index.js
```

---

## 🔐 Features Implemented

### 1. User Authentication (Login)

* User enters username and password
* Frontend sends POST request to `/login`
* Backend verifies credentials and generates JWT token
* Token is stored in `sessionStorage`
* User is redirected to dashboard upon successful login

---

### 2. Protected Dashboard

* Dashboard page is accessible only if JWT token exists
* Protected route implemented using `ProtectedRoute` component
* API call made to `/protected` endpoint
* Token is sent in Authorization header:

  ```
  Authorization: Bearer <token>
  ```
* Displays secured data on successful authentication

---

### 3. Session Management

* Token stored in browser `sessionStorage`
* Session persists until browser tab is closed or logout is performed

---

### 4. Logout Functionality

* Removes token from sessionStorage
* Redirects user back to login page
* Prevents unauthorized access to dashboard

---

### 5. Unauthorized Access Handling

* If user tries to access dashboard without token:

  * Automatically redirected to login page
* Ensures secure access control

---

## ⚙️ Backend Implementation

* Built using Express.js
* `/login` endpoint:

  * Validates user credentials
  * Generates JWT token using secret key
* `/protected` endpoint:

  * Verifies token from request header
  * Returns secured response if token is valid

---

## 🔄 Workflow

1. User logs in via frontend
2. Backend generates JWT token
3. Token stored in sessionStorage
4. User accesses protected dashboard
5. Token sent with API request
6. Backend verifies token and responds
7. User can logout to end session

---

## 📸 Screenshots Included

* Login Page UI
* Token stored in sessionStorage (DevTools)
* Accessing protected API data
* Unauthorized access redirection
* Logout functionality

---

## ✅ Result

Successfully implemented a secure session-based authentication system using JWT. The frontend and backend were integrated effectively, ensuring controlled access to protected 
resources and proper session handling.

---

## 🎯 Conclusion

This experiment demonstrates how JWT-based authentication can be integrated into a full-stack application. It highlights secure login mechanisms, protected routing, session handling, 
and frontend-backend communication in modern web applications.

