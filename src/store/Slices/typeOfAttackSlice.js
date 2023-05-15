import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "Normal attack",
};
const typeOfAttack = createSlice({
  name: "input",
  initialState,
  reducers: {
    changeTypeOfAttack: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeTypeOfAttack } = typeOfAttack.actions;
export default typeOfAttack.reducer;
