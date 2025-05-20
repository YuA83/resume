import React from "react";
import Timeline from "./Timeline";

const Section = ({
                   isKorean,
                   title,
                   contents
}) => {

  return (
    <div className="section timeline-section">
      <h2>{isKorean? title.ko : title.en}</h2>

      <div className="timeline-list">
        <Timeline isKorean={isKorean} contents={contents} />
      </div>
    </div>
  );
};

export default Section;