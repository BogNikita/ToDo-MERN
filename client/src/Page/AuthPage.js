/* eslint-disable no-useless-escape */
import { Form, Input, Button, Checkbox, message, Space } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function getCookie (name) {
  let matches =  document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};



const AuthPage = () => {
  const auth = useContext(AuthContext);
  const {loading, error, request, clearError} = useHttp();

  const [form, setForm] = useState({
    email: getCookie('user'), password: '', remember: true
  });

  const changeHandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register/', 'POST', {...form});
      message.success(data.message);
    } catch (e) {
    }
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login/', 'POST', {...form});
      auth.login(data.token, data.userId)
    } catch (e) {
    }
  };

  useEffect(() => {
    if (error) {
      message.error(error);
      clearError();
    }
  }, [error, clearError]);

  return (
    <Space>
      <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      >
        <Form.Item
          initialValue = {form.email}
          label="Email"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input onChange={changeHandler} name="email"  />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password onChange={changeHandler} name="password"/>
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" onChange={() => setForm({...form, remember: !form.remember})} valuePropName="checked">
          <Checkbox name="remember">Запомнить меня</Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" onClick={loginHandler} disabled={loading}>
            Войти
          </Button>
          <Button onClick={registerHandler} disabled={loading}>
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
}


export default AuthPage;