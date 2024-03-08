import {configureStore} from '@reduxjs/toolkit'
import grep  from './grep'

const store = configureStore({
  reducer: {
    grep: grep.reducer
  }
})

export default store;
