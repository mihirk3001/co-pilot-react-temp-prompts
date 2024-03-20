import React from "react";
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
    return (
        <div>
            {/* task: create a login page layout
      there are 2 parts of this task:
      1. design a login form
      2. design a layout for the login page
      specifications for page:
      - background color: #8048b0
      - height: 100vh
      specifications for form:
      - form title: Login
      - Title should be in the center of the form
      - form fields: username, password
      - form buttons: login
      - login button should be in the center of the form and should have gradient background color #fca103 and #befc03 
      - login button width: 100%
      - login button border radius: 50px
      - login button font size: 16px
      - login button font weight: bold
      - login button text should be in the center of the button vertically
      - form link: forgot password, register
      - forgot password should be above the login button to the right side of the form
      - register should be below the login button in the center of the form
      - form background color: #ffffff
      - form width: responsive
      - form height: responsive
      - form minimum width: 400px
      - form minimum height: 400px
      - form height and width should be equal always
      - form should be centered in the middle of the page vertically and horizontally
      - padding: 20px
      - margin: 20px
      - border radius: 10px
      */}

      <Layout style={{backgroundColor: '#8048b0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Form
          name="normal_login"
          className="login-form"
          style={{backgroundColor: '#ffffff', width: '400px', height: '400px', padding: '20px', margin: '20px', borderRadius: '10px'}}
        >
          <h1 style={{textAlign: 'center'}}>Login</h1>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me.</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%', borderRadius: '50px', fontSize: '16px', fontWeight: 'bold', background: 'linear-gradient(to right, #fca103, #befc03)'}}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Layout>
        </div>
    );
}

export default Login;
