# QR Menu System

## Overview
The QR Menu System is a web application that allows users to view restaurant menus and place orders using QR codes. The application consists of a client-side built with React and a server-side built with Node.js and Express.

## Features
- User authentication (sign up and sign in)
- View restaurant menus
- Place orders directly from the menu
- Admin dashboard for managing menu items and orders
- Responsive design for mobile and desktop
- Contactless dining experience

## Technologies Used

### Client
- **React**: A JavaScript library for building user interfaces
- **Vite**: A fast build tool for modern web projects
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript
- **Tailwind CSS**: A utility-first CSS framework for styling
- **Framer Motion**: A library for animations in React
- **Axios**: A promise-based HTTP client for making requests

### Server
- **Node.js**: JavaScript runtime for building server-side applications
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing data
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js
- **JWT**: JSON Web Tokens for secure authentication
- **dotenv**: Module for loading environment variables

## Getting Started

### Prerequisites
- Node.js (version >= 12.0.0)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies for the client:
   ```bash
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```bash
   cd ../server
   npm install
   ```

### Running the Application

1. Start the server:
   ```bash
   cd server
   npm run dev
   ```

2. Start the client:
   ```bash
   cd ../client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

### Authentication
- `POST /api/auth/signup`: Create a new user
- `POST /api/auth/signin`: Authenticate a user

### Menu Items
- `GET /api/menu/:restaurantId`: Get menu items for a specific restaurant
- `POST /api/menu`: Add a new menu item (requires authentication)
- `PUT /api/menu/:id`: Update an existing menu item (requires authentication)
- `DELETE /api/menu/:id`: Delete a menu item (requires authentication)

### Orders
- `POST /api/orders`: Create a new order
- `GET /api/orders/:id`: Get details of a specific order
- `PUT /api/orders/:id`: Update an existing order
- `DELETE /api/orders/:id`: Delete an order

## Folder Structure

### Client
```
client/
├── public/               # Static files
├── src/                  # Source files
│   ├── components/       # Reusable components
│   ├── pages/            # Page components
│   ├── context/          # Context API for state management
│   ├── data/             # Sample data
│   ├── types/            # TypeScript types
│   ├── App.tsx           # Main application component
│   └── index.tsx         # Entry point
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project metadata and dependencies
```

### Server
```
server/
├── controllers/         # Controller functions for handling requests
├── middleware/          # Middleware functions for authentication and logging
├── models/              # Mongoose models for MongoDB
├── routes/              # Express routes for API endpoints
├── .env                 # Environment variables
├── package.json         # Project metadata and dependencies
└── index.js             # Entry point for the server
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.