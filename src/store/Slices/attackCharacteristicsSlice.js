import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  damageFormula: "",
  enemyAc: "",
  attackModificator: "",
  numberOfAttacks: "",
};
const AttackCharacteristicsSlice = createSlice({
  name: "AttackCharacteristics",
  initialState,
  reducers: {
    changeAttackCharacteristics: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
});
export const changeAttackCharacteristics = AttackCharacteristicsSlice.actions;
export default AttackCharacteristicsSlice.reducer;
