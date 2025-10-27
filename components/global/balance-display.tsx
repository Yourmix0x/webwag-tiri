"use client";
import { AlertCircle, Wallet, Loader, TrendingUp } from "lucide-react";
import { useAccount, useBalance } from "wagmi";

export const BalanceDisplay = () => {
  const { isConnected, address } = useAccount();
  const {
    isLoading,
    error,
    data: balance,
  } = useBalance({
    address: address,
  });

  if (!isConnected) {
    return (
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-2xl p-8 text-center">
        <Wallet className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="font-inter text-gray-500 dark:text-gray-400">
          Connect your wallet to view balance
        </p>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
      <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border border-blue-200/50 dark:border-blue-700/50 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-orbitron font-bold text-gray-900 dark:text-white">
            Wallet Balance
          </h3>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Loader className="w-8 h-8 animate-spin text-blue-500 mx-auto mb-3" />
              <p className="font-inter text-gray-500 dark:text-gray-400">
                Loading balance...
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-12 text-red-500">
            <div className="text-center">
              <AlertCircle className="w-8 h-8 mx-auto mb-3" />
              <p className="font-inter">Error loading balance</p>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="text-4xl font-orbitron font-bold text-gray-900 dark:text-white mb-2">
              {balance?.formatted}
            </div>
            <div className="text-lg font-inter text-blue-600 dark:text-blue-400 font-semibold">
              {balance?.symbol}
            </div>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
              <p className="text-sm font-inter text-blue-700 dark:text-blue-300">
                Native token balance for connected wallet
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
