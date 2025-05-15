import React from "react";

const Link = ({
                isKorean,
                link
}) => {

  return (
    
    // Links Section
    <div className="section">
      <h2>
        {isKorean? link.ko : link.en}
      </h2>

      <div className="link-box">
        <a href="https://github.com/YuA83" target="_blank" className="link-item">GitHub</a>
        <a href="https://developer-maru.tistory.com" target="_blank" className="link-item">Blog</a>
      </div>
    </div>
  );
};

export default Link;