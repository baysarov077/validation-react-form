import { Form, Input } from "antd";
import React, { useState } from "react";
import DragAndDrop from "./DragAndDrop";

interface OrganizationData {
  inn: string;
  fullName: string;
  shortName: string;
  registrationDate: string;
  ogrn: string;
}

function AboutOrganization(): JSX.Element {
  const [organizationData, setOrganizationData] = useState<OrganizationData>({
    inn: "",
    fullName: "",
    shortName: "",
    registrationDate: "",
    ogrn: "",
  });

  async function fetchOrganizationDataByInn(inn: string): Promise<any> {
    const url = `https://npd.nalog.ru/api/inn-proc.json?req=${inn}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async function handleInnBlur() {
    const data = await fetchOrganizationDataByInn(organizationData.inn);
    setOrganizationData({
      ...organizationData,
      fullName: data.ЮЛ.СвНаимЮЛ.НаимЮЛПолн,
      shortName: data.ЮЛ.СвНаимЮЛ.НаимЮЛСокр,
      registrationDate: data.ЮЛ.СвУстКап.ДатаРег,
      ogrn: data.ЮЛ.ОГРН,
    });
  }

  function handleChange(key: keyof OrganizationData, value: string) {
    setOrganizationData({
      ...organizationData,
      [key]: value,
    });
  }

  return (
    <>
      <Form.Item
        label="ИНН"
        name="ИНН"
        rules={[{ required: true, message: "Введите ИНН" }]}
      >
        <Input
          type="number"
          size="large"
          value={organizationData.inn}
          onChange={(e) => handleChange("inn", e.target.value)}
          onBlur={handleInnBlur}
        />
      </Form.Item>
      <Form.Item label="Organization name" name="orgName">
        <Input
          size="large"
          value={organizationData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Organization short name" name="orgShortName">
        <Input
          size="large"
          value={organizationData.shortName}
          onChange={(e) => handleChange("shortName", e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Registration date" name="date">
        <Input
          type="date"
          size="large"
          value={organizationData.registrationDate}
          onChange={(e) => handleChange("registrationDate", e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="ОГРН"
        name="ogrn"
        rules={[
          { required: true, message: "Введите ОГРНИП" },
          { len: 15, message: "Длина ОГРНИП должна быть 15 цифр" },
        ]}
      >
        <Input
          type="number"
          size="large"
          value={organizationData.ogrn}
          onChange={(e) => handleChange("ogrn", e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <DragAndDrop />
      </Form.Item>
    </>
  );
}

export default AboutOrganization;
