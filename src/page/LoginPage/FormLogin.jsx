import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { http } from "../../service/config";

const FormLogin = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    // gọi api login
    // nếu thành công =>  chuyển hướng về trang chủ
    // navigate("/");
    // nếu thất bại => thông báo lỗi message.error
    http
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((result) => {
        console.log("Thành công", result);
        navigate("/"); // không gây reload trang
        // window.location.href = "/";   => gây reload trang
        message.success("Đăng nhập thành công");
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại");
        console.log("Thất bại", err);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      layout="vertical"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        taiKhoan: "admin1123",
        matKhau: "123321",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username - admin1123"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Tài khoản không được bỏ trống",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password - 123321"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Mật khẩu không được bỏ trống",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          className="bg-white text-blue-700 border-blue-900"
          htmlType="submit"
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormLogin;
