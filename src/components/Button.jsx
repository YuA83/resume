import React from "react";
import { RxDownload } from "react-icons/rx";
import html2pdf from "html2pdf.js";
import dayjs from "dayjs";

const Button = ({
                  isKorean,
                  onToggle,
                  nameTitle,
                  roleTitle,
                  buttonTitle,
                  flagTitle
}) => {

  const handleDownload = () => {

    window.scrollTo(0, 0);

    const element = document.querySelector('.resume-container');
    const toolbar = document.querySelector('.lang-toggle-container');

    toolbar.style.display = 'none';

    const name = (isKorean ? nameTitle.ko : nameTitle.en).replaceAll(" ", "");
    const role = (isKorean ? roleTitle.ko : roleTitle.en).replaceAll(" ", "");

    const dateTime = dayjs().format("YYYYMMDD") + "_" + dayjs().format("HHmmss");
    const filename = `[Resume]${role}_${name}_${dateTime}.pdf`;

    setTimeout(() => {
      html2pdf()
        .set({
          margin: [0.5, 0.5, 0.5, 0.5],
          filename: filename,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
          enableLinks: true
        })
        .from(element)
        .save()
        .then(() => {
          toolbar.style.display = 'flex';
        });
    }, 300);
  };

  return (

    // toggle & download button
    <div className="lang-toggle-container">
      {/*<button id="downloadBtn" aria-label="Download PDF" title="Download PDF" onClick={handleDownload}>*/}
      {/*  <i className="fas fa-download">*/}
      {/*    <RxDownload />*/}
      {/*  </i>*/}
      {/*</button>*/}

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