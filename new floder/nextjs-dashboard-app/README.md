# Next.js Dashboard App

This is a simple Next.js application that includes a private dashboard page. The application uses NextAuth.js for authentication, allowing users to log in and access the dashboard securely.

## Project Structure

```
nextjs-dashboard-app
├── src
│   ├── pages
│   │   ├── _app.tsx          # Custom App component
│   │   ├── index.tsx         # Home page
│   │   ├── api
│   │   │   └── auth
│   │   │       └── [...nextauth].ts # Authentication API routes
│   │   ├── dashboard.tsx      # Private dashboard page
│   │   └── login.tsx          # Login page
│   ├── components
│   │   └── Navbar.tsx         # Navbar component
│   ├── lib
│   │   └── auth.ts            # Authentication utilities
│   └── types
│       └── index.ts           # TypeScript types
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nextjs-dashboard-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure NextAuth.js:**
   Update the `[...nextauth].ts` file with your authentication providers and options.

4. **Run the application:**
   ```bash
   npm run dev
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000` to view the home page. You can log in to access the dashboard.

## Usage Guidelines

- Use the login page to authenticate users.
- The dashboard page is protected and can only be accessed by logged-in users.
- The Navbar component provides navigation links throughout the application.

## License

This project is licensed under the MIT License.