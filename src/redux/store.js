import { configureStore } from "@reduxjs/toolkit";
import pitchReducer from "./Slices/pitchSlice";

const store = configureStore({
    reducer: {
        pitch: pitchReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([paymentApi.middleware, bookingApi.middleware]),
});

export default store;
