import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { safeJsonParse } from "../lib/safeJson";



import { useEffect, useState } from "react";

// Only access localStorage on the client
export default function Dashboard() {
  const [myData, setMyData] = useState({});
  useEffect(() => {
    if (typeof window !== "undefined") {
      setMyData(safeJsonParse(localStorage.getItem("myKey"), {}));
    }
  }, []);


  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  if (status === "loading") {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-green-800">
          Welcome to AgriConnect{session?.user?.name ? `, ${session.user.name}` : ""}
        </h1>
        <p className="text-gray-600">You are now logged in.</p>
        <button
          onClick={async () => {
            // Custom logout logic: clear local/session storage and sign out
            if (typeof window !== 'undefined') {
              localStorage.clear();
              sessionStorage.clear();
            }
            await signOut({ callbackUrl: "/login" });
          }}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

// lib/safeJson.ts
export function safeJsonParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

