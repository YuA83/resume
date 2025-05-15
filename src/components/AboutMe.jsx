import React from "react";

const AboutMe = ({
                   isKorean,
                   aboutMeTitle,
                   contents
}) => {
  return (
    // About Me Section
    <div className="section">
      <h2>
        {isKorean? aboutMeTitle.ko : aboutMeTitle.en}
      </h2>

      <div className="about-subsection">
        {
          contents.map(({titleKo, titleEn, contentKo, contentEn}) => (
            <>
              <h3>{isKorean? titleKo : titleEn}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{isKorean? contentKo : contentEn}</p>
            </>
          ))
        }
      </div>
    </div>
  );
};

export default AboutMe;