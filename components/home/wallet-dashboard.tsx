"use client";
import { WalletConnect } from "../global/wallet-connect";

export const WalletDashboard = () => {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gray-900 dark:text-white mb-4">
            webwag Playground
          </h2>
          <p className="text-xl font-inter text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore blockchain interactions with these interactive components
          </p>
        </div>

        <div className="space-y-8">
          {/* Wallet Connection */}
          <WalletConnect />
        </div>
      </div>
    </section>
  );
};
