import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    Providers.Credentials({
      // The name to display on the sign-in form (e.g., "Sign in with...")
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: "User", email: "user@example.com" }; // Replace with actual user lookup
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session(session, user) {
      session.user.id = user.id; // Add custom property to session
      return session;
    },
    async jwt(token, user) {
      if (user) {
        token.id = user.id; // Add custom property to JWT
      }
      return token;
    },
  },
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
  },
});