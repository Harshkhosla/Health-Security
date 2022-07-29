const initialState={
    authtoken:'',
    notesData:[],
    searchData:[]
}
// debugger;
const reducer =(state=initialState,action)=>{
//    debugger
    if(action.type==="authtoken"){
        
        return {...state ,authtoken:action.payload}
        
    }else if (action.type==="logOut"){
    
        return{authtoken:null}
    }else if (action.type==="alltheData"){
        return{...state,notesData:action.payload}
        
    }else if (action.type==="searchData"){
    
        return{...state,searchData:action.payload}        
    }
    return state
}
export default reducer;