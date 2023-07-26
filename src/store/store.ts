import { Middleware, configureStore } from "@reduxjs/toolkit";
import userSlices from "./users/userSlices";

const persistanceLocalStorageMiddleware: Middleware =
   (store) => (next) => (action) => {
      next(action);
      localStorage.setItem(
         "__redux__state__",
         JSON.stringify(store.getState()),
      );
   };

export const store = configureStore({
   reducer: {
      users: userSlices,
   },
   middleware: [persistanceLocalStorageMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
