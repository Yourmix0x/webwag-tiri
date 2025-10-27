import { createConfig, http } from "wagmi";
import { mainnet, sepolia, avalanche } from "wagmi/chains";
import { injected, metaMask, safe } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, avalanche],
  connectors: [injected(), metaMask(), safe()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [avalanche.id]: http(),
  },
});
