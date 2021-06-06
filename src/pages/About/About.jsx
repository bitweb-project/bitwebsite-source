import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import "./About.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Foundation() {
  const { t } = useTranslation();

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <img
          src="/img/logo-foundation-white.png"
          alt="Peercoin Foundation"
          className="logo-foundation"
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
	      <img src="/img/photos/photo3.png" alt="" height="90"/>
              <p>{t("foundationPage.missionStatementText2")}</p>

              <h2 className="title title--green title--left">
                {t("foundationPage.technicalSupportTitle")}
              </h2>
              <p>{t("foundationPage.technicalSupportText")}</p>
              <p>
                <Trans i18nKey="foundationPage.generalFundPpcAddress">
                  <strong>BTE</strong> Donation Address
                </Trans>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://explorer.bitwebcore.org/address/web1q48wnxkm0xfz8jhkv0555m2pxqed39fglzs5gpl"
                >
                  {" "}
                  web1q48wnxkm0xfz8jhkv0555m2pxqed39fglzs5gpl
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
                  href="https://twitter.com/BitwebBTE"
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
              <p>
                <a href="mailto:bitwebcore@gmail.com">
                  bitwebcore@gmail.com
                </a>
              </p>
              <p>Mraksoll:
                <a href="mailto:mraksoll4@gmail.com">
                  mraksoll4@gmail.com
                </a>
              </p>
              <p>Jcchain:
                <a href="mailto:jcchain999@gmail.com">
                  jcchain999@gmail.com
                </a>
              </p>
            </div>
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
      <Foundation />
    </Suspense>
  );
}

export default HoF;
