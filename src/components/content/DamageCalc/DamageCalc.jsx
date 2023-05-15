/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

 function DamageCalc({
  advantage = '', enemyAc = '', damageInput = '', numberOfAttacks = '', AttackModificator = '',
}) {
  const [chanceToHit, setChanceToHit] = useState('');
  const [damagePerRound, setDamagePerRound] = useState('');
  const [criticalDamage, setCriticalDamage] = useState('');
  const damageArray = damageInput.split('+');
  function roll(){
   
  }
  function calculateDamage() {
    let averageDamage = 0;
    let averageCriticalDamage = 0;
    let maxCriticalDamage = 0;
    for (let index = 0; index < damageArray.length; index += 1) {
      if (damageArray[index].includes('d')) {
        const a = damageArray[index].split('d');
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
    setDamagePerRound((averageDamage * chanceToHit * numberOfAttacks) / 100);
    setCriticalDamage(`${averageCriticalDamage} — ${maxCriticalDamage}`);
  }
  function calculateChanceToHit() {
    let hitChance = (AttackModificator - enemyAc + 21) * 5;
    if (hitChance > 95)hitChance = 95;
    if (hitChance < 5)hitChance = 5;
    if (advantage === 'Disadvantage') {
      hitChance = ((hitChance / 100) ** 2) * 100;
    }
    if (advantage === 'Advantage') {
      hitChance = (1 - (1 - hitChance / 100) ** 2) * 100;
    }
    setChanceToHit(hitChance.toFixed(1));
  }

  useEffect(() => {
    if (!(enemyAc === '' || AttackModificator === '')) { calculateChanceToHit(); }
  }, [enemyAc, AttackModificator, advantage]);

  useEffect(() => {
    if (!(damageInput === '' || numberOfAttacks === '' || chanceToHit === '')) { calculateDamage(); }
  }, [damageInput, numberOfAttacks, chanceToHit]);

  return (
    <div className="result">
      <h2>Result</h2>
      <p />
      <p>
        { `Chance to hit: ${chanceToHit}%`}
      </p>
      <p>
        {`Average damage per turn: ${damagePerRound}`}
      </p>
      <p>
        {`Max Crit Damage: ${criticalDamage}`}
      </p>
      <div>
        <button onClick={console.log(damageArray)}>Roll</button>
        hi
        </div>
    </div>
  );
}
export default DamageCalc