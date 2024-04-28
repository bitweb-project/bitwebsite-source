import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import "./About.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <img
          src="/img/logos/png/bitweb256px.png"
          alt="About us"
          className="logo-about"
        />
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">
                {t("foundationPage.missionStatementTitle")}
              </h2>
	      <img src="/img/photos/photo1.jpg" alt="" height="90"/>
              <p>{t("foundationPage.missionStatementText")}</p>
	      <img src="/img/photos/photo2.jpg" alt="" height="90"/>
              <p>{t("foundationPage.missionStatementText1")}</p>
              <h2 className="title title--green title--left">
                {t("foundationPage.technicalSupportTitle")}
              </h2>
              <p>{t("foundationPage.technicalSupportText")}</p>
              <p>
                  <strong>BTE</strong> {t("foundationPage.Address")}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://explorer.bitwebcore.net/address/web1qqtke2c89l9cdku5jy09qzl99xcq4rjvdt828ws"
                >
                  {" "}
                  web1qqtke2c89l9cdku5jy09qzl99xcq4rjvdt828ws
                </a>
                <br />
                  <strong>TRX</strong> {t("foundationPage.Address")}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tronscan.org/#/address/TN5hANMVXaJtdbtG9bwm9YUd9rWeaUPoaa"
                >
                  {" "}
                  TN5hANMVXaJtdbtG9bwm9YUd9rWeaUPoaa
                </a>
                <br />
                  <strong>TRC20 USDT</strong> {t("foundationPage.Address")}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tronscan.org/#/address/TN5hANMVXaJtdbtG9bwm9YUd9rWeaUPoaa"
                >
                  {" "}
                  TN5hANMVXaJtdbtG9bwm9YUd9rWeaUPoaa
				</a>
              </p>
            </div>
            <div className="col col--small">
              <h2 className="title title--green title--left">
                {t("foundationPage.contactUsTitle")}
              </h2>
              <p>
                <b>Bitweb Project</b>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/Bitweb_Project"
                >
                  {" "}
                  Twitter
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.gg/jQdttwgsJa"
                >
                  {" "}
                  Discord
                </a>
                
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://t.me/bitweb"
                >
                  {" "}
                  Telegram
                </a>
                <br />
              </p>
              <p>Contact Us:
			    <br />
                <a href="mailto:contact@bitwebcore.net">
                  Contact
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="main">
	  <div className="anchor" data-id="partner"></div>
	    <div className="container">
		<h2 className="title title--green">
		  Donors
		</h2>
	    <div className="blocks-list">
            <a
              href="mailto:mraksoll@bitwebcore.net"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">I want</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/donate.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                To donate
              </div>
            </a>
	  </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <About />
    </Suspense>
  );
}

export default HoF;
