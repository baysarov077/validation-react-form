import { Form, Select, Space } from "antd";
import React from "react";

const Dropdown = () => {

  const handleDropdownChange = (value) => {
    console.log(value);
  };

  return (
    <Form.Item name="dropdownTitle">
      <Space wrap>
        <Select
          onChange={handleDropdownChange}
          defaultValue="Dropdown option"
          style={{ width: 220 }}
          size="large"
          options={[
            { value: "Dropdown option" },
            { value: "Dropdown option 1" },
            { value: "Dropdown option 2" },
          ]}
        />
      </Space>
    </Form.Item>
  );
};

export default Dropdown;
