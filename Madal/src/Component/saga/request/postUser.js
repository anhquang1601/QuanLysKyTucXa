import axios from "axios";
import { useDispatch } from "react-redux";
import isloading from "../../action/isloading";
var querystring = require('querystring');


const dispatch=useDispatch;

export async function PostUser(values){
    await axios.post("http://localhost:1000/post/Sigup",querystring.stringify({
                username:values.username,
                password:values.password,
                enterThePassword:values.EnterThePassword
    }), {headers: {"Content-Type": "application/x-www-form-urlencoded"}})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

export  function* postKindRoom(payload){
  var res=yield axios.post("http://localhost:1000/post/Kindroom/",querystring.stringify({
          maloaiphong:payload.payload.maloaiphong,
          tenloaiphong:payload.payload.tenloaiphong
  }), {headers: {"Content-Type": "application/x-www-form-urlencoded"}})
  return yield(res)
  
}

export async function getUser(){
    return fetch("http://localhost:1000/post/getUser", {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  };