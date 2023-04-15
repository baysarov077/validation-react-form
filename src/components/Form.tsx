import React, { useState } from "react";
import { Input, Form } from "antd";
import RememberMe from "./RememberMe";
import SwitchComponent from "./Switch";
import ButtonComponent from "./Button";
import Activity from "./Activity";
import RadioGroup from "./RadioGroup";

type FormState = {
  username: string;
  password: string;
  text: string;
};

const FormComponent: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    username: "",
    password: "",
    text: "",
  });
  const [form] = Form.useForm();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    form.setFields([{ name, errors: value ? [] : [`Enter ${name}`] }]);
  };

  const handleSubmit = () => {
    console.log("Form data:", form.getFieldsValue());
    form.resetFields();
    setFormState({ username: "", password: "", text: "" });
  };

  return (
    <>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Enter username" }]}
        >
          <Input
            size="large"
            name="username"
            value={formState.username}
            onChange={handleInputChange}
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
            name="password"
            value={formState.password}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          label="Input Text label"
          name="text"
          rules={[{ required: true, message: "Enter text" }]}
        >
          <Input.TextArea
            size="large"
            name="text"
            value={formState.text}
            onChange={handleInputChange}
          />
        </Form.Item>
        <RememberMe />
        <SwitchComponent />
        <RadioGroup />
        <Activity />
        <ButtonComponent
          disabledRules={
            !formState.username || !formState.password || !formState.text
          }
        />
      </Form>
    </>
  );
};

export default FormComponent;
