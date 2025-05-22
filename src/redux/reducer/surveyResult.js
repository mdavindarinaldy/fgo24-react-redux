import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            name: "Yahut",
            age: 20,
            gender: 'Laki-laki',
            smoker: 'Yes',
            cigar: ['Lucky Strike']
        }, {
            name: "Pradita",
            age: 29,
            gender: 'Laki-laki',
            smoker: 'Yes',
            cigar: ['Esse']
        }, {
            name: "Elon",
            age: 23,
            gender: 'Laki-laki',
            smoker: 'Yes',
            cigar: ['Lucky Strike']
        }, {
            name: "Mamang",
            age: 46,
            gender: 'Laki-laki',
            smoker: 'Yes',
            cigar: ['Gudang Garam Filter']
        } 
    ]
}

const surveyResult = createSlice({
    name: 'surveyResult',
    initialState,
    reducers: {
        addData: function(state, action) {
            state.data.push({
                ...action.payload
            })
            return state
        },
        removeData: function(state) {
            state.data.pop()
            return state
        },
        removeItem: function(state, action) {
            state.data.splice(action.payload, 1)
            return state
        }
    }
})

export const {addData, removeData, removeItem} = surveyResult.actions
export default surveyResult.reducer