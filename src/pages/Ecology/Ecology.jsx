import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import renderHTML from "react-render-html";
import "./Ecology.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Ecology() {
  const { t } = useTranslation();

  return (
    <div className="EcologyPage">
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t("ecologyPage.title")}</h1>
        <p className="hero__description">{t("ecologyPage.description")}</p>
        <div className="hero__actions">
          <a
            href="#pay"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("ecologyPage.actions.action1")}
          </a>
          <a
            href="#game"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("ecologyPage.actions.action2")}
          </a>
          <a
            href="#others"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("ecologyPage.actions.action3")}
          </a>
        </div>
      </div>
      
      <div className="main">
        <div className="anchor" data-id="game"></div>
        <div className="container">
          <h2 className="title title--green">
            Developer tools
          </h2>
          <div className="blocks-list">
            <a
              href="https://api.bitwebcore.net/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                {t("walletPage.type2")}
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/wallets/apiserver.png"
                alt=""
              />
            </a>
            <a
              href="https://api2.bitwebcore.net/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                {t("walletPage.type5")}
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/wallets/apiserver.png"
                alt=""
              />
            </a>			
            <a
              href="https://github.com/bitweb-project/electrumx"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                {t("walletPage.paperWalletSubtitle2")}
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/electrum/electrum_launcher.png"
                alt=""
              />
            </a>
            <a
              href="mailto:contact@bitwebcore.net"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">Add</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/addgroup.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                Contact us
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="main">
        <div className="anchor" data-id="pay"></div>
        <div className="container">
          <h2 className="title title--green">
            {t("ecologyPage.actions.action1")}
          </h2>
          <div className="blocks-list">
            <a
              href="mailto:contact@bitwebcore.net"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">Add</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/addgroup.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                Contact us
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="anchor" data-id="game"></div>
        <div className="container">
          <h2 className="title title--green">
            {t("ecologyPage.actions.action2")}
          </h2>
          <div className="blocks-list">
            <a
              href="mailto:contact@bitwebcore.net"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">Add</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/addgroup.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                Contact us
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="anchor" data-id="others"></div>
        <div className="container">
          <h2 className="title title--green">
            {t("ecologyPage.actions.action3")}
          </h2>
          <div className="blocks-list">
            <a
              href="mailto:contact@bitwebcore.net"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">Add</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/addgroup.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                Contact us
              </div>
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
      <Ecology />
    </Suspense>
  );
}

export default HoF;
