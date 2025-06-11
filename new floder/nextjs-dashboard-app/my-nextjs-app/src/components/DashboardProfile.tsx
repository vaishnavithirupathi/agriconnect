import { useSession } from "next-auth/react";

const DashboardProfile = () => {
    const { data: session } = useSession();

    if (!session) {
        return null; // Optionally, you can return a loading state or redirect
    }

    return (
        <div>
            <h1>Welcome, {session.user.name}!</h1>
            <p>Email: {session.user.email}</p>
            {/* Add more user information as needed */}
        </div>
    );
};

export default DashboardProfile;