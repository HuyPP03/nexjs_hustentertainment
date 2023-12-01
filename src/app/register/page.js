"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState("/user_icon.png");
  const router = useRouter();
  const { status } = useSession();
  if (status === "authenticated") {
    redirect("/");
  }
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // if (!name || !email || !password) {
    //   setError("All fields are necessary.");
    //   return;
    // }
    // try {
    //   const res = await fetch("api/register", {
    //     method: "POST",
    //     headers: {
    //       "Context-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       password,
    //       image,
    //     }),
    //   });
    //   console.log(res);
    //   if (res.ok) {
    //     const form = e.target;
    //     form.reset();
    //     router.push("/login");
    //   } else {
    //     setError("User registration failed.");
    //   }
    // } catch (error) {
    //   setError("Error during registration.");
    // }
  };
  return (
    <section className="py-12">
      <h1 className="text-center text-primary text-4xl pt-10">Register</h1>
      <form className="block max-w-sm mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        {error && (
          <div className="text-primary flex items-center justify-center mt-4 font-semibold">
            {error}
          </div>
        )}

        <div className="flex justify-end items-center pt-4">
          <span className="text-sm font-semibold">
            Already have an account?
          </span>
          <Link href="/login" className="text-primary font-semibold text-sm">
            Login
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
};

export default Register;
