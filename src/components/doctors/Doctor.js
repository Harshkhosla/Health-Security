import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Notes from './Notes';
import { notesData } from '../../harsh reducers/action-creators';
import { DoctorData } from '../../harsh reducers/action-creators';

const Doctor = () => {
  const dispatch =useDispatch()
  const notdata=useSelector(state=>state.amount.notesData)
  console.log(notdata, "harshs");
  
    const [discription,setDiscription]=useState({
        title:'',
        discription:''
    });
    const [noteData,setNoteData]=useState([])
    console.log(noteData);
    const[iid,setIid]=useState('')
    const [modal,setModal]=useState();
    console.log(modal);
    const [data,setData]=useState([])
    console.log(data);

    const onchange=(e)=>{
      const{name,value}=e.target;
        setDiscription({...discription,[name]: value})
    }


    const clicked=()=>{
      setData([...data,discription])
      dispatch(DoctorData(discription))
    }

    useEffect(()=>{
      setNoteData(notdata)
    },[notdata])

    const delet=(id)=>{
      // debugger;
      setNoteData(noteData.filter((data,index)=>{
        return(index!=id)
      }))
    }


    const onchangee=(e)=>{ 
      debugger;
      const{name,value}=e.target;

      setModal({...modal,[name]: value})
    }

    useEffect(()=>{
      const  dataCall=async ()=>{
      dispatch(notesData())
      }
      dataCall();
     },[data])


    const edit=(id)=>{
      setIid(id)
      const newData=data?.filter((data,index)=>index===id)
      setModal(newData[0]);
          }




    const saveData=()=>{
      setData(data.map((data,index)=>{
        if (index===iid){
          return modal;
        }
        else{
          return data
        }
      }))
    }


  return (
  <>
  <div className="container">
    <div className="formDiv d-flex flex-column col-md-8 offset-md-2 mt-4">
      <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Topic</label>
            <input type="text" class="form-control" id="exampleInputEmail1" name='title' value={discription.title} onChange={onchange}/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" name='discription'value={discription.discription}  onChange={onchange} rows="3"></textarea>
          </div>
          <button type="button" class="btn col-md-4 offset-md-4 rounded-2 text-white" style={{backgroundColor:"#10847E"}} onClick={clicked}>Submit</button>
          
      </form>
    </div>
<div className="container">
    {noteData?.map((harsh,index)=>{
      console.log(harsh);
      return(
        <div className="col-md-3">
        <div class="card ">

            <div class="card-body">
                <h5 class="card-title">{harsh?.title}</h5>
                <p class="card-text">{harsh?.discription}</p>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"onClick={()=>edit(index)}>Edit</button>
                <button class="btn btn-primary" onClick={()=>delet(index)}>delet</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
</div>

            </div>
        </div>
        
    </div>     
      )
    })}

  </div>
  </div>
 
</>
    )
}

export default Doctor