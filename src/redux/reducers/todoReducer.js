const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, { payload }) => {
      state.value = [...state.value, payload];
    },
    deleteToDo:(state,{payload})=>{
        state.value = state.value.filter((item)=>item !==payload)
    },
    xEkle:(state,{payload})=>{
        state.value = state.value.map((item)=> item === payload && item + "xxx")
    }
  },
});

export const { addToDo,deleteToDo,xEkle } = todoSlice.actions;
export default todoSlice.reducer;
