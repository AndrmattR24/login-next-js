"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = e.target.email.value;
    await signIn("email", { email });
  };

  return (
    <div className="card bg-stone-50 max-w-md mx-auto p-6 space-y-4 mt-20 rounded-lg">
      <h2 className="text-5xl font-bold text-center text-black ">LOGIN</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-xl font-medium text-black"
          >
            Email :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg"
        >
          Enviar enlace de inicio de sesión
        </button>
      </form>

      <div className="text-center">
        <button
          onClick={() => signIn("google")}
          className="w-full py-2 mt-2 bg-red-600 text-white rounded-lg"
        >
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
}
