import { Form, Radio, Space } from "antd";
import React, { useState } from "react";

const RadioGroup = () => {
  const [radioValue, setRadioValue] = useState("");

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <Form.Item name="radioSelection">
      <Radio.Group onChange={handleRadioChange} value={radioValue}>
        <Space direction="vertical">
          <Radio value={1}>Radio selection 1</Radio>
          <Radio value={2}>Radio selection 2</Radio>
          <Radio value={3}>Radio selection 3</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>
  );
};

export default RadioGroup;
