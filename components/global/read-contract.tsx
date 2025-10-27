"use client";

import { Eye, Loader, BookOpen, Database } from "lucide-react";
import { useAccount, useReadContract } from "wagmi";
import { DECE_ABI, DECE_ADDRESS } from "@/config/constant";
import { formatUnits } from "viem";

export const ReadContract = () => {
  const { address, isConnected } = useAccount();

  const { data, isLoading, error } = useReadContract({
    abi: DECE_ABI,
    address: DECE_ADDRESS,
    functionName: "balanceOf",
    args: [address],
    query: {
      enabled: !!address,
    },
  });

  const formattedBalance = data ? formatUnits(data as bigint, 18) : "0.00";

  if (!isConnected) {
    return (
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-2xl p-8 text-center">
        <Database className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="font-inter text-gray-500 dark:text-gray-400">
          Connect wallet to read contract data
        </p>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
      <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border border-purple-200/50 dark:border-purple-700/50 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-orbitron font-bold text-gray-900 dark:text-white">
            Read Contract
          </h3>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl border border-purple-200 dark:border-purple-700">
            <div className="flex items-center space-x-2 mb-3">
              <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <p className="text-sm font-inter font-medium text-purple-700 dark:text-purple-300">
                DECE Token Balance
              </p>
            </div>

            {isLoading ? (
              <div className="flex items-center space-x-3 py-4">
                <Loader className="w-6 h-6 animate-spin text-purple-500" />
                <span className="font-inter text-purple-600 dark:text-purple-400">
                  Reading contract...
                </span>
              </div>
            ) : error ? (
              <p className="text-red-500 font-inter py-4">
                Error fetching balance
              </p>
            ) : (
              <div className="py-2">
                <p className="text-xl font-orbitron font-bold text-purple-800 dark:text-purple-300 md:text-2xl lg:text-3xl">
                  {formattedBalance} DECE
                </p>
              </div>
            )}
          </div>

          <div className="text-[10px] md:text-xs font-inter text-gray-500 dark:text-gray-400 space-y-1 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl">
            <p>
              <span className="font-medium">Contract:</span> {DECE_ADDRESS}
            </p>
            <p>
              <span className="font-medium">Function:</span> balanceOf(address)
            </p>
            <p>
              <span className="font-medium">Type:</span> View Function
              (Read-Only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
