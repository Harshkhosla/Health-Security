const initialState={
    authtoken:[],
    notesData:[],
    searchData:[],
    deletedData:[],
    imagesData:[]
}
// debugger;
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
        const sample =state.notesData.filter((data,index)=>data._id!==action.payload.note._id)
        console.log(sample);
        return{...state,notesData:sample}
    }else if(action.type==="imagesdata"){       
        return{...state,imagesData:action.payload.images}
    }else if(action.type==="deletingImage"){
        const images =state.imagesData.filter((data,index)=>data._id!==action.payload.image._id)
        console.log(images);        
        return{...state,imagesData:images}
    }
    return state
}
export default reducer;