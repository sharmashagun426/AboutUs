import React from 'react'
export default function Quality() {
    let img = 'https://assets-global.website-files.com/6026c3a5020cc79ec8d676ba/61d5e1b6ae8db76cba5ac2fe_Coming%20Soon%20Page.jpeg'
    return (
        <div>

            <div className="container-fluid py-5" id="qualification">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>Quality</h1>
                        <h1 className="position-absolute text-uppercase text-primary">Education & Expericence</h1>
                    </div>
                    {/* <h3 className='text-uppercase text-primary' style={{textAlign: "center"}}>Coming Soon</h3> */}

                    {/* <img style={{width: "100%"}} src={img} alt="" /> */}
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="mb-4">My Education</h3>
                            <div className="border-left border-primary pt-2 pl-4 ml-2">
                                <div className="position-relative mb-4">
                                    <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                    <h5 className="font-weight-bold mb-1">Bachlore In CSE</h5>
                                    <p className="mb-2"><strong>Shri Venkateshwara University</strong> | <small>2020 - 2023</small></p>
                                    <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                                </div>
                                <div className="position-relative mb-4">
                                    <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                    <h5 className="font-weight-bold mb-1">Diploma In CSE</h5>
                                    <p className="mb-2"><strong>Cambridge University</strong> | <small>2016 - 2019</small></p>
                                    <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                                </div>
                                {/* <div className="position-relative mb-4">
                                    <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                    <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                                    <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                                    <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4">My Expericence</h3>

                            <div className="border-left border-primary pt-2 pl-4 ml-2">
                                <div className="position-relative mb-4">
                                    <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                    <h5 className="font-weight-bold mb-1">Senior Software Engineer</h5>
                                    <p className="mb-2"><strong>Bada Business Pvt Ltd</strong> | <small>2022 - Present</small></p>
                                    <p>• Developed and designed modular UI components and Dashboards using latest React.JS, isomorphic JavaScript, Redux and various open source libraries to create optimized, bug-free applications.</p><p>
                                       • Utilized React-testing-library to unit test components and created various prototypes to quickly build applications, relying on information gathered from the product team</p>
                                </div>
                                <div className="position-relative mb-4">
                                    <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                    <h5 className="font-weight-bold mb-1">Software Engineer</h5>
                                    <p className="mb-2"><strong>Chetu India Pvt Ltd</strong> | <small>2021 - 2022</small></p>
                                    <p>• Increased throughput and responsiveness of System by 25%, and reduced response time by 10%, and implemented robust and optimized error-handling protocols.</p><p>
                                        • Worked with backend developers to implement prototype elements into web applications. Attended scrum meetings and attended the client call weekly and present the live demonstration to stakeholder.</p>
                                </div>
                                <div className="position-relative mb-4">
                                    <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                    <h5 className="font-weight-bold mb-1">Software Engineer</h5>
                                    <p className="mb-2"><strong>VisiWeb Solutions Pvt Ltd</strong> | <small>2019 - 2021</small></p>
                                    <p> • Developed, tested, and maintained web applications using PHP, WordPress, JavaScript, HTML/CSS, and API integration.</p><p>
                                        • Achieved 89% issue resolution rate within the allotted timeline, improving user experience by 3x and increasing customer engagement by 50%. </p><p>
                                        • Developed web-based PHP and ReactJS applications for deployment on premiums service platforms.</p>
                                </div>
                                <div className="position-relative mb-4">
                                    <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                    <h5 className="font-weight-bold mb-1">Software Engineer</h5>
                                    <p className="mb-2"><strong>Sach Tech Solution Pvt Ltd</strong> | <small>2019 - 2019</small></p>
                                    <p>• Developed and implemented a robust back-end platform using PHP resulting in an increase in website loading speed by 23% while reducing the number of errors and bugs. </p>
                                        <p>• Developed an e-commerce system utilizing JavaScript, HTML, CSS and PHP, increasing usability and customer satisfaction by 27%.</p>
                                        <p>• Collaborated with web developer to accept assignments and support administrative tasks for development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
