import { NETWORK_ID, Wallet } from '../lib/near';
import { create as createStore } from 'zustand';

interface StoreState {
  wallet: Wallet | undefined;
  signedAccountId: string;
  networkId: string;
  setNetworkId: (networkId: string) => void;
  setWallet: (wallet: Wallet) => void;
  setSignedAccountId: (signedAccountId: string) => void;
}

// Store to share wallet and signed account
export const useWallet = createStore<StoreState>((set) => ({
  wallet: undefined,
  signedAccountId: '',
  networkId: NETWORK_ID,
  setNetworkId: (networkId) => set({ networkId }),
  setWallet: (wallet) => set({ wallet }),
  setSignedAccountId: (signedAccountId) => {
    return set({ signedAccountId });
  }
}));
