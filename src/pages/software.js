import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'

import bus from "../images/dev-header.png"
import bus1 from "../images/hive-screens.jpg"
import bus2 from "../images/cradleMRx.png"
import bus3 from "../images/cradle-edge.png"

const SoftwarePage = () => (
    <Layout>
   <div>
        <div> 
            <img src={bus} alt=""/>
         
       </div>
       <div>
        <div className="Row-soft">
            <div className="column-soft">
                <span className="web-app"><img src={bus1} alt=""/></span>
                <div className="card-body">
              <h4 className="card-title">Cradle Hive</h4>
              <p className="card-text">
              Cradle Hive is a purpose-built tool that allows companies to visualize and manage employee seating and asset placement.
              </p>
              <p className="card-text">
              Hive allows anyone in the company to see a quick overview of the floor plan, with other employees and office equipment clearly marked.
              </p>
              <p className="card-text">
              Managers can move employee seating or assets on the floor plan using an easy drag-and-drop interface, and change departmental assignment in just a few clicks.
              </p>
              <Link to="/about">
              <button className="primary">Learn More</button>
              </Link>
            </div>

            </div>
           
        </div>  
        <br/>
        <br/>

           
            <div className="column-soft">
                <span className="web-app"><img src={bus2} alt=""/></span>
                  <div className="card-body">
                  <h4 className="card-title">CradleMRx: Software for Home Health</h4>
              <p className="card-text">
              CradleMRx serves the specialized needs of home health professionals by providing web-based point-of-contact information entry and management. 
              </p>
              <p className="card-text">
              It integrates HIPAA-compliant security features and compliance with billing, reporting, and full administration and management of patient information. Since the software is web-based, updates are constantly provided without additional cost.
              </p>
              <p className="card-text">
              Note: If you require technical support for CradleMRx, or need to download an e-signature application form, please visit www.cradlemrx.com for support.
              </p>
              <Link to="/about">
              <button className="primary">Learn More</button>
              </Link>
            </div>
        </div> 
        <br/>
        <br/>


            <div className="column-soft">
                <span className="web-app"><img src={bus3} alt=""/></span>
                <div className="card-body">
              <h4 className="card-title">Cradle Edge</h4>
              <p className="card-text">
              Need that business edge? With Cradle Edge, you have a full out-of-the-box solution for the most tedious business management tasks. 
              </p>
              <p className="card-text">
              Edge base features: employee information management, timesheet tracking by pay period, fully customizable customer invoicing, leave/holiday management, room scheduling, and much more.
              </p>
              <p className="card-text">
              Contact our sales team for more information about Cradle Edge, or for a product demonstration.
              </p>
              <Link to="/about">
              <button className="primary">Learn More</button>
              </Link>
            </div>
        </div> 
        <br/>
        <br/>


               <div className="column-soft">
                <span className="web-app"><img src={bus2} alt=""/></span>
                <div className="card-body">
              <h4 className="card-title">Student Management System</h4>
              <p className="card-text">
              West Africa Management Services (WAMS) manages scholarship funds and assists hundreds of students every year who are sponsored by various 
          multinational companies to study abroad in the United States
              </p>
              <p className="card-text">
              WAMS first asked us for a custom, modern, content managed website, followed by a custom software offering to be able to manage their intricate and constantly changing day to day dealings with regards 
          to students, scholarships, registrations, grades, immigration issues, travel, insurance, housing, food stipends, sponsors, universities and other vendor interactions.
              </p>
              <p className="card-text">
              As a solution we developed not only a content managed website to allow them to make updates on their own, but we developed the WAMS Student Management System as a proprietary software 
          offering to replace what had been a document management nightmare. WAMS can now manage all students from a single application, and easily coordinate different steps in the process through rules built into the system, with related reports as needed by the different internal and external stakeholders.
              </p>
              <p className="card-text">To see how our expertise can serve you, contact us today</p>
              <Link to="/about">
              <button className="primary">Learn More</button>
              </Link>
            </div>
        </div> 
        <br/>
        <br/>

         
       </div>
      
    </div>
    </Layout>
  )


export default SoftwarePage;