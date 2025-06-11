// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { users, User } from '../../lib/users';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return all users (for demo only, do not expose in production)
    return res.status(200).json(users.map(({ password, ...u }) => u));
  }
  if (req.method === 'POST') {
    // Register a new user
    const { username, password, name, email } = req.body;
    if (!username || !password || !name || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (users.find(u => u.username === username)) {
      return res.status(409).json({ error: 'Username already exists' });
    }
    const newUser: User = {
      id: (users.length + 1).toString(),
      username,
      password, // In production, hash this!
      name,
      email,
    };
    users.push(newUser);
    return res.status(201).json({ message: 'User registered', user: { ...newUser, password: undefined } });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
