"use client";
import { Globe, Wifi } from "lucide-react";
import { useAccount, useChains, useSwitchChain } from "wagmi";
import { wagmiConfig } from "@/config/wagmi";

export const NetworkInfo = () => {
  const { chain: currentChain, isConnected } = useAccount();
  const chains = useChains();
  const { switchChain } = useSwitchChain();

  if (!isConnected) {
    return (
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-2xl p-8 text-center">
        <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="font-inter text-gray-500 dark:text-gray-400">
          Connect your wallet to view network
        </p>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-linear-to-r from-emerald-400 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
      <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border border-emerald-200/50 dark:border-emerald-700/50 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
            <Wifi className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-orbitron font-bold text-gray-900 dark:text-white">
            Network
          </h3>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-linear-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border border-emerald-200 dark:border-emerald-700 rounded-xl">
            <div>
              <p className="text-lg font-orbitron font-semibold text-emerald-800 dark:text-emerald-300">
                {currentChain?.name}
              </p>
              <p className="text-sm font-inter text-emerald-600 dark:text-emerald-400">
                Chain ID: {currentChain?.id}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-inter text-green-700 dark:text-green-400 font-medium">
                Connected
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-inter font-medium text-gray-700 dark:text-gray-300 mb-3">
              Switch Network
            </label>
            <select
              value={currentChain?.id || ""}
              onChange={(e) => {
                const chainId = parseInt(e.target.value);
                switchChain({
                  chainId:
                    chainId as (typeof wagmiConfig)["chains"][number]["id"],
                });
              }}
              className="w-full px-4 py-3 font-inter bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
            >
              {chains.map((chain) => (
                <option key={chain.id} value={chain.id}>
                  {chain.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
