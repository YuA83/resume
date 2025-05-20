import React from "react";

const Summary = ({
                   isKorean,
                   summaryTitle,
                   contents
}) => {

  return (

    // Summary Section
    <div className="section summary-box">
      <h2>
        {isKorean? summaryTitle.ko : summaryTitle.en}
      </h2>

      {
        contents.map(({ko, en}) => (
          <p>
            {isKorean? ko : en}
          </p>
        ))
      }
    </div>

  );
};

export default Summary;