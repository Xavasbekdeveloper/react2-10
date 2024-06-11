import { create } from "zustand";

const useStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || [],

  addUser: (payload) =>
    set((state) => {
      let newUser = [...state.user, payload];
      localStorage.setItem("user", JSON.stringify(newUser));

      return { user: newUser };
    }),
  removeUser: (payload) =>
    set((state) => {
      let newUser = state.user.filter((el) => el.id !== payload.id);
      localStorage.setItem("user", JSON.stringify(newUser));
      return { user: newUser };
    }),
  editUser: (payload) =>
    set((state) => {
      let newUser = state.user.map((el) =>
        el.id === payload.id ? payload : el
      );
      localStorage.setItem("user", JSON.stringify(newUser));
      return { user: newUser };
    }),
  follow: (payload) =>
    set((state) => {
      let newUser = state.user.map((el) =>
        el.id === payload.id ? { ...el, follow: !el.follow } : el
      );
      localStorage.setItem("user", JSON.stringify(newUser));
      return { user: newUser };
    }),
}));

export default useStore;
