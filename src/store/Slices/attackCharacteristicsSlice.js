import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  damageFormula: "",
  enemyAc: "",
  attackModificator: "",
  numberOfAttacks: "",
};
const attackCharacteristicsSlice = createSlice({
  name: "AttackCharacteristics",
  initialState,
  reducers: {
    changeAttackCharacteristics: (state, action) => {
      const { name, value } = action.payload;
      if (name == "damageFormula") {
        if (/^(?:[0-9d+ ]+)?$/.test(value) && !value.includes("dd"))
          state[name] = value;
      } else if (/^(?:\d+)?$/.test(value)) state[name] = value;
    },
  },
});
export const { changeAttackCharacteristics } =
  attackCharacteristicsSlice.actions;
export default attackCharacteristicsSlice.reducer;
