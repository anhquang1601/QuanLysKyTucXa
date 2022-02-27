
const url='http://localhost:1000/get/'
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

const fetchApi={
 fetchStudent:()=>{
    return fetch(url, {
      method: "GET",
      
    })
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  },
  fetchKindRoom:()=>{
    var myheader=new Headers()
    myheader.append("au","Bearer "+ getCookie("token"))
    console.log("mu",getCookie("token"))
    return fetch("http://localhost:1000/get/kindroom",{
      method:"GET",
      headers: myheader
    }).then((res)=>res.json())
    .catch((err)=>{throw err})
  }
}
  
export default fetchApi;