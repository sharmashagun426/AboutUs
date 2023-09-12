import React, { useRef, useEffect, useState } from 'react'
import profile from '../Assets/img/shagun2.jpg'
// import Typed from "react-typed";
import Typed from "typed.js";
import About from './About';
import Quality from './Quality';
import Skills from './Skills';
import Contact from './Contact';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import resume from "../Assets/File/shagunResume2.pdf"
export default function Home() {

  const [offset, setOffset] = useState(0);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Engineer",
        "Front End Developer",
        "Back End Developer"],
      typeSpeed: 100,
      backSpeed: 20,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const setScroll = () => {
    setOffset(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  const handleTop=(e)=>{
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-primary d-flex align-items-center" id="home" style={{ minHeight: "110vh" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 px-5 pl-lg-0 pb-5 pb-lg-0">
              <img className="img-fluid w-100 rounded-circle shadow-sm" src={profile} alt="" />
            </div>
            <div className="col-lg-8 text-center text-lg-left">
              <h3 className="text-white font-weight-normal mb-3">I'm,</h3>
              <h1 className="display-3 text-uppercase text-primary mb-2" style={{ WebkitTextStroke: "2px #ffffff" }}>Shagun Vashisth</h1>
              <h1 className="typed-text-output d-inline font-weight-lighter text-white">
                <span ref={el}></span>
              </h1>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a href={resume} className="btn btn-outline-light mr-3" download="Shagun-Resume">Download CV</a>
                <a href="mailto:sharmashagun426@gmail.com" className="btn btn-outline-light mr-3" target="_blank">Send Email</a>
                <a href="https://in.linkedin.com/in/shagun-vashisth-7b93b317b" className="btn btn-outline-light" target="_blank">LinkedIn Profile</a>
                {/* <button type="button" className="btn-play" data-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                  <span></span>
                </button>
                <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">Play Video</h5> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {offset >= 10 ? <About /> : ""}
      <hr />
      {offset >= 600 ? <Quality /> : ""}
      <hr />
      {offset >= 1200 ? <Skills /> : ""}
      <hr />
      {offset >= 2000 ? <Contact /> : ""}

      {offset <= 10 ? <a class="text-white scroll-to-bottom"><FaChevronDown /></a> : ""}
      {offset >= 2000 ? <a href="#" class="btn btn-outline-dark px-0 back-to-top" onClick={handleTop}><FaChevronUp /></a> : ""}
    </>
  )
}
