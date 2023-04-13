import { Form, Select, Space } from "antd";
import React, { useState } from "react";
import AboutEntrepreneur from "./AboutEntrepreneur";
import AboutOrganization from "./AboutOrganization";

const Activity = () => {

  const [dropdownValue, setDropdownValue] = useState('')

  const handleActivityChange = (value) => {
    setDropdownValue(value)
  };

  return (
    <>
      <Form.Item>
        <Space wrap>
          <Select
            onChange={handleActivityChange}
            defaultValue="Выберите вид деятельности"
            style={{ width: 220 }}
            size="large"
            options={[
              { value: "Индивидуальный предприниматель (ИП)" },
              { value: "Общество с ограниченной ответственностью (ООО)" },
            ]}
          />
        </Space>
      </Form.Item>
      {
        dropdownValue === "Общество с ограниченной ответственностью (ООО)" ?
        <AboutOrganization />
        : dropdownValue === "Индивидуальный предприниматель (ИП)" ?
        <AboutEntrepreneur />
        : null
        
      }
    </>
  );
};

export default Activity;
