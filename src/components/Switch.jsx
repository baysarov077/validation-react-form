import { Form, Switch } from "antd";
import React, { useState } from "react";

const SwitchComponent = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = (checked) => {
    setSwitchValue(checked);
  };

  return (
    <Form.Item valuePropName="checked">
      <Switch checked={switchValue} onChange={handleSwitchChange} />{" "}
      {switchValue ? "on" : "off"}
    </Form.Item>
  );
};

export default SwitchComponent;
