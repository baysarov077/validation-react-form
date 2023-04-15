import { Form, Select, Space } from "antd";
import React, { useState } from "react";
import AboutEntrepreneur from "./AboutEntrepreneur";
import AboutOrganization from "./AboutOrganization";

interface ActivityOption {
  value: string;
  component: JSX.Element;
}

const ACTIVITY_OPTIONS: ActivityOption[] = [
  {
    value: "Индивидуальный предприниматель (ИП)",
    component: <AboutEntrepreneur />,
  },
  {
    value: "Общество с ограниченной ответственностью (ООО)",
    component: <AboutOrganization />,
  },
];

const Activity: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>("");

  const handleActivityChange = (value: string) => {
    setSelectedActivity(value);
  };

  const activityComponent = ACTIVITY_OPTIONS.find(
    (option) => option.value === selectedActivity
  )?.component;

  return (
    <>
      <Form.Item>
        <Space wrap>
          <Select
            onChange={handleActivityChange}
            defaultValue="Выберите вид деятельности"
            style={{ width: 220 }}
            size="large"
            options={ACTIVITY_OPTIONS.map((option) => ({
              value: option.value,
            }))}
          />
        </Space>
      </Form.Item>
      {activityComponent}
    </>
  );
};

export default Activity;
