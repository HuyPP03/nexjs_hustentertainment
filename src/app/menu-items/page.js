"use client";

import UserTabs from "@/components/Layout/UserTabs";
import { useProfile } from "@/components/Layout/UseProfile";
import Link from "next/link";
import Right from "@/components/Icons/Right";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MenuItemsPage() {
  const [menuItems, setMenuItems] = useState([]);
  const { loading, data } = useProfile();
  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setMenuItems(menuItems);
      });
    });
  }, []);
  if (loading) return "Loading user profile...";
  if (!data?.admin) return "Not an admin.";
  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={data.admin} />
      <div className="mt-8">
        <Link className="button flex" href={"/menu-items/new"}>
          <span>Create new menu item</span>
          <Right />
        </Link>
      </div>
      <h1 className="text-center text-primary text-4xl pt-10 font-semibold italic p-4">
        Existing concert
      </h1>
      <div>
        <h2 className="text-sm text-gray-500 mt-4">Edit menu item</h2>
        <div className="grid grid-cols-3 gap-2">
          {menuItems?.length > 0 &&
            menuItems.map((item) => (
              <Link
                href={"/menu-items/edit/" + item._id}
                className="button mb-2 flex-col"
                key={item._id}
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={""}
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </div>
                <div className="text-center">{item.name}</div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
