"use client";
import { Loader, Wallet, Zap, Shield } from "lucide-react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export const WalletConnect = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <div className="relative group">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-400 via-green-500 to-teal-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border border-emerald-200/50 dark:border-emerald-700/50 rounded-2xl p-8 shadow-2xl">
          <div className="flex gap-4 flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <p className="text-lg font-orbitron font-semibold text-emerald-800 dark:text-emerald-300">
                    Wallet Connected
                  </p>
                </div>
                <p className="text-sm font-inter text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-lg">
                  {address.slice(0, 8)}...{address.slice(-6)}
                </p>
              </div>
            </div>
            <button
              onClick={() => disconnect()}
              className="flex items-center space-x-2 px-6 py-3 text-sm font-inter font-medium text-emerald-700 dark:text-emerald-300 bg-white dark:bg-slate-700 border border-emerald-300 dark:border-emerald-600 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors shadow-lg"
            >
              <span>Disconnect</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-linear-to-r from-indigo-400 via-purple-500 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
      <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border-2 border-dashed border-indigo-300/50 dark:border-indigo-700/50 rounded-2xl p-12 text-center shadow-2xl">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-linear-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-2xl">
              <Wallet className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>

          <h3 className="text-2xl font-orbitron font-bold text-gray-900 dark:text-white mb-3">
            Connect Your Wallet
          </h3>
          <p className="font-inter text-gray-600 dark:text-gray-300 mb-8">
            Start your Web3 journey by connecting your wallet to interact with
            the blockchain
          </p>

          <div className="space-y-4">
            {connectors.map((connector) => (
              <button
                key={connector.name}
                onClick={() => connect({ connector })}
                disabled={isPending && connector.id === connector.id}
                className="w-full group flex items-center justify-center space-x-3 px-8 py-4 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-xl hover:shadow-2xl font-inter font-medium"
              >
                {isPending && connector.id === connector.id ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <Zap className="w-5 h-5 group-hover:animate-pulse" />
                )}
                <span className="text-lg">Connect {connector.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
