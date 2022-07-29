
import React, { useState } from "react";
// import "../../"
import image from './img.gif.gif'
const Documents = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [dats, setDats] = useState([]);
    const[img,setImg]=useState([]);
    
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
            <h1 className="text-center mt-2 mb-5">Upload and Display Image </h1>
            <div className="container">
                
            <div className="row">
                <div className="input-box d-flex flex-column justify-content-center text-center align-items-center border col-md-6 offset-md-3 rounded-4" style={{backgroundColor:"#E9F3FE"}} >
                   <div className="mt-5">
                    <img src={image} style={{width:"25rem",height:"16rem"}} />
                    </div> 
                    
                <div className="text-center">
               <input 
                type="file" style={{margin:"2rem"}}
                name="myImageee" 
                
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                    setDats([...dats, event.target.files[0]]);
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

            <ul>

                {/* <br />  */}
                {dats?.map((harsh, index) => {
                    // console.log(harsh);
                    return (
                        <li key={index}>

                            <img alt="not fount" width={"300px"} src={URL.createObjectURL(harsh)} onClick={() => ShowImage(index)} data-bs-toggle="modal" data-bs-target="#exampleModal" />

                            <button onClick={() => DeletNote(index)}>Remove</button>
                        </li>
                    )
                }
                )}
            </ul>

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
