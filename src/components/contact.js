import React from 'react'

import '../components/contact.css'



const Contact = () => (
    <div className="body">
    <section className="contact-page-section">
         <div className="sec-title">
         <h1 className="title">Get in Touch with Us</h1>
         </div>

         <div className="inner-container">
            <div className="row clearfix">

            <div className="form-column col-md-8 col-sm-12 col-xs-12">
                <div className="inner-column">

                <div className="contact-form">
                <form method="post" action="sendemail.php" id="contact-form">
                    <div className="row clearfix">
                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                    <input type="text" name="name" value="" placeholder="Name" required />
                    </div>
                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                    <input type="email" name="name" value="" placeholder="Email" required />
                    </div>
                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                    <input type="text" name="subject" value="" placeholder="Subject" required />
                    </div>
                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                    <input type="text" name="phone" value="" placeholder="Phone" required />
                    </div>
                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                    <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                    <button type="submit" class="theme-btn btn-style-one">Send Now</button>
                    </div>
                    
                    </div>
                </form>
                </div>
                </div>
            
            </div>

            <div className="info-column col-md-4 col-sm-12 col-xs-12">
                <div className="inner-column">
                    <h2 className="info-title"></h2>
                        <ul className="list-info">
                            <li><i className="fas fa-globe"></i>16000 Park Ten Pl #501, Houston, TX 77084</li>
                            <li><i className="far fa-envelope"></i>cradlesolution@yahoo.com</li>
                            <li><i className="fas fa-phone"></i> (713) 776-8510</li>

                        </ul>

                </div>


            </div>
            <div className="copyright">
               Copyright © {new Date().getFullYear()} Cradle Solution, Inc. | All Rights Reserved
                {` `}
                <a href="https://www.cradlesolution.com">Cradle Solution</a>
            </div>



            </div>
         </div>
        

    </section>
    </div>
)

export default Contact