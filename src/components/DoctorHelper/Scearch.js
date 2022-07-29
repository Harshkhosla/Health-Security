import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SearchDatas } from '../../harsh reducers/action-creators'
import {useNavigate} from "react-router-dom";

const Scearch = () => {
    const dispatch=useDispatch();
    const Searchdata=useSelector(state=>state.amount.searchData)
    console.log(Searchdata);
    const [signup,setSignUp]=useState({
        schema:''        
      })


      console.log(signup);
      const signUpChange=(e)=>{
        const {name,value}=e.target
        setSignUp({...signup,[name]:value})
      }
      const searchdata=()=>{
        // debugger;
        dispatch(SearchDatas(signup))
      }
  return (
    <div>
        <div className="container">

       <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" value={signup.schema} name='schema' onChange={signUpChange} />
                <button type="button" class="btn btn-secondary" onClick={searchdata}>Secondary</button>
              </div>
        </div>
        <div className="container">
    {Searchdata?.map((harsh,index)=>{
      console.log(harsh);
      return(
        <div className="col-md-3">
        <div class="card ">

            <div class="card-body">
                <h5 class="card-title">{harsh?.title}</h5>
                <p class="card-text">{harsh?.discription}</p>
                {/* <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"onClick={()=>edit(index)}>Edit</button>
                <button class="btn btn-primary" onClick={()=>delet(index)}>delet</button> */}
                {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Topic</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name='title' value={modal?.title} onChange={onchangee}/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" name='discription' value={modal?.discription}  onChange={onchangee} rows="3"></textarea>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>saveData(index)}>Save changes</button>
      </div>
    </div>
  </div>
</div> */}

            </div>
        </div>
        
    </div>     
      )
    })}

  </div>

    </div>
  )
}

export default Scearch
