import React, { useState } from "react";
import {
  Input,
  Button,
  Form,
  Checkbox,
  Switch,
  Radio,
  Space,
  Select,
} from "antd";

const FormComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [form] = Form.useForm();

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    form.setFields([
      { name: "username", errors: value ? [] : ["Enter username"] },
    ]);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    form.setFields([
      {
        name: "password",
        errors:
          value && (value.length < 3 || value.length > 12)
            ? ["Your password is between 4 and 12 characters"]
            : [],
      },
    ]);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
    form.setFields([{ name: "text", errors: value ? [] : ["Enter text"] }]);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSwitchChange = (checked) => {
    setSwitchValue(checked);
  };

  const handleSubmit = () => {
    console.log("Form data:", form.getFieldsValue());
    form.resetFields();
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Enter username" }]}
        >
          <Input value={username} onChange={handleUsernameChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Enter password" },
            {
              min: 3,
              max: 12,
              message: "Password must be between 3 and 12 characters",
            },
          ]}
        >
          <Input.Password value={password} onChange={handlePasswordChange} />
        </Form.Item>

        <Form.Item
          label="Input Text label"
          name="text"
          rules={[{ required: true, message: "Enter text" }]}
        >
          <Input.TextArea value={text} onChange={handleTextChange} />
        </Form.Item>

        <Form.Item>
          <Checkbox checked={rememberMe} onChange={handleRememberMeChange}>
            Remember me
          </Checkbox>
        </Form.Item>

        <Form.Item name="switch" valuePropName="checked">
          <Switch checked={switchValue} onChange={handleSwitchChange} /> {switchValue ? 'on' : 'off'}
        </Form.Item>

        <Form.Item>
          <Radio.Group onChange={handleRadioChange} value={radioValue}>
            <Space direction="vertical">
              <Radio value={1}>Radio selection 1</Radio>
              <Radio value={2}>Radio selection 2</Radio>
              <Radio value={3}>Radio selection 3</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Space wrap>
            <Select
              defaultValue="Dropdown option"
              style={{ width: 220 }}
              size="large"
              options={[
                { value: "Dropdown option"},
                { value: "Dropdown option 1"},
                { value: "Dropdown option 2"},
              ]}
            />
          </Space>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!username || !password || !text}
          >
            Next
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormComponent;
