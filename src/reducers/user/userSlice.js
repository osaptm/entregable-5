import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userName:'',
  status:true,
  totalxpag:20,
  ModeDark:false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser:(state,action)=>{
        state.userName = action.payload.userName;
        state.status = true;
    },
    unsetUser:(state)=>{
      state.userName = '';
    },
  },
})


export const {setUser, unsetUser} = userSlice.actions
export default userSlice.reducer