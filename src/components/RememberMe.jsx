import { Checkbox, Form } from "antd";
import React, { useState } from "react";

const RememberMe = () => {

  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <Form.Item name="rememberMe">
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
