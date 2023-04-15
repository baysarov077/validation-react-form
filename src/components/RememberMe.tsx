import { Checkbox, Form } from "antd";
import React, { useState } from "react";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const RememberMe: React.FC = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleRememberMeChange = (e: CheckboxChangeEvent) => {
    setRememberMe(e.target.checked);
  };

  return (
    <Form.Item>
      <Checkbox
        value={rememberMe}
        checked={rememberMe}
        onChange={handleRememberMeChange}
      >
        Remember me
      </Checkbox>
    </Form.Item>
  );
};

export default RememberMe;
