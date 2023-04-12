import React, { useState } from "react";
import { Input, Form } from "antd";
import RememberMe from "./RememberMe";
import SwitchComponent from "./Switch";
import RadioGroup from "./RadioGroup";
import Dropdown from "./Dropdown";
import ButtonComponent from "./Button";

const FormComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
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
            ? ["Your password is between 3 and 12 characters"]
            : [],
      },
    ]);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
    form.setFields([{ name: "text", errors: value ? [] : ["Enter text"] }]);
  };

  const handleSubmit = () => {
    console.log("Form data:", form.getFieldsValue());
    form.resetFields();
  };

  return (
    <>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: "Enter username" }]}
        >
          <Input
            size="large"
            value={username}
            onChange={handleUsernameChange}
          />
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
          <Input.Password
            size="large"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Item>

        <Form.Item
          label="Input Text label"
          name="inputLabelText"
          rules={[{ required: true, message: "Enter text" }]}
        >
          <Input.TextArea
            size="large"
            value={text}
            onChange={handleTextChange}
          />
        </Form.Item>

        <RememberMe />
        <SwitchComponent />
        <RadioGroup />
        <Dropdown />
        <ButtonComponent disabledRules={!username || !password || !text} />
      </Form>
    </>
  );
};

export default FormComponent;
