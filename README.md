# Node.js TypeScript API - User Management

This project is a simple RESTful API built using **Node.js** and **TypeScript**. It provides two endpoints:

- `GET /users` – Retrieve all users
- `POST /users` – Create a new user

---

## 🧾 Prerequisites

Before you begin, ensure you have the following installed:

```shell
# Node.js (v18 or above recommended)
node -v

# npm (comes with Node.js)
npm -v

# typescript
tsc  -v
```

```shell
# Clone the repository (or skip if already inside project)
git clone https://github.com/sangeethaCD/task7

#install depencies
npm install

#typescript configuration
tsc --init

# Build TypeScript code
npm run build

# Start the project
npm start

# Or use in development
npm run dev

```

```shell
 #API Endpoints
 Get All Users
    URL: /users
    Description: Retrieves a list of all users
#sample json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "password":"xyzrt"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "password":"xyzrt"
  }
]
#Create a User

    URL: /users
    Method: POST
    Description: Creates a new user.

#sample json
[{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "password":"456789"
}
]

```

```shell

# Start development server with nodemon
npm run dev

# Compile TypeScript to JavaScript
npm run build

# Start compiled code
npm start

```
