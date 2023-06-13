import React, { useState } from "react";
import { labels, inputs } from "../../constants/constants";
import DamageCalc from "./DamageCalc/DamageCalc";
import {
  Input,
  Radio,
  Space,
  Tooltip,
  Col,
  Layout,
  Card,
  Typography,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { changeTypeOfAttack } from "../../store/Slices/typeOfAttackSlice";
import { changeAttackCharacteristics } from "../../store/Slices/attackCharacteristicsSlice";

function Content() {
  const typeOfAttack = useSelector((state) => state.typeOfAttack.value);
  const attackCharacteristics = useSelector(
    (state) => state.attackCharacteristics
  );
  const dispatch = useDispatch();
  return (
    <Layout.Content style={{ marginTop: "50px" }}>
      <Col span={12} offset={6}>
        <Card>
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <Space direction="vertical" style={{ marginLeft: "2vw" }}>
              {labels.map((element) => {
                return (
                  <div style={{ display: "inline-flex", alignItems: "center" }}>
                    <Typography.Text style={{ minWidth: "12em" }}>
                      {element.label}
                    </Typography.Text>
                    <Tooltip
                      trigger={["focus"]}
                      title={element.tooltip}
                      placement="top"
                      key={element.name}
                    >
                      <Input
                        value={attackCharacteristics[element.name]}
                        name={element.name}
                        onChange={(event) => {
                          dispatch(
                            changeAttackCharacteristics({
                              name: event.target.name,
                              value: event.target.value,
                            })
                          );
                        }}
                      ></Input>
                    </Tooltip>
                  </div>
                );
              })}
            </Space>
            <div style={{ marginRight: "2vw" }}>
              {
                <Radio.Group
                  onChange={(event) =>
                    dispatch(changeTypeOfAttack(event.target.value))
                  }
                  value={typeOfAttack}
                >
                  <Space.Compact
                    direction="vertical"
                    style={{ marginRight: "3vw" }}
                  >
                    {inputs.map((element) => {
                      return (
                        <Radio
                          value={element.input}
                          key={element.input}
                          style={{ marginTop: "15px" }}
                        >
                          {element.input}
                        </Radio>
                      );
                    })}
                  </Space.Compact>
                </Radio.Group>
              }
            </div>
          </Space>
        </Card>
      </Col>

      <Col span={8} offset={8} style={{ marginTop: "5vh" }}>
        <div className="hi">
          <Card style={{ borderRadius: "50px" }}>
            <DamageCalc />
          </Card>
        </div>
      </Col>
    </Layout.Content>
  );
}

export default Content;
