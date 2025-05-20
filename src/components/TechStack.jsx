import React from "react";

const TechStack = ({
                     isKorean,
                     positionTitle,
                     roleTitle,
                     stackTitle,
                     contents
}) => {

  return (

    // TechStack Section
    <div className="badge-section">

      {/*Position Section*/}
      <div className="role-box">
        <h3>
          {isKorean ? positionTitle.ko : positionTitle.en}
        </h3>

        <div className="role-tags">
          <span className="role-item">
            {isKorean ? roleTitle.ko : roleTitle.en}
          </span>
        </div>
      </div>

      {/* Stack Section */}
      <div className="stack-box">
        <h3>
          {isKorean ? stackTitle.ko : stackTitle.en}
        </h3>

        <div className="tech-icons">
          {
            contents.map(({name, icon}) => (
              <div className="tech-item" key={name}>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/${icon}`} alt={name}/>
                <span>{name}</span>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default TechStack;