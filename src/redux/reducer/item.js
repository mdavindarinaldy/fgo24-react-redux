import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const item = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addData: function(state, action) {
            const id = state.data.length+1
            state.data.push({
                id, 
                ...action.payload
            })
            return state
        },
        removeData: function(state) {
            state.data.pop()
            return state
        }
    }
})

export const {addData, removeData} = item.actions
export default item.reducer