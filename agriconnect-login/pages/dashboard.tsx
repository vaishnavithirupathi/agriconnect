import { getSession, useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

// Only one Dashboard component and getServerSideProps export should exist!
export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to login if not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  // ⏳ While checking session
  if (status === "loading") {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-800 mb-4">🌾 AgriConnect Dashboard</h1>

      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        <p className="mb-2 text-lg font-medium text-gray-800">
          Welcome, {session?.user?.name || session?.user?.email}!
        </p>
        <p className="text-gray-600 mb-4">You're now logged in and viewing your private dashboard.</p>

        {/* Logout Button */}
        <button
          onClick={async () => {
            // Custom logout logic: clear local/session storage and sign out
            if (typeof window !== 'undefined') {
              localStorage.clear();
              sessionStorage.clear();
            }
            await signOut({ callbackUrl: "/login" });
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

//  Protect the page
export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
