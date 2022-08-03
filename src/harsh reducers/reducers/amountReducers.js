const initialState={
    authtoken:[],
    notesData:[],
    searchData:[],
    deletedData:[]
}
const reducer =(state=initialState,action)=>{
    if(action.type==="authtoken"){        
        return {...state ,authtoken:action.payload}        
    }else if (action.type==="logOut"){    
        return{authtoken:null}
    }else if (action.type==="alltheData"){       
        return{...state,notesData:action.payload}        
    }else if (action.type==="searchData"){    
        return{...state,searchData:action.payload}        
    }else if(action.type==="deleteddata"){
        // debugger
        const sample =state.notesData.filter((data,index)=>data._id!==action.payload.note._id)
        console.log(sample);
        return{...state,notesData:sample}
    }
    return state
}
export default reducer;