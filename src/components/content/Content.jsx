import React, { useState } from 'react';
import { labelsAndInputs } from '../../constants/Constants';
import DamageCalc from './DamageCalc/DamageCalc';

function Content() {
  const [ShowResult, SetShowResult] = useState(false);
  const [form, setForm] = useState({});
  function inputHandler(event) {
    if (event.target.name === 'damage') {
      if (/^[\sdD0-9+-]*$/.test(event.target.value)) {
        setForm({
          ...form,
          [event.target.name]: event.target.value,
        });
      }
    } else if (/^[-+0-9]*$/.test(event.target.value)) {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    }
  }

  function inputHandlerRadio(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.id,
    });
  }
  return (
    <>
      <div className="block ">
        <div className="block-row">
          <div className="block-item">
            {
          labelsAndInputs.map((el) => (
            <label key={el.label}>
              <span className="label">{el.label}</span>
              <span className="tooltip-container">
                <input autoComplete="off" type="text" name={el.name} id={el.label} pattern={el.pattern} onChange={(event) => { inputHandler(event); }} />
                <div className="tooltip-text">{el.tooltip}</div>
              </span>
            </label>
          ))
        }
          </div>
          <div className="block-item">
            {
            labelsAndInputs.map((el) => (el.input !== undefined ? (
              <label key={el.input}>
                <input type="radio" className="radio" name="advantage" defaultChecked={el.checked} id={el.input} onChange={(event) => { inputHandlerRadio(event); }} />
                <span className="label-text">{el.input}</span>
              </label>
            ) : null))
          }
          </div>
        </div>
      </div>
      <DamageCalc
        advantage={form.advantage}
        enemyAc={form.enemyAc}
        damageInput={form.damage}
        numberOfAttacks={form.numberOfAttacks}
        AttackModificator={form.AttackModificator}
      />

    </>
  );
}
export default Content