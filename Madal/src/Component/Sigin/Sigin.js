import "./Sigin.css";
import "antd/dist/antd.css";
import { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import { /* useSelector, */ useDispatch } from "react-redux";
import getStudent1 from "../action/index";
/* import index from '../Home/index' */
var querystring = require("querystring");
const Sigin = (props) => {
  
 /*  const users = useSelector((state) => state.studentReducer);
  const sigin = useSelector((state) => state.sigupReducer); */
  const [isloading,setisloading]=useState(getCookie("token")!=="")
  /*  const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error); */
 
  const [form] = Form.useForm();
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent1());
  });

  let history = useHistory();
 /*  const onFinish = (values) => {}; */

  const onFinishFailed = (errorInfo) => {};
 /*  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const onRest = () => {
    form.resetFields();
  }; */
  const [ setLoading] = useState(false);
  const setCookie = (cname, cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  };
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  async function handleLogin(values, props) {
    if (values.username === undefined || values.password === undefined) {
      message.error("Vui lòng điền đầy đủ thông tin!");
    } else {
      setLoading(true);
      await axios
        .post(
          "http://localhost:1000/post/sigin",
          querystring.stringify({
            username: values.username,
            password: values.password,
            
          }),
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        )
        .then(function (res) {
          console.log("res", res);
          if (res.status === 200) {
            setCookie("token", res.data.token, 1);
            console.log("mmmm",getCookie("token"))
            setisloading(getCookie("token"))
           /*  history.push("/home"); */
          } else if (res.status === 400) {
            message.error("Email hoặc số di động bạn nhập không kết nối với tài khoản nào. Hãy tìm tài khoản của bạn và đăng nhập.");
              window.location.href("/")
          }
        })
        .catch((err) => {
          form.resetFields();
          message.error(
            "Mất kết nối tới Server"
          );
        });
    }
  }
  return (
    <div className="full-height">
      {isloading ?  history.push("/home"):
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={handleLogin}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng Nhập
          </Button>
          <Button htmlType="button" onClick={()=> history.push("/register")}>
            Đăng Ký
          </Button>
        </Form.Item>
          </Form>}
    </div>
  );
};
export default Sigin;
