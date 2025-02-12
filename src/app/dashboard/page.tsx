import { Button } from "@/components/ui/button";
import { authOptions } from "@/utils/authOptions";
import { Link } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}{" "}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged In User Email: {session?.user?.email}{" "}
          </h1>

          <Image
            src={session?.user?.image || ""}
            width={100}
            height={100}
            alt=""
            className="mx-auto rounded-full mt-5"
          />
          <Button>
            <Link>Go to Project Management</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
