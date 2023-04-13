import { Form, Input } from 'antd';
import React, { useState } from 'react';
import DragAndDrop from './DragAndDrop';

const AboutEntrepreneur = () => {

  const [inn, setInn] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [ogrnip, setOgrnip] = useState("")


  return (
    <div>
      <Form.Item
        label="ИНН"
        name="ИНН"
        rules={[{ required: true, message: "Введите ИНН" }]}
      >
        <Input
          size="large"
          value={inn}
          onChange={(e) => setInn(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="ОГРНИП"
        name="ogrnip"
      >
        <Input 
          size='large'
          value={ogrnip}
          onChange={e => setOgrnip(e.target.value)}
          rules={[{required: true, message: "Введите ОГРНИП"}]}
        />
      </Form.Item>
      <Form.Item
        label="Registration date"
        name="date"
      >
        <Input
          size="large"
          value={registrationDate}
          onChange={(e) => setRegistrationDate(e.target.value)}
        />
      </Form.Item>
      <DragAndDrop />
    </div>
  );
};

export default AboutEntrepreneur;