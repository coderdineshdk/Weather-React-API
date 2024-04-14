import React, { useState } from "react";
import data from "../../data/index.json";

export default function MySkills() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Roles</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">
                {showFullDescription
                  ? item.description
                  : item.description.slice(0, 100) + "..."}
                {!showFullDescription && (
                  <button
                    className="read-more-btn btn-primary"
                    onClick={toggleDescription}
                  >
                    Read more
                  </button>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}