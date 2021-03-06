import React, { useState} from "react";
import about_image from '../images/landing_page.jpg'
import Collapsible from './collapsible.jsx';
import { useMediaQuery } from "react-responsive";

export const About = (props) => {
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
  
  const [isReadMore, setIsReadMore] = useState(false);
  const readFunctionality = () => {
    setIsReadMore(!isReadMore)
    /*if(!isReadMore){
      if(isLaptop || isDesktopOrLaptop){
        window.scrollTo(0, 1100)
      }
      else{
        window.scrollTo(0, 2300)
      }
    }*/

    
  }
  return (
    


    <div id='about' >
      <div className='container'>
        <div className='row'>
          <div className='about-img-cam col-xs-12 col-md-6' data-aos="fade" data-aos-duration="1500">
            {' '}
            <img src={about_image} className='img-responsive' alt='' />{' '}
          </div>
          <div className='about-text-title col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2 data-aos="fade-up" data-aos-duration="1500">About Us</h2 >
{                           
                      props.data?
                            isReadMore?
                            <p data-aos="fade-up" data-aos-duration="1000">{props.data ? props.data.paragraph : 'loading...'} </p>
                          
                            :<p data-aos="fade-up" data-aos-duration="1000">{props.data ? (props.data.paragraph).slice(0,1000)  : 'loading...'} ...</p>
                            
                            :""}
                          {props.data?
                          <>
                          {isReadMore ? 
                            <a  style={{"color":"white", "textDecorationThickness":"10px","cursor":"pointer"}} onClick={()=>readFunctionality()}>
                              show less
                              </a>:
                              <a href = "#about" style={{"color":"white", "textDecorationThickness":"10px","cursor":"pointer"}} onClick={()=>readFunctionality()}>
                              ...read more
                            </a>
                              }
                            </>:""}
                            {props.data &&
                      isReadMore?
              <h3 data-aos="fade-up" data-aos-duration="1000" >Why Choose Us?</h3>
              : ''}
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul data-aos="fade-up" data-aos-duration="1000">
                    {props.data &&
                      isReadMore
                      ? props.data.Why.map((d, i) => (
                        <li data-aos="fade-up" data-aos-duration="1000" key={`${d}-${i}`}>{d}</li>
                      ))
                      : ''}
                  </ul>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data && isReadMore
                      ? props.data.Why2.map((d, i) => (
                        <li data-aos="fade-up" data-aos-duration="1000" key={`${d}-${i}`}> {d}</li>
                      ))
                      : ''}
                  </ul>
                </div>
              </div>
            </div>
            {/* <button class="collapsible">Open Collapsible</button>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>


  )
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}