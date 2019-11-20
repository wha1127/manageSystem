import React, { Component } from "react";
//引入connect
import { connect } from 'react-redux'
//引入action
import "./Login.less";
import logo from "../assets/images/logo.png";
import { Form, Icon, Input, Button, message } from 'antd';

@Form.create()

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();


  };
  validator = (rule, value, callback) => {
    if (!value) {
      callback('必须输入密码')
    } else if (value.length < 4) {
      callback('必须大于3位')
    } else if (value.length >= 12) {
      callback('必须小于12位')
    } else if (!/^[0-9a-zA-Z]+$/.test(value)) {
      callback('只能输入数字、字母、下划线')
    } else {
      callback()
    }
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login_header">
          <img src={logo} alt={logo}></img>
          <h1>React项目:后台管理系统</h1>
        </div>
        <div className="login_content">
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "请输入用户名" },
                  { min: 4, message: '必须是大于3位' },
                  { max: 12, message: '必须是小于12位' },
                  { pattern: /^[0-9a-zA-Z_]+$/, message: '用户名必须为数字、字母、下划线' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="账号"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "请输入密码!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login;
