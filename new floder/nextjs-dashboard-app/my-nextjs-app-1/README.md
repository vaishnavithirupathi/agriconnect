# My Next.js App

This is a Next.js application that implements user authentication using NextAuth and connects to a MongoDB database. The application features a dashboard for logged-in users and a landing page for general access.

## Features

- User authentication with NextAuth
- MongoDB integration for user data storage
- Protected dashboard page that displays user profile information
- Landing page with links to login and other features

## Project Structure

```
my-nextjs-app
├── src
│   ├── pages
│   │   ├── api
│   │   │   └── auth
│   │   │       └── [...nextauth].ts
│   │   ├── dashboard.tsx
│   │   └── index.tsx
│   ├── components
│   │   └── DashboardProfile.tsx
│   ├── lib
│   │   └── mongodb.ts
│   └── types
│       └── next-auth.d.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-nextjs-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB database and update the connection string in `src/lib/mongodb.ts`.

4. Configure NextAuth in `src/pages/api/auth/[...nextauth].ts` with your authentication providers.

5. Run the application:
   ```
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the landing page.

## Usage

- Visit the landing page to log in.
- Once logged in, you will be redirected to the dashboard where you can view your profile information.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.