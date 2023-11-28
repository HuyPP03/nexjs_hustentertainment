"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const res = await signIn("credentials", {
    //       email,
    //       password,
    //       redirect: false,
    //     });
    //     if (res.error) {
    //       setError("Invalid Credentials");
    //       return;
    //     }
    //     router.replace("/");
    //   } catch (error) {
    //     console.log(error);
    //   }
  };
  return (
    <section className="py-12">
      <h1 className="text-center text-primary text-4xl pt-10">Login</h1>
      <form className="block max-w-sm mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && (
          <div className="text-primary flex items-center justify-center mt-4 font-semibold">
            {error}
          </div>
        )}
        <div className="flex justify-end items-center pt-4">
          <span className="text-sm font-semibold">
            Don&apos;t you have an account?
          </span>
          <Link href="/register" className="text-primary font-semibold text-sm">
            Register
          </Link>
        </div>
      </form>
      <div className="my-2 text-center text-gray-500">
        or login with provider
      </div>
      <button
        // onClick={() => signIn("google", { callbackUrl: "/" })}
        className="flex gap-4 justify-center max-w-sm mx-auto"
      >
        <Image src={"/google.jpg"} alt={""} width={24} height={24} />
        Login with google
      </button>
    </section>
  );
}
