const {createSlice} = require('@reduxjs/toolkit');

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    plus: state => {
      state.value += 1;
    },
    moins: state => {
      state.value -= 1;
    },
    chgtEtat: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {plus, moins, chgtEtat} = counterSlice.actions;

export default counterSlice.reducer;
