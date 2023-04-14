import { Button, Form } from "antd";
import React from "react";

const ButtonComponent = ({ disabledRules }) => {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit" disabled={disabledRules}>
        Next
      </Button>
    </Form.Item>
  );
};

export default ButtonComponent;
