"use client";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"></div>
  );
}
