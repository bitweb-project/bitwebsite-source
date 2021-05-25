import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import renderHTML from 'react-render-html';
import "./Roadmap.scss";
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import TimeLine from "../../components/TimeLine";
import orbituaries from "../../data/death_certificates.json";
import CountUp from "react-countup";

function Roadmap() {
  const { t } = useTranslation();

  return (
    <div className="RoadmapPage">
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t("RoadmapPage.title")}</h1>
        <p className="hero__description">{t("RoadmapPage.description")}</p>
      </div>
        <div id="timeline">
          <TimeLine orbituaries={orbituaries} />
        </div>
      <Footer />
    </div>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Roadmap />
    </Suspense>
  );
}

export default HoF;