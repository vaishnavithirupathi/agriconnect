// Simple in-memory user store for demo purposes. Replace with DB in production.
export interface User {
  id: string;
  username: string;
  password: string; // In production, store hashed passwords!
  name: string;
  email: string;
}

export const users: User[] = [
  {
    id: "1",
    username: "demo",
    password: "password123", // In production, hash this!
    name: "Demo User",
    email: "demo@agriconnect.com",
  },
];

export function findUserByUsername(username: string): User | undefined {
  return users.find((u) => u.username === username);
}
