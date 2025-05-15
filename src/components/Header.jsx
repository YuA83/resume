import React from "react";

const Header = ({
                  isKorean,
                  nameTitle,
                  addressTitle
}) => {

  return (

    // Profile Section
    <div className="header">
      <div className="photo">
        <img src="/assets/images/maru.jpg" alt="프로필 사진"/>
      </div>
      <div className="personal-info">
        <h1>{isKorean ? nameTitle.ko : nameTitle.en}</h1>

        <br/>
        <br/>

        <p>🎂 1998.08.03</p>
        <p>{isKorean ? addressTitle.ko: addressTitle.en}</p>
        <p><a href="tel:+821092588393">📞 +82 10-9258-8393</a></p>
        <p><a href="mailto:yua._.83@icloud.com">📧 yua._.83@icloud.com</a></p>
      </div>
    </div>
  );
};

export default Header;