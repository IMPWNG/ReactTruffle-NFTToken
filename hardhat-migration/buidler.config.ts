import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config";

usePlugin("buidler-ethers-v5");
usePlugin("buidler-deploy");
usePlugin("@symfoni/buidler-typechain");
usePlugin("@symfoni/buidler-react");

const config: BuidlerConfig = {
  solc: {
    version: "0.8.1",
  },
};

export default config;