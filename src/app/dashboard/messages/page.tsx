/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardMessageCard from "@/components/DashboardMessageCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Message",
  description: "This page is for messages of Asif's Portfolio Dashboard",
};

const DashboardMessages = async () => {
  const res = await fetch("http://localhost:5000/api/v1/contact", {
    cache: "no-store",
  });
  const messages = await res.json();
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore All <span className="text-red-600">Messages</span>
      </h1>
      <div className="grid grid-cols-3 gap-6 my-5">
        {messages?.data?.map((message: any) => (
          <DashboardMessageCard message={message} key={message?._id} />
        ))}
      </div>
    </div>
  );
};

export default DashboardMessages;
