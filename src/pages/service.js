import React from 'react'
import Layout from "../components/layout"

import dawn from '../images/service-header.png'

const ServicePage= () =>  (
    <Layout>
    <div>
        <div>
        
        <img src={dawn} alt="" className="service-header.png" />
       
       <div>
            <p>The oil and gas industry’s ability to meet current demand and future increase in energy needs is greatly dependent on its 
                continued push for application of innovative technologies. We believe in the value of focusing on the end users and based on this, we deliver a current fit-for-purpose engineering solutions in seven major areas:</p>
                
            <ul>
                <li>Design and implementation of field development and operations planning system</li>
                <li>Design and implementation of performance monitoring and surveillance system</li>
                <li>Design and implementation of asset integrity surveillance and management system</li>
                <li>Design and implementation of automated workflows and big data predictive analytics system</li>
                <li>Design and implementation of intelligent oil and gas fields' optimization system</li>
                <li>Design and implementation of novel material in well abandoments</li>
                <li>Development of web-based petroleum production data management system</li>
            </ul>
                
       </div>
      </div>
      
    </div>
    </Layout>
  )

export default ServicePage;