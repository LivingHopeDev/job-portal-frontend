import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import authReducer from "../features/authSlice";
import { jobApi } from "../features/jobApi";

const persistConfig = {
  key: "root",
  storage,
};
// const rootReducer = (state, action) => {
//   if (action.type === "RESET") {
//     storage.removeItem("persist:root");
//     state = {};
//   }
//   return reducers(state, action);
// };
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
    [jobApi.reducerPath]: jobApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(jobApi.middleware);
  },
});
