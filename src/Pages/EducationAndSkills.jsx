import React from "react";

const EducationAndSkills = () => {
  return (
    <div className="section_2" id="Education" style={{ marginTop: "-50px" }}>
      <h3 className="heading" style={{ marginLeft: "100px", marginTop: "50px" }}>
        Education & <span>Skills</span>
      </h3>
      <div className="makeflex row">
        <div className="Education col-lg-6 col-md-12 pb-4">
          <div className="years">
            <h6 className="year1">2019-2023</h6>
            <h6 className="year">2018-2019</h6>
            <h6 className="year2">2016-2017</h6>
          </div>
          <div className="liner">
            <div className="dotline">
              <span className="dot"></span>
              <span className="line0"></span>
            </div>
            <div className="dotline">
              <span className="dot1"></span>
              <span className="line1"></span>
            </div>
            <div className="dotline">
              <span className="dot1"></span>
              <span className="line2"></span>
            </div>
          </div>
          <div className="Education_data">
            <div className="qual" id="Skill Set">
              <h4 className="qualification">BE-Computer Science and Engineering</h4>
              <h5 className="college_name" >Government college of engineering and technology,</h5>
              <h5>Thanjavur</h5>
              <h5 className="mt-3">7.92CGPA</h5>
            </div>
            <div className="qual mt-3">
              <h4 className="qualification" id="edu1">HSC</h4>
              <span className="college_name">Kalaimagal Matric Hr.Sec school,</span>
              <h5>Namakkal</h5>
              <h6 className="mt-3">70<i className="bi bi-percent"></i></h6>
            </div>
            <div className="qual mt-7">
              <h4 className="qualification" id="edu">SSLC</h4>
              <span className="college_name">Kalaimagal Matric Hr.Sec school,</span>
              <h5>Namakkal</h5>
              <h5 className="mt-3">92<i className="bi bi-percent"></i></h5>
            </div>
          </div>
        </div>
        <div className="sks col-lg-6 col-md-12 pb-3">
          <div className="skill_name">HTML</div>
          <div className="skill_bar">
            <div className="skill_percent" per="90%" style={{ maxWidth: "90%" }}></div>
          </div>
          <div className="skill_name">CSS</div>
          <div className="skill_bar">
            <div className="skill_percent" per="80%" style={{ maxWidth: "80%" }}></div>
          </div>
          <div className="skill_name">BOOTSTRAP</div>
          <div className="skill_bar">
            <div className="skill_percent" per="75%" style={{ maxWidth: "75%" }}></div>
          </div>
          <div className="skill_name">JAVASCRIPT</div>
          <div className="skill_bar ">
            <div className="skill_percent " per="70%" style={{ maxWidth: "70%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkills;
