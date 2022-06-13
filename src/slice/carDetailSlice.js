import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
    loading: false,
    carDetail: [],
    error: '',
}


//generate pending, fulfilled and rejected action types

export const fetchCarDetail = createAsyncThunk('carDetail/fetchCarDetail', () => {
return axios
        .get(`${process.env.REACT_APP_JSON_API}cardetails`)
        .then( res => res.data)
})


const carDetailSlice = createSlice({
    name: 'carDetail',
    initialState,
    //need to use extraReducer for accesing promise returned by asyncThunk
    extraReducers: builder => {
        builder.addCase(fetchCarDetail.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchCarDetail.fulfilled, (state, action) =>{ 
            state.loading = false   
            state.carDetail = action.payload
        })
        builder.addCase(fetchCarDetail.rejected, (state) => { 
            state.loading = false
            state.error = 'error'
    })
    }
})

export default carDetailSlice.reducer;
