"use client";

import Right from "@/components/Icons/Right";
import { useProfile } from "@/components/Layout/UseProfile";
import UserTabs from "@/components/Layout/UserTabs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch("/api/users").then((res) => {
      res.json().then((users) => {
        setUsers(users);
      });
    });
  }, []);
  if (loading) return "Loading user info...";
  if (!data?.admin) return "Not an admin";
  return (
    <section className="mt-8 mx-auto max-w-2xl">
      <UserTabs isAdmin={data.admin} />
      <h1 className="text-center text-primary text-4xl pt-10 font-semibold italic p-4">
        Existing users
      </h1>
      <div className="mt-8">
        {users?.length > 0 &&
          users.map((user) => (
            <div
              key={user._id}
              className="bg-gray-200 rounded-lg mb-2 p-1 px-4 flex items-center gap-4"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grow">
                <div className="text-gray-700 font-semibold">
                  {!!user.name && <span>{user.name}</span>}
                  {!user.name && <span className="italic">No name</span>}
                </div>
                <span className="text-gray-500">{user.email}</span>
              </div>
              <div>
                <Link className="button" href={"/users/edit/" + user._id}>
                  Edit
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
