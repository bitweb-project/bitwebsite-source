import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import "./Communityfoundation.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Communityfoundation() {
  const { t } = useTranslation();

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t("Communityfoundation.title")}</h1>
        <p className="hero__description">{t("Communityfoundation.description")}</p>
      </div>

      <div className="main text-sections2">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green">
                {t("foundationPage.communityFoundation")}
              </h2>
              <p>
                  <strong>BTE</strong> {t("foundationPage.Address2")}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://explorer.bitwebcore.net/address/web1qgcdle8dkhla6x5pt7mar47hksyn5gezcay99ke"
                >
                  {" "}
                  web1qgcdle8dkhla6x5pt7mar47hksyn5gezcay99ke
                </a>
                <br />
                  <strong>TRX</strong> {t("foundationPage.Address2")}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tronscan.org/#/address/TMMRVMqQ4hAJqP2ZxkGz572o5UwYePcTgc"
                >
                  {" "}
                  TMMRVMqQ4hAJqP2ZxkGz572o5UwYePcTgc
                </a>
                <br />
                  <strong>TRC20 USDT</strong> {t("foundationPage.Address2")}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tronscan.org/#/address/TMMRVMqQ4hAJqP2ZxkGz572o5UwYePcTgc"
                >
                  {" "}
                  TMMRVMqQ4hAJqP2ZxkGz572o5UwYePcTgc
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
      <Communityfoundation />
    </Suspense>
  );
}

export default HoF;
