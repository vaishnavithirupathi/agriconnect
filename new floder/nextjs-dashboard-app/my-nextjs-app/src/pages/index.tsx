import { signIn } from 'next-auth/react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App!</h1>
      <p>Please log in to access your dashboard.</p>
      <button onClick={() => signIn()}>Login</button>
    </div>
  );
};

export default Home;