import React from 'react'
import Layout from '../components/layout'

import training from '../images/training-header.png'


const TrainingPage = () => (
  <Layout>
    <div>
        <div>
         <img src={training} alt="" className="" />
        
         </div>
          <div>
         <p>
           We offer a wide variety of corporate training programs which include Executive Management courses and Oil & Gas (O&G) Technical courses,
           which can include items from Reservoir Engineering to Crude Oil Marketing, Geology to Field Development Planning, and much more.
         </p>
         <p>
           We also have 12 week long O&G Competency Programs meant to take an employee through a combination of theory and practice within a specific 
           subject in an intensive 12 week long program. For additional details on any of these, please select desired Categories on this page.
         </p>

       </div>
      
    </div>
    </Layout>
  )


export default TrainingPage;