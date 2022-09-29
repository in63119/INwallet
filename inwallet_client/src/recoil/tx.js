import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const txState = atom({
  key: "transactionHash",
  default: {
    ethTx: [],
    bnbTx: [],
  },
  effects_UNSTABLE: [persistAtom],
});