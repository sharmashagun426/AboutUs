import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Skills() {
  return (
    <>
    {/* <!-- Skill Start --> */}
    <div className="container-fluid py-5" id="skill">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>Skills</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">React</h6>
                            <h6 className="font-weight-bold">95%</h6>
                        </div>
                        <ProgressBar animated variant="success" now={95} />
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Redux</h6>
                            <h6 className="font-weight-bold">90%</h6>
                        </div>
                        <ProgressBar animated variant="Redux_color" now={90} />
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">PHP</h6>
                            <h6 className="font-weight-bold">80%</h6>
                        </div>
                        <ProgressBar animated variant="PHP_color" now={80} />
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">TypeScript</h6>
                            <h6 className="font-weight-bold">60%</h6>
                        </div>
                        <ProgressBar animated variant="TypeScript_color" now={60} />
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">JavaScript</h6>
                            <h6 className="font-weight-bold">95%</h6>
                        </div>
                        <ProgressBar animated variant="JavaScript_color" now={95} />
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Wordpress</h6>
                            <h6 className="font-weight-bold">90%</h6>
                        </div>
                        <ProgressBar animated variant="Wordpress_color" now={90} />
                    </div>
                    </div>
                <div className="col-md-6">
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">HTML/CSS</h6>
                            <h6 className="font-weight-bold">85%</h6>
                        </div>
                        <ProgressBar animated variant="HTML_CSS_color" now={85} />
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">JQuery</h6>
                            <h6 className="font-weight-bold">80%</h6>
                        </div>
                        <ProgressBar animated variant="JQuery_color" now={80} />
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Elixir</h6>
                            <h6 className="font-weight-bold">45%</h6>
                        </div>
                        <ProgressBar animated variant="Elixir_color" now={45} />
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">MongoDB/PostgreSQL/MySQL</h6>
                            <h6 className="font-weight-bold">70%</h6>
                        </div>
                        <ProgressBar animated variant="MongoDB_color" now={70} />
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Heroku</h6>
                            <h6 className="font-weight-bold">80%</h6>
                        </div>
                        <ProgressBar animated variant="Heroku_color" now={80} />
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Github/SVN</h6>
                            <h6 className="font-weight-bold">90%</h6>
                        </div>
                        <ProgressBar animated variant="Github_color" now={90} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Skill End --> */}
    </>
  )
}
