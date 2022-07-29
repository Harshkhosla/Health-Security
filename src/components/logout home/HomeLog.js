import React from 'react'
import img1 from './img1.gif'
import img2 from './img2.gif'
import img3 from './img3.gif'
import img5 from './img5.gif'
import img8 from './img8.jpg'
const homeLog = () => {
    return (
        <div >
            <div className="container d-flex flex-column text-center my-3">
            <h1>Keep Your Simple Tasks Simple</h1>
            <h5>...... is the first and only PDF software you’ll love. We have all the tools</h5>
            <h5> you’ll need to start, store, and finish your work with digital documents.</h5>
            </div>
            <div className='d-flex align-items-center'>
            <div className="container d-flex flex-column mx-5 my-3">
            <h1>Keep Your Simple Tasks Simple</h1>
            <h5>...... is the first and only PDF software you’ll love. We have all the tools</h5>
            <h5> you’ll need to start, store, and finish your work with digital documents.</h5>
            </div>
                <div><img src={img3} style={{width:"400px",height:"250px"}} alt="" /></div>
            </div>
            <div className='d-flex align-items-center'>
            <div><img src={img5} style={{width:"1000px",height:"350px"}} alt="" /></div>
            <div className="container d-flex flex-column  ">
            <h1>Keep Your Simple Tasks Simple</h1>
            <h5>...... is the first and only PDF software you’ll love. We have all the tools</h5>
            <h5> you’ll need to start, store, and finish your work with digital documents.</h5>
            </div>                
            </div>
            <div className='d-flex align-items-center'>
            <div className="container d-flex flex-column mx-5 my-3">
            <h1>Keep Your Simple Tasks Simple</h1>
            <h5>...... is the first and only PDF software you’ll love. We have all the tools</h5>
            <h5> you’ll need to start, store, and finish your work with digital documents.</h5>
            </div>
                <div><img src={img8} style={{width:"800px",height:"350px"}} alt="" /></div>
            </div>
            <div className="container w-50 ">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img1} class="d-block w-50 m-auto" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img2} class="d-block w-50 m-auto" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img3} class="d-block w-50 m-auto" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homeLog

