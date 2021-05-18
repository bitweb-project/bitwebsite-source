import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import renderHTML from "react-render-html";
import "./Resources.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Resources() {
  const { t } = useTranslation();

  return (
    <div className="ResourcesPage">
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t("resourcesPage.title")}</h1>
        <p className="hero__description">{t("resourcesPage.description")}</p>
        <div className="hero__actions">
          <a
            href="#exchanges"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.actions.action1")}
          </a>
          <a
            href="#blockexplorers"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.actions.action2")}
          </a>
          <a
            href="#whitepaper"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.actions.action4")}
          </a>
        </div>
      </div>

      <div className="main">
        <div className="anchor" data-id="exchanges"></div>
        <div className="container">
          <h2 className="title title--green">
            {t("resourcesPage.exchangesTitle")}
          </h2>
          <div className="blocks-list">
          </div>
        </div>
      </div>

      <div className="main">
        <div className="anchor" data-id="blockexplorers"></div>
        <div className="container">
          <h2 className="title title--green">
            {t("resourcesPage.explorersTitle")}
          </h2>
          <div className="blocks-list">
            <a
              href="https://explorer.bitwebcore.org/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">Bitweb Explorer</h4>
              <img
                className="blocks-list__block__img"
                src="/img/explorers/bitwebexp.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="anchor" data-id="whitepaper"></div>
        <div className="container">
          <h2 className="title title--green">
            {t("resourcesPage.whitepaperTitle")}
          </h2>
          <div className="blocks-list">
            <a
              href="/whitepapers/whitepaper.pdf"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                {t("resourcesPage.whitepaperEnglish")}
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/icons/paper.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Resources />
    </Suspense>
  );
}

export default HoF;
