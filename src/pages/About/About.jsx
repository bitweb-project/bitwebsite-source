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
	      <img src="/img/photos/photo3.png" alt="" height="90"/>
              <p>{t("foundationPage.missionStatementText2")}</p>

              <h2 className="title title--green title--left">
                {t("foundationPage.technicalSupportTitle")}
              </h2>
              <p>{t("foundationPage.technicalSupportText")}</p>
              <p>
                  <strong>BTE</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://explorer.bitwebcore.org/address/web1q48wnxkm0xfz8jhkv0555m2pxqed39fglzs5gpl"
                >
                  {" "}
                  web1q48wnxkm0xfz8jhkv0555m2pxqed39fglzs5gpl
                </a>
                <br />
                  <strong>BTC</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.blockchain.com/ru/btc/address/bc1q2uq8qdys5n8s555tahqe0lfelvwqn45hpuz7ed"
                >
                  {" "}
                  bc1q2uq8qdys5n8s555tahqe0lfelvwqn45hpuz7ed
                </a>
                <br />
                  <strong>DOGE</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://blockchair.com/dogecoin/address/DCFbm2FgbVJe1vfk6pTBTz3jHjFZAV568E"
                >
                  {" "}
                  DCFbm2FgbVJe1vfk6pTBTz3jHjFZAV568E
                </a>
                <br />
                  <strong>ETH</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://etherscan.io/address/0x900cc73447606e2151f0fd89f908e5dd0ab2a744"
                >
                  {" "}
                  0x900cc73447606E2151F0fD89F908e5dD0Ab2a744
                </a>
                <br />
                  <strong>USDT ERC20</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://etherscan.io/address/0x900cc73447606e2151f0fd89f908e5dd0ab2a744"
                >
                  {" "}
                  0x900cc73447606E2151F0fD89F908e5dD0Ab2a744
                </a>
                <br />
                  <strong>BNB</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bscscan.com/address/0x900cc73447606e2151f0fd89f908e5dd0ab2a744"
                >
                  {" "}
                  0x900cc73447606E2151F0fD89F908e5dD0Ab2a744
                </a>
                <br />
                  <strong>TRC20 USDT</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t/holders"
                >
                  {" "}
                  TSQSNqzmJnZvraatd421pVSh1LyJAd77cY
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
      
      <div className="main">
	  <div className="anchor" data-id="partner"></div>
	    <div className="container">
		<h2 className="title title--green">
		  Donors
		</h2>
	    <div className="blocks-list">
            <a
              href="https://forms.gle/qb9nP6rCc1xBeZE26"
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
