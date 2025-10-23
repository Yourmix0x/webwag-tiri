import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected, metaMask, safe } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected(), metaMask(), safe()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
