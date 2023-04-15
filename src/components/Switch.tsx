import { Form, Switch } from "antd";
import React, { useState } from "react";

const SwitchComponent: React.FC = () => {
  const [switchValue, setSwitchValue] = useState<boolean>(false);

  const handleSwitchChange = (checked: boolean) => {
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
