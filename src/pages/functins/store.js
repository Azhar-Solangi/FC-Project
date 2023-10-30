import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './functions'
import reducers from './functions.jsx';

export const store =configureStore({
    reducer: {
      cart:counterReducer,

    },
});