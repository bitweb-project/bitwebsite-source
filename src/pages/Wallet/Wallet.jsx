import React, { Suspense, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Collapsible from "react-collapsible";
import renderHTML from "react-render-html";
import "./Wallet.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Wallet() {
  const { t } = useTranslation();
  const [ cs1, setCs1 ] = useState(true);
  const [ cs2, setCs2 ] = useState(false);
  const [ cs3, setCs3 ] = useState(false);
  const [ cs4, setCs4 ] = useState(false);
  const [ cs5, setCs5 ] = useState(false);
  const [ cs6, setCs6 ] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/wallets.json")
      .then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      });
  }, []);

  async function handleOpen(num) {
    if (num === 0) {
      setCs1(true);
      setCs2(false);
      setCs3(false);
    }

    if (num === 1) {
      setCs1(false);
      setCs2(true);
      setCs3(false);
    }

    if (num === 2) {
      setCs1(false);
      setCs2(false);
      setCs3(true);
    }
  }

  function getFilename(os) {
    if (data.length === 0) {
      return "";
    }

    const osData = data.filter((item) => item.os === os)[0];
    return osData.link.split("/")[osData.link.split("/").length - 1];
  }

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t("walletPage.title")}</h1>
        <p className="hero__description">{t("walletPage.description")}</p>
        <div className="hero__actions">
          <a
            href="#wallets"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("walletPage.actions.action4")}
          </a>
          <a
            href="#install"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("walletPage.actions.action1")}
          </a>
          <a
            href="#paperwallet"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("walletPage.actions.action2")}
          </a>
        </div>
      </div>

      <div className="main text-sections">
        <div className="container"  data-id="wallets">
          <h2 className="title title--green">{t("walletPage.title")}</h2>
          <div className="desktop-downloads">
            <div className="desktop-downloads__items">
              {data.length > 0 &&
                data.map((item) => (
                  <div className="desktop-downloads__items__item">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="desktop-downloads__items__item__title">
                        {item.os}
                      </div>
                      <img
                        className="desktop-downloads__items__item__img"
                        src={item.img}
                        alt=""
                      />
                    </a>
                    <div className="desktop-downloads__items__item__checksum">
                      <span>Checksum (SHA-256):</span>
                      {item.checksum}
                    </div>
                  </div>
                ))}
            </div>
            <div className="desktop-downloads__img">
              <img src="/img/wallets_splash.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="main main--dark">
        <div className="anchor" data-id="install"></div>
        <div className="container">
          <h1 className="title title--white title--left">
	  <img src="/img/electrum/electrum.png" alt="" height="100"/>
            {t("walletPage.installationTitle")}
          </h1>

          <div className="timeline timeline--dark">
            <div className="timeline__body">
              <Collapsible
                onOpening={() => handleOpen(1)}
                open={cs1}
                trigger={
                  <div className="timeline__body__section">
		  <img src="/img/electrum/os_windows.gif" alt=""/>
                    {t("walletPage.walletWindows")}
                  </div>
                }
              >
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>{t("walletPage.sectionWindows.title1")}</h2>
                    <ul>
                      <li>
                        {renderHTML(t("walletPage.sectionWindows.text1"))}
                      </li>
                    </ul>
                    <h2>{t("walletPage.sectionWindows.title2")}</h2>
                    <ul>
                      <li>
                        {renderHTML(t("walletPage.sectionWindows.text2"))}
                      </li>
                    </ul>
                    <h2>{t("walletPage.sectionWindows.title3")}</h2>
                    <ul>
                      <li>
                        {renderHTML(t("walletPage.sectionWindows.text3"))}
                      </li>
                    </ul>
                  </div>
                </div>
              </Collapsible>
              <Collapsible
                onOpening={() => handleOpen(2)}
                trigger={
                  <div className="timeline__body__section">
		  <img src="/img/electrum/os_apple.png" alt="" />
                    {t("walletPage.walletMac")}
                  </div>
                }
                open={cs2}
              >
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>{t("walletPage.sectionMac.title1")}</h2>
                    <ul>
                      <li>{renderHTML(t("walletPage.sectionMac.text1"))}</li>
                    </ul>
                  </div>
                </div>
              </Collapsible>
              <Collapsible
                onOpening={() => handleOpen(3)}
                trigger={
                  <div className="timeline__body__section">
		  <img src="/img/electrum/os_linux.gif" alt="" />
                    {t("walletPage.walletLinux")}
                  </div>
                }
                open={cs3}
              >
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>{t("walletPage.sectionLinux.title1")}</h2>
                    <ul>
                      <li>{renderHTML(t("walletPage.sectionLinux.text1"))}</li>
                    </ul>
                  </div>
                </div>
              </Collapsible>
              <Collapsible
                onOpening={() => handleOpen(4)}
                trigger={
                  <div className="timeline__body__section">
		  <img src="/img/electrum/android_icon.png" alt="" />
                    {t("walletPage.walletAndroid")}
                  </div>
                }
                open={cs4}
              >
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>{t("walletPage.sectionAndroid.title1")}</h2>
                    <ul>
                      <li>{renderHTML(t("walletPage.sectionAndroid.text1"))}</li>
                    </ul>
                    <h2>{t("walletPage.sectionAndroid.title2")}</h2>
                    <ul>
                      <li>{renderHTML(t("walletPage.sectionAndroid.text2"))}</li>
                    </ul>
                  </div>
                </div>
              </Collapsible>
              <Collapsible
                onOpening={() => handleOpen(5)}
                trigger={
                  <div className="timeline__body__section">
		  <img src="/img/electrum/tar-gz.png" alt="" />
                    {t("walletPage.walletPython")}
                  </div>
                }
                open={cs5}
              >
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>{t("walletPage.sectionPython.title1")}</h2>
                    <ul>
                      <li>{renderHTML(t("walletPage.sectionPython.text1"))}</li>
                    </ul>
                    <h2>{t("walletPage.sectionPython.title2")}</h2>
                    <ul>
                      <li>{renderHTML(t("walletPage.sectionPython.text2"))}</li>
                      <li>{renderHTML(t("walletPage.sectionPython.text3"))}</li>
                      <li>{renderHTML(t("walletPage.sectionPython.text4"))}</li>
                    </ul>
                  </div>
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="anchor" data-id="paperwallet"></div>
        <div className="container">
          <h2 className="title title--green">
            {t("walletPage.paperWalletTitle")}
          </h2>
          <div className="blocks-list">
            <a
              href="https://paperwallet.bitwebcore.org/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                {t("walletPage.paperWalletSubtitle1")}
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/explorers/bitwebexp.png"
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
                src="/img/explorers/bitwebexp.png"
                alt=""
              />
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
      <Wallet />
    </Suspense>
  );
}

export default HoF;
