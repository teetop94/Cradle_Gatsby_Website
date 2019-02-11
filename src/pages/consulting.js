import React from "react";
import Layout from "../components/layout";
import consult from "../images/consulting-header.png";
import cap from "../images/Capture.png";

import '../components/consulting.css'
const ConsultingPage = () => (
  <Layout>
    <div>
      <div>
        <img src={consult} alt="" className="" />
      </div>
      <div>
        <h3>
          Interested in receiving tangible value from an IT Governance training,
          implementation or consultancy?
        </h3>
        <h3>You are at the right place!</h3>
        <p>
          Whether you are looking at preparing your staff to implement an
          enterprise IT governance system through specialized intensive training
          and certification, or as is the case for many companies, you prefer to
          have an experienced, objective third party come in as an unbiased
          consultant to help define and implement the same, you have come to the
          right place.
        </p>
        <p>
          Even though COBIT 5 is our preferred implementation framework that not
          only allows, but it actually requires customization to fit the
          specific requirements and distinct needs of every enterprise
          establishment. We understand how the main purpose of these IT
          Governance programs is to deliver value to the stakeholders based on
          numerous universal benefits which include lower costs, increased
          control and maximized efficiency and effectiveness in the overall
          enterprise operations. Having said that we can also assist with all
          aspects of an ITIL or ISO based IT Governance implementation.
        </p>
        <div className="col">
          <img
            scr={cap}
            alt=""
            className="Inc-pic"
            style={{
              width: "450px",
              height: "300px"
            }}
          />
          <br />
          <p>
            And of course, the training aspect is key for the continued value
            add proposition from any enterprise IT governance implementation.
            Whether as an integral part of an enterprise IT governance
            implementation, or separate, we can help you meet your training and
            certification needs in this area as well.
          </p>
          <p>
            Once we get an understanding of your goals and IT operations,
            existing resources and their capability, we can recommend individual
            courses and/or tracks for your staff. Depending on your chosen
            frameworks or standards, we can train them for either COBIT 5
            (Foundation/Assessor/Implementation), ITIL, ISO 38500 standards
            certifications, or a combination thereof.
          </p>
          <p>
            Many of our courses include not only the valuable content to become
            familiar and even certified in a subject, but takes it beyond that
            level to assure the participant has the knowledge and practical
            experience to bring value to the enterprise from the get go. Our
            courses not only include higher level experience training imparted
            through hands-on team based evaluation of industry case studies, but
            actually walking through sample scenarios and actual business
            simulations, which ultimately empower the participants with realized
            knowledge application and learning of the skills required in the
            enterprise.
          </p>
        </div>
        <hr />
        <p>
          To give you an idea of key elements to take into account to assure a
          properly implemented IT governance system that is embraced by your
          organization:
        </p>

        <section className="consult-section">
         
           <details open>
              <summary>Goverance</summary>
              <p className="consult-p">
                The overall IT Governance roadmap must be mapped and agreed upon
                by the key stakeholders
              </p>
              <p className="consult-p">
                Key policies, and SOP must be identified, documented
              </p>
              <p className="consult-p">Get Board approval</p>
              <p className="consult-p">
                Define periodic review timeline and audit schedul
              </p>
              </details>

            <details>
              <summary>Risk Management</summary>
              <p className="consult-p">
                Identify, document and approve enterprise risk policies
              </p>
              <p className="consult-p">Get Board Approval</p>
              <p className="consult-p">
                Define periodic review timeline and audit schedule
              </p>
              </details>

           <details>
              <summary>Operational COntrol Systems</summary>
              <p className="consult-p">
                Document operational procedures for company personnel to follow
              </p>
              <p className="consult-p">
                Assure all different corporate groups, divisions and assets are
                covered
              </p>
              <p className="consult-p">
                Define periodic review timeline and audit schedule
              </p>
            </details>

            <details>
              <summary>IT Governance Program Management </summary>
              <p className="consult-p">
                Create multi-disciplinary, cross-asset governance steering
                committees
              </p>
              <p className="consult-p">
                Establish IT Governance team with sole responsibility to
                maintain, defend and evolve IT governance program
              </p>
            </details>

           <details>
              <summary>
                Training and Development of key management and operational
                personnel
              </summary>
              <p className="consult-p">
                Define key personnel (Steering Committee Members, IT Governance
                Officers and Staff, Key Stakeholders) that requires training in
                ITGovernance
              </p>
              <p className="consult-p">
                Establish Training Roadmap, concurrent with IT Governance
                implementation, to prepare necessary staff members to learn
                about the fundamentals of IT Governance frameworks and standards
                (i.e. COBIT 5, ITIL), benefits, assessment and implementation
                strategies
              </p>
              <p className="consult-p">
                Evaluate and include required number of personnel who become
                certified over time on IT Governance frameworks and standards
                (i.e. COBIT 5, ITIL)
              </p>
              </details>
        
        </section>
        <br />
        <br />

        <hr />
        <p>
          We look forward to touching base with you to help you in your
          enterprise IT Governance needs.
        </p>
        <br />
        <br />
      </div>
    </div>
  </Layout>
);

export default ConsultingPage;
