import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DamageCalc() {
  const typeOfAttack = useSelector((state) => state.typeOfAttack.value);
  const attackModificator = useSelector(
    (state) => state.attackCharacteristics.attackModificator
  );
  const damageFormula = useSelector(
    (state) => state.attackCharacteristics.damageFormula
  );
  const enemyAc = useSelector((state) => state.attackCharacteristics.enemyAc);
  const numberOfAttacks = useSelector(
    (state) => state.attackCharacteristics.numberOfAttacks
  );
  let damagePerRound = "";
  let criticalDamage = "";
  let chanceToHit = "";
  if (enemyAc && attackModificator) {
    chanceToHit = (attackModificator - enemyAc + 21) * 5;
    if (chanceToHit > 95) chanceToHit = 95;
    if (chanceToHit < 5) chanceToHit = 5;
    console.log(typeOfAttack);
    if (typeOfAttack === "Advantage")
      chanceToHit = (1 - (1 - chanceToHit / 100) ** 2) * 100;
    if (typeOfAttack === "Disadvantage")
      chanceToHit = (chanceToHit / 100) ** 2 * 100;
    chanceToHit = chanceToHit.toFixed(2) - 0;

    if (damageFormula !== "") {
      const damageArray = damageFormula.split("+");
      let averageDamage = 0;
      let averageCriticalDamage = 0;
      let maxCriticalDamage = 0;
      for (let index = 0; index < damageArray.length; index += 1) {
        if (damageArray[index].includes("d")) {
          const a = damageArray[index].split("d");
          averageDamage += a[0] * (a[1] / 2 + 0.5);
          maxCriticalDamage += a[0] * a[1] * 2;
          averageCriticalDamage += a[0] * a[1] * 1.6;
        } else {
          averageDamage += +damageArray[index];
          averageCriticalDamage += +damageArray[index];
          maxCriticalDamage += +damageArray[index];
        }
      }
      maxCriticalDamage = maxCriticalDamage.toFixed(1);
      averageDamage = averageDamage.toFixed(1);
      averageCriticalDamage = averageCriticalDamage.toFixed(1);
      damagePerRound = (averageDamage * chanceToHit * numberOfAttacks) / 100;
      damagePerRound = damagePerRound.toFixed(1);
      criticalDamage = `${averageCriticalDamage} — ${maxCriticalDamage}`;
    }
    chanceToHit += "%";
  }
  return (
    <div className="result">
      <h2>Result</h2>
      <p />
      <p>{`Chance to hit: ${chanceToHit}`}</p>
      <p>{`Average damage per turn: ${damagePerRound}`}</p>
      <p>{`Max Crit Damage: ${criticalDamage}`}</p>
    </div>
  );
}
export default DamageCalc;
