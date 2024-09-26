import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./Slices/typeOfAttackSlice";
import typeOfAttackSlice from "./Slices/typeOfAttackSlice";
import attackCharacteristicsSlice from "./Slices/attackCharacteristicsSlice";
export const store = configureStore({
  reducer: {
    typeOfAttack: typeOfAttackSlice,
    attackCharacteristics: attackCharacteristicsSlice,
  },
});
export default store;
