import { NetworkIds, Risk } from "🤝";

type FleetConfig = {
  [contractAddress: `0x${string}`]: {
    address: `0x${string}` | "";
    name: string;
    slug: string;
    bestFor: string;
    risk: Risk;
  };
};

type GetFleetConfig = () => {
  [networkId in NetworkIds]: FleetConfig;
};

const emptyConfig: FleetConfig = {
  // just for the (later) type safety - so everything has the same
  // type and is defined dont actually use "0x" key please
  "0x": {
    address: "",
    name: "",
    slug: "",
    bestFor: "",
    risk: "lower",
  },
};

export const getFleetConfig: GetFleetConfig = () => ({
  // FLEET ADDRESS SHOULD BE ALL LOWERCASE (unlike this comment)
  [NetworkIds.MAINNET]: emptyConfig,
  [NetworkIds.OPTIMISMMAINNET]: emptyConfig,
  [NetworkIds.ARBITRUMMAINNET]: {
    ...emptyConfig,
    "0x2653014cd3ad332a98b0a80ccf12473740df81c2": {
      address: "0x2653014cd3ad332a98b0a80ccf12473740df81c2",
      name: "Earn McYieldFace USDC",
      slug: "earn-mcyieldface-usdc",
      bestFor: "Chill earning",
      risk: "lower",
    },
  },
  [NetworkIds.BASEMAINNET]: {
    ...emptyConfig,
    "0xeb201f4915b6cbff5a01abd866fe6c6a026f224d": {
      address: "0xeb201f4915b6cbff5a01abd866fe6c6a026f224d",
      name: "USDC Ya Later",
      slug: "usdc-ya-later",
      bestFor: "Earning while asleep",
      risk: "higher",
    },
  },
});
