import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
   {
      id: "1",
      name: "Matias N. Sanchez",
      email: "sanchezmatidev@gmail.com",
      github: "MatiSanchezDev",
   },
   {
      id: "2",
      name: "Rodrigo Zapata",
      email: "facultadrodrigozapata@gmail.com",
      github: "rodrigoz09",
   },
   {
      id: "3",
      name: "Miguel Ángel Durán",
      email: "midudev@gmail.com",
      github: "midudev",
   },
   {
      id: "4",
      name: "Peter Martens",
      email: "peter@gmail.com",
      github: "petermartens98",
   },
];

export interface User {
   name: string;
   email: string;
   github: string;
}

export interface userWithId extends User {
   id: string;
}

const initialState: userWithId[] = (() => {
   const persistedState = localStorage.getItem("__redux__state__");
   return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const userSlices = createSlice({
   name: "users",
   initialState,
   reducers: {
      deleteUserById: (state, { payload }) => {
         const id = payload.id;
         return state.filter((user) => user.id !== id);
      },
   },
});

export default userSlices.reducer;
export const { deleteUserById } = userSlices.actions;
