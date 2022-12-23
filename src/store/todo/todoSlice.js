import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: JSON.parse(localStorage.getItem('todo')) || [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.value.push(action.payload)
        },
        deleteTask: (state, action) => {
            const index = state.value.findIndex((item) => item.id === action.payload.id)
            state.value.splice(index, 1)
        },
        updateStatus: (state, action) => {
            let index = state.value.findIndex((item) => item.id === action.payload.id)
            let updatedTask = action.payload
            state.value.splice(index, 1, updatedTask)
        },
        deleteDone: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, updateStatus, deleteDone } = todoSlice.actions

export default todoSlice.reducer