/* eslint-disable */

import { configureStore, createSlice } from '@reduxjs/toolkit';



let items = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem(state,action){     
      state.push(action.payload)
    },

    checkItem(state,action){     
      console.log(action.payload)
    },

    delItem(state,action){     
      let idx =state.indexOf(action.payload)
      state.splice(idx,1)   
    }




  }
})
export let { addItem , checkItem , delItem } = items.actions




export default configureStore({

  reducer: {
    items : items.reducer,

  }

})


