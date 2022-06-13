import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        message: '',
        token: '',
        userDetails: {
            email:'',
            fullName:''
        }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
           
        }
    }
})

export default userSlice.reducer;
export const { setUser } = userSlice.actions;