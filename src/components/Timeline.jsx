import React from "react";

const Timeline = ({
                    isKorean,
                    contents
                  }) => {

  return (
    contents.map(({title, subTitle, contract, client, period, list}) => (
      <div className="timeline-row">
        <div className="timeline-symbol"></div>
        <div className="timeline-line">│</div>
        <div className="timeline-content">
          <p className="timeline-title">
            {isKorean ? title.ko : title.en}
          </p>
          <p className="timeline-contract">
            {isKorean ? contract.ko : contract.en}
          </p>
          <p className="timeline-client">
            {isKorean ? client.ko : client.en}
          </p>
          <p className="timeline-period">
            {period}
          </p>
          <p className="timeline-sub">
            {isKorean ? subTitle.ko : subTitle.en}
          </p>

          <ul>
            {
              list.map(({ko, en}) => {
                const value = isKorean ? ko : en;
                const isLink = typeof value === 'string' && /^(https?:\/\/|mailto:)/.test(value);

                return (
                  <li>
                    {isLink ? (
                      <a href={value} target="_blank">{value}</a>
                    ) : (
                      value
                    )}
                  </li>
                );
              })
            }
          </ul>

        </div>
      </div>
    ))
  );
};

export default Timeline;