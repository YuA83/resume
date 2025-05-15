import React from "react";

const Button = ({
                  isKorean,
                  onToggle,
                  buttonTitle,
                  flagTitle
}) => {

  return (

    // toggle & download button
    <div className="lang-toggle-container">
      <button id="downloadBtn" aria-label="Download PDF" title="Download PDF">
        <i className="fas fa-download"></i>
      </button>

      <span
        id="langLabel"
        title={isKorean ? buttonTitle.ko : buttonTitle.en}
        style={{cursor: "pointer"}}
        onClick={onToggle}
      >
        {isKorean ? flagTitle.ko : flagTitle.en}
      </span>
    </div>
  );
};

export default Button;