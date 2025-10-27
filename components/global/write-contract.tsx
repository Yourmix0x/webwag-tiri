"use client";
import { Loader, Send, CheckCircle, Zap, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { parseUnits } from "viem";
import { useWriteContract, useSimulateContract, useAccount } from "wagmi";
import { DECE_ABI, DECE_ADDRESS } from "@/config/constant";

export const WriteContract = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const { address } = useAccount();
  const [txStatus, setTxStatus] = useState<
    "preparing" | "sending" | "success" | "error" | null
  >(null);

  const {
    writeContract,
    isPending,
    error,
    isError: txError,
    isSuccess: txSuccess,
  } = useWriteContract();

  const { refetch: refetchSimulation } = useSimulateContract({
    abi: DECE_ABI,
    address: DECE_ADDRESS,
    functionName: "transfer",
    args: [recipient, parseUnits(amount || "0", 18)],
  });

  const handleSend = async () => {
    if (!recipient || !amount) return;
    try {
      const { error } = await refetchSimulation();
      if (error) {
        alert(error?.message);
        return;
      }
      writeContract({
        abi: DECE_ABI,
        address: DECE_ADDRESS,
        functionName: "transfer",
        args: [recipient, parseUnits(amount, 18)],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (txSuccess) {
      return setTxStatus("success");
    }
    if (txError) {
      alert(error?.message);
      return setTxStatus("error");
    }
  }, [txSuccess, txError, error]);

  if (!address) {
    return (
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-2xl p-8 text-center">
        <Zap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="font-inter text-gray-500 dark:text-gray-400">
          Connect wallet to interact with contracts
        </p>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-red-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
      <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border border-orange-200/50 dark:border-orange-700/50 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-linear-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-orbitron font-bold text-gray-900 dark:text-white">
            Write Contract
          </h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-inter font-medium text-gray-700 dark:text-gray-300 mb-3">
              Recipient Address
            </label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="0x..."
              className="w-full px-4 py-3 font-inter bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-inter font-medium text-gray-700 dark:text-gray-300 mb-3">
              Amount (DECE)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full px-4 py-3 font-inter bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
            />
          </div>

          {txStatus && (
            <div
              className={`p-6 rounded-xl border ${
                txStatus === "success"
                  ? "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700"
                  : txStatus === "error"
                  ? "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700"
                  : "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700"
              }`}
            >
              <div className="flex items-center space-x-3">
                {txStatus === "success" ? (
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                ) : txStatus === "error" ? (
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                ) : (
                  <Loader className="w-6 h-6 animate-spin text-blue-600 dark:text-blue-400" />
                )}
                <div>
                  <span
                    className={`font-inter font-medium ${
                      txStatus === "success"
                        ? "text-green-800 dark:text-green-300"
                        : txStatus === "error"
                        ? "text-red-800 dark:text-red-300"
                        : "text-blue-800 dark:text-blue-300"
                    }`}
                  >
                    {txStatus === "preparing" && "Preparing transaction..."}
                    {txStatus === "sending" &&
                      "Transaction sent! Waiting for confirmation..."}
                    {txStatus === "success" && "Transaction confirmed! ✅"}
                    {txStatus === "error" && "Transaction failed"}
                  </span>
                  {txStatus === "success" && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-mono">
                      Tx Hash: 0xabcd...1234
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleSend}
            disabled={isPending || !recipient || !amount}
            className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl font-inter font-medium text-lg"
          >
            {isPending ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            <span>{isPending ? "Sending..." : "Send Tokens"}</span>
          </button>

          <div className="text-xs font-inter text-gray-500 dark:text-gray-400 space-y-1 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl">
            <p>
              <span className="font-medium">Gas Fee:</span> ~$2.50 (estimated)
            </p>
            <p>
              <span className="font-medium">Function:</span> transfer(address,
              uint256)
            </p>
            <p>
              <span className="font-medium">Type:</span> State-Changing
              Transaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
