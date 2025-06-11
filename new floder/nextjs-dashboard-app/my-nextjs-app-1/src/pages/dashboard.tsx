import { useSession, signIn } from "next-auth/react";
import DashboardProfile from "../components/DashboardProfile";

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    signIn(); // Redirect to login if not authenticated
    return null;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardProfile user={session.user} />
    </div>
  );
};

export default Dashboard;