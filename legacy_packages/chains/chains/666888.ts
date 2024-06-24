import type { Chain } from "../src/types";
export default {
  "chain": "Hela",
  "chainId": 666888,
  "explorers": [
    {
      "name": "Hela Official Runtime Testnet Explorer",
      "url": "https://testnet-blockexplorer.helachain.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://testnet-faucet.helachain.com"
  ],
  "infoURL": "https://helalabs.com",
  "name": "Hela Official Runtime Testnet",
  "nativeCurrency": {
    "name": "Hela HLUSD",
    "symbol": "HLUSD",
    "decimals": 18
  },
  "networkId": 666888,
  "rpc": [
    "https://666888.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-rpc.helachain.com"
  ],
  "shortName": "hela-testnet",
  "slip44": 1,
  "slug": "hela-official-runtime-testnet",
  "testnet": true
} as const satisfies Chain;