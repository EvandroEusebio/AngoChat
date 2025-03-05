import {create} from "zustand";

interface UserState {
  user: string[] | null;
  token: string | null
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  token: null,

  login: (userData: [], token: string) =>
    set({
      user: userData,
      token: token,
    }),
}));

export default useUserStore;
