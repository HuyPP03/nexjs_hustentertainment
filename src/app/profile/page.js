"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const { data: session, status, update } = useSession();
  const [userName, setUserName] = useState(session?.user?.name || "");
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  async function handleProfileInfoUpdate(e) {
    // e.preventDefault();
    // try {
    //   setSaved(false);
    //   setIsSaving(true);
    //   const response = await fetch("/api/profile", {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name: userName }),
    //   });
    //   setIsSaving(false);
    //   if (response.ok) setSaved(true);
    // } catch (error) {
    //   console.log(error);
    // }
  }
  async function handleFileChange(e) {
    // try {
    //   const files = e.target.files;
    //   console.log(files[0]);
    //   if (files?.length === 1) {
    //     const data = new FormData();
    //     data.set("file", files[0]);
    //     const response = await fetch("/api/upload", {
    //       method: "POST",
    //       body: data,
    //       // headers: { "Content-Type": "multipart/form-data" },
    //     });
    //     console.log("Image uploaded:", response.data);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }
  //   if (status === "loading") {
  //     return "Loading...";
  //   } else if (status === "unauthenticated") {
  //     redirect("/login");
  //   }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl pt-10 font-semibold italic p-4">
        Profile
      </h1>
      <div className="max-w-lg mx-auto">
        {saved && (
          <h2 className="text-center bg-green-200 p-4 rounded-lg border-2 border-green-500 mb-3">
            Profile saved!
          </h2>
        )}
        {isSaving && (
          <h2 className="text-center bg-blue-200 p-4 rounded-lg border-2 border-blue-500 mb-3">
            Saving...
          </h2>
        )}
        <div className="flex gap-2">
          <div>
            <div className="bg-gray-200 p-1 rounded-lg relative w-[150px]">
              <Image
                className="rounded-lg h-full w-full"
                // src={session?.user?.image}
                alt=""
                width={150}
                height={150}
              />
              <label>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="block border-2 border-blue-600 rounded-lg p-2 text-center cursor-pointer mt-2">
                  Edit
                </span>
              </label>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              placeholder="Full name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input>
            <input
              type="email"
              placeholder="Email"
              disabled={true}
              // value={session.user.email}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
