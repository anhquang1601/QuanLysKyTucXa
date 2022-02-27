
import axios from "axios"
var querystring = require('querystring');
export  function* updateKindRoom(payload){
    console.log(payload.payload.name)
    var res=yield axios.put(`http://localhost:1000/update/updateKindRoom/${payload.payload.id}`,querystring.stringify({
            tenloaiphong:payload.payload.name
    }))
    console.log("res",res)
    return yield(res)
    
  }
  