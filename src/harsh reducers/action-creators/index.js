
import { toast } from "react-toastify";
// import {Navigate} from "react-router-dom";

export const loginuser =(input)=>{
    // debugger;
    return (dispatch)=>{
        const{name, email,password}=input;
        fetch("http://localhost:5000/api/auth/createuser", {
         method: "POST",
         headers: {
           "content-type": "application/json"
         },
   
         body: JSON.stringify(
           {
             name, email,password
           })
       })
   
         .then(response => response.json())
         .then(response => {
   
           if (!response?.success) {
             throw Error(response.error)
   
           }
           console.log(response);
           // console.log(response);
           toast.success(response?.message)
           // setMessage(response);
          //  navigate("/sign-in")
   
         })
         .catch((error) => {
           console.log(error);
           toast.error(error?.message);
   
         });

    }
}
const logindata=(amount)=>{
    return {
        type:"logindata",
        payload:amount
    }
}
export const signItUp=(navigate,field)=>{
    console.log(field);
    // let {navigate} = field
    // debugger;
    
    return  (dispatch)=>{
        const { email, password} = field;
        

         fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
    
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then((response) => response.json())
          
          .then((response) => {
            console.log(response.success)
            toast.success(response?.success)
            
    
            if (!response?.success) {
              throw Error(response.error)
            }
            console.log(response);
            localStorage.setItem("Authorization", JSON.stringify(response.authtoken));
            // localStorage.setItem("token", JSON.stringify(response.data[0].token));
            // const token= 
            dispatch(authtoken(JSON.stringify(response.authtoken).replaceAll('"','')))
            navigate("/")
          
            // (<Navigate to="/" />)
            console.log(response);
            
          })
          .catch((err) => {
            // setError(err.message);
            toast.error(err?.message);
            
    
          });

    }

}
const authtoken=(amount)=>{
    // debugger;
    return{
        type:'authtoken',
        payload:amount
    }
}
export const LogOut=(navigate,amount)=>{
  localStorage.removeItem("Authorization");
  navigate("/singUp");
  return{
    type:"logOut",
    payload:amount
  }
}



export const DoctorData=(feilds)=>{
  // debugger;
  return(dispatch)=>{
    const { title, discription} = feilds;
        // debugger;

    fetch("http://localhost:5000/api/notes/addnote", {
     method: "POST",
     headers: {
       "content-type": "application/json",
       "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
     },

     body: JSON.stringify({
      title,
      discription,
     }),
   })
     .then((response) => response.json())
     
     .then((response) => {
       console.log(response.sucess)
       toast.success(response?.sucess)
       

       if (!response?.sucess) {
         throw Error(response.error)
       }
      
       console.log(response);
       
     })
     .catch((err) => {
       // setError(err.message);
       toast.error(err?.message);
       

     })
  }
}

export const notesData=()=>{
  return(dispatch)=>{
    fetch("http://localhost:5000/api/notes/fetchallnotes", {

            method: "GET",
            headers: {
                "content-type": "application/json",
                'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
            },
        })
            .then(response => response.json())
            .then(response => {
              dispatch(saveData(response))
                // setSettingsData(response);/
            })
            .catch(error => {
                console.log(error, "joih");
            });
  }
}
const saveData=(amount)=>{
  // debugger;
  return{
    type:"alltheData",
    payload:amount
  }
}
export const SearchDatas=(feilds)=>{
  // debugger;
  return(dispatch)=>{
    const { schema} = feilds;
    fetch("http://localhost:5000/api/health/healthId", {

      
      // debugger;

 
   method: "POST",
   headers: {
     "content-type": "application/json",
    //  "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },

   body: JSON.stringify({
    schema
   }),
 })
   .then((response) => response.json())
   
   .then((response) => {
     console.log(response)
     dispatch(DataSearch(response))

     toast.success(response?.sucess)
     

     if (!response?.sucess) {
       throw Error(response.error)
     }
    
     console.log(response);
     
   })
   .catch((err) => {
     // setError(err.message);
     toast.error(err?.message);
     

   })
  }
}
const DataSearch=(amount)=>{
  // debugger;
  return{
    type:"searchData",
    payload:amount
  }
}