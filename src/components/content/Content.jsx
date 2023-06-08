import React, { useState } from "react";
import { labels, inputs } from "../../constants/constants";
import DamageCalc from "./DamageCalc/DamageCalc";
import { Input, Radio, Space, Tooltip, Row, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { changeTypeOfAttack } from "../../store/Slices/typeOfAttackSlice";
import { changeAttackCharacteristics } from "../../store/Slices/attackCharacteristicsSlice";

function Content() {
  const typeOfAttack = useSelector((state) => state.typeOfAttack.value);
  const test = useSelector((state) => state.attackCharacteristics);
  const dispatch = useDispatch();
  return (
    <>
      <div className="block ">
        <div className="block-row">
          <Row justify="center">
            <Space direction="vertical">
              {labels.map((element) => {
                return (
                  <Tooltip
                    trigger={["focus"]}
                    title={element.tooltip}
                    placement="top"
                    key={element.name}
                  >
                    <Input
                      value={test[element.name]}
                      name={element.name}
                      onChange={(event) => {
                        dispatch(
                          changeAttackCharacteristics({
                            name: event.target.name,
                            value: event.target.value,
                          })
                        );
                      }}
                      addonBefore={
                        <div className="inputWidth">{element.label}</div>
                      }
                    ></Input>
                  </Tooltip>
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
                value={typeOfAttack}
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
      <Button
        onClick={() => {
          console.log(test);
        }}
      >
        {typeOfAttack}
      </Button>
      <DamageCalc />
    </>
  );
}

export default Content;
