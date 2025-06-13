import {useState} from "react";

import "./App.css";
import Header from "./components/Header";
import Summary from "./components/Summary";
import TechStack from "./components/TechStack";
import Button from "./components/Button";
import Link from "./components/Link";
import AboutMe from "./components/AboutMe";

import {
  title,
  techList,
  summary,
  experience, certification, education, project,
  aboutMe
} from "./data/data.js";
import Section from "./components/Section";

const App = () => {

  const [isKorean, setIsKorean] = useState(true);

  const toggleLanguage = () => {
    setIsKorean(prev => !prev);
  };

  return (
    <div className="resume-container">

      {/* Header Section */}
      <Header isKorean={isKorean} nameTitle={title.name} addressTitle={title.address} />

      {/* Summary Section */}
      <Summary isKorean={isKorean} summaryTitle={title.summary} contents={summary} />

      {/* TechStack Section */}
      <TechStack isKorean={isKorean}
                 positionTitle={title.position}
                 roleTitle={title.role}
                 stackTitle={title.stack}
                 contents={techList}
      />

      {/* Experience Section */}
      <Section isKorean={isKorean} title={title.experience} contents={experience} />

      {/* Projects Section */}
      <Section isKorean={isKorean} title={title.project} contents={project} />

      {/* Education Section */}
      <Section isKorean={isKorean} title={title.education} contents={education} />

      {/* Certifications Section */}
      {/*<Section isKorean={isKorean} title={title.certification} contents={certification} />*/}

      {/* About Me Section */}
      <AboutMe isKorean={isKorean} aboutMeTitle={title.aboutMe} contents={aboutMe} />

      {/* Links Section */}
      {/*<Link isKorean={isKorean} link={title.link} />*/}

      {/* Toggle & Download Button Section */}
      <Button isKorean={isKorean}
              onToggle={toggleLanguage}
              nameTitle={title.name}
              roleTitle={title.role}
              buttonTitle={title.button}
              flagTitle={title.flag}
      />

    </div>
  );
}

export default App;
