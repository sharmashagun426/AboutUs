import React, { useEffect, useRef } from 'react'
import Typed from "typed.js";
import { FaWhatsapp } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export default function Contact() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["I'm Working With Companies Globally In Every Industry, Every Sector And Every Size From Startups To Biggest Brands."],
            // "Join <span style='color: #0BCEAF'> Our </span> Team To <span style='color: #0BCEAF'>Create </span> The Best <span style='color: #0BCEAF'> Digital Solutions</span>."],
            typeSpeed: 70,
            // backSpeed: 20,
            // loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            {/* <!-- Contact Start --> */}
            <div className="container-fluid py-5" id="contact">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>Contact</h1>
                        <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12   ">
                            {/* <div className="control-group col-sm-12"> */}
                            <h1 className="typed-text-output d-inline font-weight-bolder">
                                <span ref={el}></span>
                            </h1>
                            {/* </div> */}
                        </div>
                        <div className="control-group col-sm-12 mt-5 text-center">
                            <p>Feel free to get in touch.</p>
                        </div>
                        {/* <div className="text-center"> */}
                        <div className="text-center contact_section col-sm-3">
                            <h5 className='mb-3 text-center'>Call Us Today :-</h5>
                            <div className='text-center'>
                                <p><a href="callto:+975 17698542"><FaPhoneAlt /> +975 17698542</a></p>
                            </div>
                            <div className='text-center'>
                                <p><a href="callto:+91 9996632053"><FaPhoneAlt /> +91 9996632053</a></p>
                            </div>
                        </div>
                        <div className="contact_section text-center col-sm-5">
                            <h5 className='mb-3'>Write Email :-</h5>
                            <p> <a href="mailto:sharmashagun426@gmail.com"><FaMailBulk /> sharmashagun426@gmail.com</a> </p>
                            <p> <a href="mailto:shagunvashisth380@gmail.com"><FaMailBulk /> shagunvashisth380@gmail.com</a></p>
                        </div>
                        <div className="contact_section col-sm-3 icons text-center">
                            <h5 className='mb-3'>Say Hello :-</h5>
                            {/* <p><a href='https://www.linkedin.com/in/shagun-vashisth-7b93b317b/'><FaLinkedin />Linkedin</a></p> */}
                            <p><a href='https://api.whatsapp.com/send/?phone=97517698542&text=Hi%20Shagun,%20Can%20We%20Discuss%20About%20My%20Project?&type=phone_number&app_absent=0'><FaWhatsapp /> +975 17698542</a></p>
                            <p><a href='https://api.whatsapp.com/send/?phone=919996632053&text=Hi%20Shagun,%20Can%20We%20Discuss%20About%20My%20Project?&type=phone_number&app_absent=0'><FaWhatsapp />+91 9996632053</a></p>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}

            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-primary text-white px-sm-3 px-md-5">
                <div className="container text-center py-5">
                    <div className="d-flex justify-content-center mb-4">
                        <a className="btn btn-light btn-social mr-2" href="https://www.facebook.com/sharmashagun426"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-light btn-social mr-2" href="https://www.linkedin.com/in/shagun-vashisth-7b93b317b/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-light btn-social mr-2" href="https://www.instagram.com/i_shagun_vashisth/?hl=en"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a className="text-white" href="#">Privacy</a>
                        <span className="px-3">|</span>
                        <a className="text-white" href="#">Terms</a>
                        <span className="px-3">|</span>
                        <a className="text-white" href="#">FAQs</a>
                        <span className="px-3">|</span>
                        <a className="text-white" href="#">Help</a>
                    </div>
                    <p className="m-0">&copy; <a className="text-white font-weight-bold" href="#">Shagun.com</a>. All Rights Reserved. Designed by <a className="text-white font-weight-bold" href="">Shagun Vashisth</a>
                    </p>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </>
    )
}
