import React, { useState, useCallback } from "react";
import ReactPlayer from 'react-player'

import { useMediaQuery } from "react-responsive";
export const Gallery = props => {
  
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px && max-device-width: 500px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-width: 1824px)",
  });

  const resetStatus = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    window.scrollTo(0, 3000)
  }
 
  const data = [
    { heading:"Maternity", image:"img/gallery/maternity.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Maternity", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { heading:"Wedding", image:"img/gallery/wedding.jpg", video: "https://www.youtube.com/watch?v=v7h7HRMe28A", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { heading:"Product", image:"img/gallery/product.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { heading:"Model", image:"img/gallery/model.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Maternity", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { heading:"Branding", image:"img/gallery/tshirt.jpg", video: "https://www.youtube.com/watch?v=v7h7HRMe28A", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
    { heading:"Haldi", image:"img/gallery/haldi.jpg", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Lorem Ipsum1", data: "Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " },
  
  ];

  const openImageViewer = useCallback(index => {
  console.log(window.pageYOffset)
    setCurrentImage(index);
    setIsViewerOpen(true);
    
      if(isLaptop || isDesktopOrLaptop){
        window.scrollTo(0, 3330)
      }
      else{
        window.scrollTo(0, 3960)
      }
  }, []);
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          {isViewerOpen?
        <div class="holder">
                  <a className="back-btn style-back" href="#portfolio" onClick={resetStatus}>
                  <i class="fa fa-angle-double-left"></i> back</a>
                  <div style={{"display":"inline-block"}}>
                  
                  <span ><h2 data-aos="fade-up" data-aos-duration="1000">{data[currentImage].heading}</h2></span>
                  </div>
                  </div>:<><h2 data-aos="fade-up" data-aos-duration="1000">Gallery</h2>
          <p>Welcome to a larger-than-life experience with us.</p>
          </>}
                          </div>
        {!isViewerOpen ?
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, video, image }, index) => (
              <div key={index} onClick={() => openImageViewer(index)} className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item cursor">
                <img src={image} style = {{width:"450px",height:"300px"}} className="img-responsive" alt="Project Title" />{" "}
      
                    </div>
                      </div>
            ))}
          </div>
          
        </div>
        
: <div className="col-md-4" data-aos='fade-up' data-aos-duration='1000'>

<div className='container'>
<div className='row'>
<div className='about-img-cam col-xs-12 col-md-6' data-aos="fade" data-aos-duration="1500">
  {' '}
  <ReactPlayer
className='react-player'
playing = {false}
url= {data[currentImage].video}
width = {"100%"}
height = {"76%"}
/></div>
<div className='about-text-title col-xs-12 col-md-6'>
  <div className='about-text'>
    <h2 data-aos="fade-up" data-aos-duration="1500">{data[currentImage].title}</h2 >
    <p data-aos="fade-up" data-aos-duration="1000">{data[currentImage].data} </p>
  </div>
</div>
</div>
</div>

</div>}  


    </div>
    </div>
  );
};
