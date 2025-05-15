import React from "react";

const Timeline = ({
                    isKorean,
                    contents
}) => {

  return (
    contents.map(({title, subTitle, period, list}) => (
      <div className="timeline-row">
        <div className="timeline-symbol"></div>
        <div className="timeline-line">│</div>
        <div className="timeline-content">
          <p className="timeline-title">
            {isKorean ? title.ko : title.en}
          </p>
          <p className="timeline-sub">
            {isKorean ? subTitle.ko : subTitle.en}
          </p>
          <p className="timeline-period">
            {period}
          </p>
          <ul>
            {
              list.map(({ko, en}) => (
                <li>
                  {isKorean? ko : en}
                </li>
              ))
            }
          </ul>

        </div>
      </div>
    ))
  );
};

export default Timeline;