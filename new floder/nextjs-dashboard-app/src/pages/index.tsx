import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to the Next.js Dashboard App</h1>
      <p>
        Please <Link href="/login">log in</Link> to access your dashboard.
      </p>
      <p>
        If you are already logged in, you can go to the <Link href="/dashboard">dashboard</Link>.
      </p>
    </div>
  );
};

export default Home;