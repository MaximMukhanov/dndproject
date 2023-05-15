import React, { useState } from "react";
import { labels, inputs } from "../../constants/Constants";
import DamageCalc from "./DamageCalc/DamageCalc";
import { Input, Radio, Space, Tooltip, Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { changeTypeOfAttack } from "../../store/Slices/typeOfAttackSlice";

function Content() {
  // const [form, setForm] = useState({});
  const TypeOfAttack = useSelector((state) => state.typeOfAttack.value);
  const dispatch = useDispatch();
  // function inputHandler(event) {
  //   if (event.target.name === "damage") {
  //     if (/^[\sdD0-9+-]*$/.test(event.target.value)) {
  //       setForm({
  //         ...form,
  //         [event.target.name]: event.target.value,
  //       });
  //     }
  //   } else if (/^[-+0-9]*$/.test(event.target.value)) {
  //     setForm({
  //       ...form,
  //       [event.target.name]: event.target.value,
  //     });
  //   }
  // }

  // function inputHandlerRadio(event) {
  //   setForm({
  //     ...form,
  //     [event.target.name]: event.target.id,
  //   });
  // }
  return (
    <>
      <div className="block ">
        <div className="block-row">
          {/* <div className="block-item">
            {labels.map((label) => (
              <label key={label.label}>
                <span className="label">{label.label}</span>
                <span className="tooltip-container">
                  <input
                    autoComplete="off"
                    type="text"
                    name={label.name}
                    id={label.label}
                    pattern={label.pattern}
                    onChange={(event) => {
                      inputHandler(event);
                    }}
                  />
                  <div className="tooltip-text">{label.tooltip}</div>
                </span>
              </label>
            ))}
          </div> */}

          <Row justify="center">
            <Space direction="vertical">
              {labels.map((element) => {
                return (
                  <div className="inputWidth">
                    <Tooltip
                      trigger={["focus"]}
                      title={element.tooltip}
                      placement="top"
                      key={element.name}
                      placeholder="Borderless"
                    >
                      <Input
                        addonBefore={
                          <div className="inputWidth">{element.label}</div>
                        }
                        minLength={"200px"}
                      ></Input>
                    </Tooltip>
                  </div>
                );
              })}
            </Space>
          </Row>

          <div className="block-item">
            {
              <Radio.Group
                onChange={(event) =>
                  dispatch(changeTypeOfAttack(event.target.value))
                }
                value={TypeOfAttack}
              >
                <Space direction="vertical">
                  {inputs.map((element) => {
                    return (
                      <Radio value={element.input} key={element.input}>
                        {element.input}
                      </Radio>
                    );
                  })}
                </Space>
              </Radio.Group>
            }
          </div>
        </div>
      </div>
      {/* <DamageCalc
        advantage={form.advantage}
        enemyAc={form.enemyAc}
        damageInput={form.damage}
        numberOfAttacks={form.numberOfAttacks}
        AttackModificator={form.AttackModificator}
      /> */}
    </>
  );
}
export default Content;
