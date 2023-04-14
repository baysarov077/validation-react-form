import { Form, Input } from "antd";
import React, { useState } from "react";
import DragAndDrop from "./DragAndDrop";

function AboutOrganization() {
  const [inn, setInn] = useState("");
  const [fullName, setFullName] = useState("");
  const [shortName, setShortName] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [ogrn, setOgrn] = useState("");

  async function fetchOrganizationDataByInn(inn) {
    const url = `https://npd.nalog.ru/api/inn-proc.json?req=${inn}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async function handleInnBlur() {
    const organizationData = await fetchOrganizationDataByInn(inn);
    setFullName(organizationData.ЮЛ.СвНаимЮЛ.НаимЮЛПолн);
    setShortName(organizationData.ЮЛ.СвНаимЮЛ.НаимЮЛСокр);
    setRegistrationDate(organizationData.ЮЛ.СвУстКап.ДатаРег);
    setOgrn(organizationData.ЮЛ.ОГРН);
  }

  return (
    <>
      <Form.Item
        label="ИНН"
        name="ИНН"
        rules={[{ required: true, message: "Введите ИНН" }]}
      >
        <Input
          size="large"
          value={inn}
          onChange={(e) => setInn(e.target.value)}
          onBlur={handleInnBlur}
        />
      </Form.Item>
      <Form.Item label="Organization name" name="orgName">
        <Input
          size="large"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Organization short name" name="orgShortName">
        <Input
          size="large"
          value={shortName}
          onChange={(e) => setShortName(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Registration date" name="date">
        <Input
          size="large"
          value={registrationDate}
          onChange={(e) => setRegistrationDate(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="ОГРН"
        name="ogrn"
        rules={[{ required: true, message: "Введите ОГРН" }]}
      >
        <Input
          size="large"
          value={ogrn}
          onChange={(e) => setOgrn(e.target.value)}
        />
      </Form.Item>
      <DragAndDrop />
    </>
  );
}

export default AboutOrganization;
