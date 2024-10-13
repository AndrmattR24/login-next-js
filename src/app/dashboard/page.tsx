"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <div>Bienvenido al Dashboard, {session?.user?.name}</div>;
};

export default Dashboard;
