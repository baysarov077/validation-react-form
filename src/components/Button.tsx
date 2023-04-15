import { Button, Form } from "antd";
import React from "react";

interface Props {
  disabledRules: boolean;
}

const ButtonComponent: React.FC<Props> = ({ disabledRules }) => {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit" disabled={disabledRules}>
        Next
      </Button>
    </Form.Item>
  );
};

export default ButtonComponent;
