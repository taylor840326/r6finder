import {createSlice} from '@reduxjs/toolkit'
import { stat } from 'fs'

const grep = createSlice({
  name: 'grep',
  initialState:{
    output:""
  },
  reducers:{
    setOutput:(state,payload) =>{
      state.output = payload.payload
    },
  }
})

export default grep;
