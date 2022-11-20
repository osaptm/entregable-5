import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/user/userSlice'

export const GLOBAL_STATES = configureStore({
  reducer: {
    user: userReducer,
  },
})