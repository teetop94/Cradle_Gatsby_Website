import React from 'react'

import Layout from "../components/layout"

import about from "../images/aboutUs.png"
import Inc from "../images/5000Circle.png"



const AboutPage = () => {
  return (
    <Layout>
    <div>
        <div> 
            <img src={about} alt=""/>
       
       </div>
       <div>
           
         
                <p>Initially formed in 1998, Cradle Solution offered desktop software for the home health industry. Starting with a small team, 
                Cradle was able to build a loyal customer base with rapid improvements to its software, MedPoint, through direct customer feedback.</p>
                <p>
                Through the next decade, Cradle continued to grow, eventually incorporating in 2004 and moving to larger offices.
                </p>
                <p>In 2007, Cradle moved most of the core functionality from its desktop software into a web-based solution, calling it HHWeb. This move allowed for more 
                rapid development and deployment of improvements to the software, and allowed clients to free themselves from having to worry about software deployment.</p>
                <p>Three years later, in 2010, HHWeb was renamed to CradleMRx. Along with the new name, the application underwent a complete rebranding and user interface overhaul. 
                This allowed customers to work even more efficiently than before, while positioning our home health software in the top of its market. During this time, we began leveraging our expertise into other areas and taking on different software projects for other companies.</p>
                <p>
                In 2010, we looked for options for diversifying our business. With our headquarters being in Houston, which is known as the “Energy Capital of the World”, it was natural to focus in that industry, and we have since expanded with a specific focus on technical training for the oil and gas industry, and have evolved to include executive business training offerings as well. 
                Cradle’s training has been so effective that nearly all of our customers are repeat business or referrals from word-of-mouth.
                </p>
                <div className="" >
                <img scr={Inc} alt="" className="Inc-pic" style={{ width: "450px", height: "300px"}}/>
                <h3>Cradle Solution Keeps Growing and Growing</h3>
                <p>For the third year in a row, Cradle Solution has been listed in Inc 5000’s fastest-growing companies. This past year has been mostly focused on increasing our software reach. One of our internal applications, Edge, has grown up and is now powering much of our business infrastructure, including HR, invoicing, and asset management. Our newest product, Cradle Hive, is Integrated Workspace Management Software (IWMS) for management of the physical and logistical side of business. We have also added many features to our core home health product, CradleMRx.</p>
                <p>We are joined on the Inc 5000 list this year by juggernauts such as Smashburger, Fitbit, and Planet Fitness.</p>
                <p>Thank you again for your continued support and patronage. We hope to continue providing the best solutions for your software needs in the years to come.</p>
                </div>
       </div>
      
    </div>
    </Layout>
  
  )
}
export default AboutPage;
