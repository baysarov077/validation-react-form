import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Form, message, Upload } from "antd";
import { RcFile } from "antd/lib/upload/interface";
import type { UploadProps } from "antd";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e: React.DragEvent<HTMLDivElement>) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const DragAndDrop = () => {
  return (
    <Form.Item style={{ width: "250px" }}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
    </Form.Item>
  );
};

export default DragAndDrop;
