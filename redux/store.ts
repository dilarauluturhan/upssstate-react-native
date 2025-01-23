import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// useDispatch = verileri göndermek
// useSelector = içindeki initialState'i okumak için
// ExtraReducers = asenkron gelen yapıların, cevap verilme süresi olan yapıların, süresinin kısalmasını sağlar
