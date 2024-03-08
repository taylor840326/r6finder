import {createSlice} from '@reduxjs/toolkit'
import { stat } from 'fs'

const grep = createSlice({
  name: 'grep',
  initialState:{
    output:""
  },
  reducers:{
    setOutput:(state,payload) =>{
      state.output = payload
      console.log('store set payload',state.output)
    },
    getOutput:(state) =>{
      return state.output;
    }
  }
})

export default grep;
