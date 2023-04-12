import { Form, Input } from "antd";
import React from "react";

const InputComponent = ({ labelName, name, rules, value, change, isPassword, passwordValue, passwordChange }) => {
  return (
    <Form.Item label={labelName} name={name} rules={rules}>
      <Input size="large" value={value} onChange={change} />
      {isPassword && (
        <Input.Password
          size="large"
          value={passwordValue}
          onChange={passwordChange}
        />
      )}
    </Form.Item>
  );
};

export default InputComponent;
