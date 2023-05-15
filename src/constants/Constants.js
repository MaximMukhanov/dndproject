export const labels = [
  {
    label: "Enter damage formula: ",
    name: "damageFormula",
    pattern: "^[ dD0-9+-]*$",
    tooltip: "Damage formula: 2d8+1d6+7...",
  },
  {
    label: "Enter enemy AC:             ",
    name: "enemyAc",
    pattern: "^[-+0-9]*$",
    tooltip: "Only number allowed",
  },
  {
    label: "Enter attack modificator:",
    name: "attackModificator",
    pattern: "^[-+0-9]*$",
    tooltip: "Only number allowed",
  },
  {
    label: "Enter number of attacks:",
    name: "numberOfAttacks",
    pattern: "^[-+0-9]*$",
    tooltip: "Only number allowed",
  },
];
export const inputs = [
  {
    input: "Advantage",
  },
  {
    input: "Normal attack",
    checked: "checked",
  },
  {
    input: "Disadvantage",
  },
];
