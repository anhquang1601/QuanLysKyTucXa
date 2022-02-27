import axios from "axios";
var querystring = require("querystring");
export function* deleteKindRoom(id) {
  console.log("lll", id);
  let res= yield axios.delete(
    `http://localhost:1000/delete/kindroom/${id.id}`)
    
    return yield res;
 


}
