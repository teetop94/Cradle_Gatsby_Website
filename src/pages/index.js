import React from "react"

import { Link } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Layout from "../components/layout"
import Image from "../images/home-header.png"

import image from "../images/image.jpg"




const IndexPage = () => (
  <Layout>
    <div style={{marginTop: `0`}}>
    <Carousel>
      <div className="header-text">
        <img src={Image} alt="" style={{marginTop:"0", width: "100%"}}/>
        <p className="legend">We provide custom application software, and we provide 
          detailed technical training for Oil and Gas Industry.</p>
    </div>

    <div className="header-text">
        <img src={Image} alt="" />
        <p className="legend">We provide custom application software, and we provide 
          detailed technical training for Oil and Gas Industry.</p>
    </div>

    <div className="header-text">
        <img src={Image} alt="" />
        <p className="legend">We provide custom application software, and we provide 
          detailed technical training for Oil and Gas Industry.</p>
    </div>
    </Carousel>


    
   <div className="wrapper">
       
        <div className ="row text-center">
            <div  className="column" style={{width: "600px", height:"350px", columnGap: "40px"}}>
                <img src={image} alt=""
                  style={{
                    borderRadius:'50%',
                    width:'150px',
                    height:'150px',
                    textAlign:`center`
                  }}
                />
                <h3>Custom Software</h3>
                <p>We design custom software for many different industries. Let us build a custom solution for your business!</p>
            </div>
            <div  className="column" style={{width: "600px", height:"350px", columnGap: "40px"}}> 
            <img src={image} alt=""
                  style={{
                    borderRadius:'50%',
                    width:'150px',
                    height:'150px',
                    textAlign:'center'
                  }}
                />  
                <h3>Consulting</h3>
                <p>Leverage our experienced resources to handle the design and implementation of an enterprise-wide IT Governance framework.</p>
            </div>
            <br/>
            <div  className="column" style={{width: "600px", height:"350px", columnGap: "40px"}}>
            <img src={image} alt=""
                  style={{
                    borderRadius:'50%',
                    width:'150px',
                    height:'150px',
                    textAlign:'center',
                    
                  }}
                />
                <h3>Oil and Gas Services</h3>
                <p>Utilize our vast expertise to take your business further than you ever thought possible.</p>
            </div>
            <br/>
            <div  className="column" style={{width: "600px", height:"350px", columnGap: "40px"}}>
            <img src={image} alt=""
                  style={{
                    borderRadius:'50%',
                    width:'150px',
                    height:'150px',
                    textAlign:'center'
                  }}
                />
                <h3>Training Courses</h3>
                <p>From accommodations to logistics, we can handle every aspect of training for your organization.</p>

            </div>
            <br/>
            </div>
        </div>
        <br/>
        <br/>
        <br/>

       
    </div>
   
  </Layout>


)

export default IndexPage
