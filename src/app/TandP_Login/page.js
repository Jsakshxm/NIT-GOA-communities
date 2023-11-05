"use client"
import { useRouter } from "next/Navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">T&P Login</h1>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border rounded-lg w-full py-2 px-3 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border rounded-lg w-full py-2 px-3 mb-4"
        />
        <button
          type="submit"
          id="login-button"
          onClick={() => router.push("/Dashboard")}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}
