
import React, { useState } from "react";
// import "../../"
import image from './img.gif.gif'
import image2 from '../logout home/img3.gif'
const Documents = () => {
    const today = new Date()
    const [selectedImage, setSelectedImage] = useState(null);
    const [dats, setDats] = useState([]);
    const[img,setImg]=useState([]);
    const [date,setDate]=useState();
    const DeletNote = (id) => {
        setDats(dats.filter((data, index) => {
            return (
                index !== id
            )
        }
        ))
    }
    const ShowImage = (id) => {
        console.log(id);
        dats.find((data,index)=>{
            if(id===index){
                setImg(data)
            }
        })
    }
    return (
        <div >
            <h1 className="text-center mt-2 mb-5">Prescription</h1>
            <div className="container">
                
            <div className="row">
                <div className="input-box d-flex flex-column justify-content-center text-center align-items-center border col-md-6 offset-md-3 rounded-4" style={{backgroundColor:"#E9F3FE"}} >
                   <div className="mt-5">
                    <img src={image2} style={{width:"25rem",height:"16rem"}} />
                    </div> 
                    
                <div className="text-center">
               <input 
                type="file" style={{margin:"2rem"}}
                name="myImageee" 
                
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                    setDats([...dats, event.target.files[0]]);
                    setDate(`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}`)
                }}
                
                />
                </div>
                </div>
            </div>
        </div>
            {/* {selectedImage && (
      <div>
      <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
      <br />
      
      </div>
    )} */}
            <br />

            <div className="d-flex flex-wrap justify-content-between align-items-center p-5  ">

                {/* <br />  */}
                {dats?.map((harsh, index) => {
                    // console.log(harsh);
                    return (
                        <div key={index} className="d-flex flex-column m-3">

                            <img alt="not fount" width={"300px"} height={"250px"} className="border border-dark" src={URL.createObjectURL(harsh)} onClick={() => ShowImage(index)} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                            {/* <span>{selectedImage?.lastModifiedDate}</span> */}
                            {date}
                            <button className="btn btn-sm btn-danger my-2" onClick={() => DeletNote(index)}>Delete</button>
                        </div>
                    )
                }
                )}
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           {img?.length===0?"no image to show":<img alt="not fount" width={"900px"} src={URL.createObjectURL(img)} />}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Documents
