import { signIn } from "next-auth/react";
import { useState } from "react";

// Skillmate logo import (place your logo in public/skillmate-logo.svg)
// import Image from "next/image";

/**
 * LoginPage - Professional login page for AgriConnect using TailwindCSS.
 * - Google login enabled
 * - Username/password fields (not implemented, for demo only)
 * - Skillmate logo at the top
 */
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Real handler for username/password login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
      callbackUrl: "/dashboard",
    });
    if (res?.error) {
      alert("Invalid username or password");
    } else if (res?.ok) {
      window.location.href = "/dashboard";
    }
  };

  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {/* Skillmate Logo */}
        <div className="flex justify-center mb-6">
          <img src="/skillmate-logo.svg" alt="Skillmate Logo" className="h-12 w-auto" />
        </div>
        <h1 className="text-3xl font-bold text-green-800 mb-4 text-center">
          AgriConnect Login
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={`mt-1 block w-full border rounded-md p-2 ${username ? 'bg-black text-white border-black' : 'border-gray-300'}`}
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`mt-1 block w-full border rounded-md p-2 ${password ? 'bg-black text-white border-black' : 'border-gray-300'}`}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>

        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
        >
          <svg className="h-5 w-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.22l6.85-6.85C36.45 2.36 30.68 0 24 0 14.82 0 6.71 5.82 2.69 14.09l7.98 6.19C12.13 13.13 17.56 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.64 7.03l7.19 5.6C43.98 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M10.67 28.28a14.5 14.5 0 0 1 0-8.56l-7.98-6.19A23.94 23.94 0 0 0 0 24c0 3.77.9 7.34 2.69 10.47l7.98-6.19z"/><path fill="#EA4335" d="M24 48c6.48 0 11.93-2.15 15.9-5.85l-7.19-5.6c-2.01 1.35-4.6 2.16-8.71 2.16-6.44 0-11.87-3.63-13.33-8.55l-7.98 6.19C6.71 42.18 14.82 48 24 48z"/></g></svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}


