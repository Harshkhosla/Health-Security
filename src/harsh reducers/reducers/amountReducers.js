const initialState={
    authtoken:'',
    notesData:[],
    searchData:[]
}
// debugger;
const reducer =(state=initialState,action)=>{
//    debugger
    if(action.type==="authtoken"){
        // debugger;
        return {...state ,authtoken:action.payload}
        
    }else if (action.type==="logOut"){
        // debugger
        return{authtoken:null}
    }else if (action.type==="alltheData"){
        // debugger;
        return{...state,notesData:action.payload}
        
    }else if (action.type==="searchData"){
        // debugger;
        return{...state,searchData:action.payload}        
    }
    return state
}
export default reducer;