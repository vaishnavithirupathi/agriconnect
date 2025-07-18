interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
}