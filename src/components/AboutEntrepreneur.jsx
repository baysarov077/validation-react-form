import { Form, Input } from "antd";
import React, { useState } from "react";
import DragAndDrop from "./DragAndDrop";

const AboutEntrepreneur = () => {
  const [formData, setFormData] = useState({
    inn: "",
    registrationDate: "",
    ogrnip: "",
  });

  const handleFormChange = (fieldName, value) => {
    setFormData((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  return (
    <div>
      <Form.Item
        label="ИНН"
        name="inn"
        rules={[{ required: true, message: "Введите ИНН" }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Input
          type="number"
          size="large"
          value={formData.inn}
          onChange={(e) => handleFormChange("inn", e.target.value)}
          placeholder="Введите ИНН"
        />
      </Form.Item>
      <Form.Item
        label="ОГРНИП"
        name="ogrnip"
        rules={[
          { required: true, message: "Введите ОГРНИП" },
          { len: 15, message: "Длина ОГРНИП должна быть 15 цифр" },
        ]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Input
          type="number"
          size="large"
          value={formData.ogrnip}
          onChange={(e) => handleFormChange("ogrnip", e.target.value)}
          placeholder="Введите ОГРНИП"
        />
      </Form.Item>
      <Form.Item
        label="Дата регистрации"
        name="registrationDate"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Input
          type="date"
          size="large"
          value={formData.registrationDate}
          onChange={(e) => handleFormChange("registrationDate", e.target.value)}
          placeholder="Введите дату регистрации"
        />
      </Form.Item>
      <Form.Item>
        <DragAndDrop />
      </Form.Item>
    </div>
  );
};

export default AboutEntrepreneur;
