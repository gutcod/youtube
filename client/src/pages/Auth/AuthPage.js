import React, { useState, useContext } from "react";
import { Form, Input, Button, Card } from "antd";

import "./AuthPage.css";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/auth.context";

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const { loading, request } = useHttp();
  const [form, setForm] = useState({ email: "", password: "" });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      console.log(data);
    } catch (e) {}
  };
  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
      console.log(data);
    } catch (e) {}
  };
  return (
    <Card className="centered">
      <Form name="normal_login" className="login-form">
        <h1 style={{ textAlign: "center" }}>Youtube Search</h1>
        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input placeholder="Email" name="email" onChange={changeHandler} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={changeHandler}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ marginRight: "20px" }}
            onClick={loginHandler}
            disabled={loading}
          >
            Log in
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={registerHandler}
            disabled={loading}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
