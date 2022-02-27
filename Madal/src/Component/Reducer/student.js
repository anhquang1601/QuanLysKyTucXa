const initialState={
    isloading:false,
    student:[],
    error:false
}

const studentReducer=(state=initialState,action)=>{
 
    switch (action.type) {
        case "ISLOADING":
            return{...state,isloading:true}
        case "SUCCESS":
            return{
                ...state,student:action.users,isloading:false,error:false
            }
        case "ERROR":
            return{
                ...state,error:true
            }
    
        default:
            return state;
    }
}
export default studentReducer;
