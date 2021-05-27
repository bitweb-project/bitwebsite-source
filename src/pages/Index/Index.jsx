import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';
import renderHTML from 'react-render-html';
import './Index.scss';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';

function Index() {

  const { t } = useTranslation();
  const [ cs1, setCs1 ] = useState(true);
  const [ cs2, setCs2 ] = useState(false);
  const [ cs3, setCs3 ] = useState(false);
  const [ cs4, setCs4 ] = useState(false);
  const [ cs5, setCs5 ] = useState(false);
  const [ cs6, setCs6 ] = useState(false);

  const sets = [setCs1, setCs2, setCs3, setCs4, setCs5, setCs6];


  async function handleOpen(num) {
    sets.forEach((set, i) => {
      if(i === num) {
        set(true);
      } else {
        set(false);
      }
    });
  }

  return (
    <>
    <Menu />
    <div className="Index hero">
      <img src="/img/logo-white.svg" alt="Peercoin Logo" width="220" />
      <h1 className="hero__title">{t('indexPage.title1')}</h1>
      <h1 className="hero__title">{t('indexPage.title')}</h1>
      <p className="hero__description">
      {t('indexPage.description')}
      </p>
    </div>
    <div className="main">
      <div className="container">

        <section className="home-description">
          <div className="home-description__text">
            <h2 className="home-description__text__title">{t('indexPage.efficientEnergyTitle')}</h2>
            <p>{renderHTML(t('indexPage.efficientEnergyText1'))}</p>
            <p>{renderHTML(t('indexPage.efficientEnergyText2'))}</p>
            <p>{renderHTML(t('indexPage.efficientEnergyText3'))}</p>
          </div>
          <img className="home-description__img" src="/img/animations/efficient-and-sustainable.svg" alt="" />
        </section>
        <section className="home-description">
          <img className="home-description__img" src="/img/animations/user-driven-governance.svg" alt="" />
          <div className="home-description__text home-description__text--left">
            <h2 className="home-description__text__title">{t('indexPage.userGovernanceTitle')}</h2>
            <p>{renderHTML(t('indexPage.userGovernanceText1'))}</p>
            <p>{renderHTML(t('indexPage.userGovernanceText2'))}</p>
            <p>{renderHTML(t('indexPage.userGovernanceText3'))}</p>
          </div>
        </section>
        <section className="home-description">
          <div className="home-description__text">
            <h2 className="home-description__text__title">{t('indexPage.trustlessTitle')}</h2>
            <p>{renderHTML(t('indexPage.trustlessText1'))}</p>
            <p>{renderHTML(t('indexPage.trustlessText2'))}</p>
            <p>{renderHTML(t('indexPage.trustlessText3'))}</p>
          </div>
          <img className="home-description__img" src="/img/animations/pos-security-and-distribution.svg" alt="" />
        </section>
        <section className="home-description">
          <img className="home-description__img" src="/img/animations/reliable-store-of-value.svg" alt="" />
          <div className="home-description__text home-description__text--left">
            <h2 className="home-description__text__title">{t('indexPage.fairDistributionTitle')}</h2>
            <p>{renderHTML(t('indexPage.fairDistributionText1'))}</p>
            <p>{renderHTML(t('indexPage.fairDistributionText2'))}</p>
            <p>{renderHTML(t('indexPage.fairDistributionText3'))}</p>
            <p>{renderHTML(t('indexPage.fairDistributionText4'))}</p>
          </div>
        </section>
      </div>
      <div className="main main--green">
      <div className="anchor" data-id="getstarted"></div>
        <div className="container">
          <div className="timeline">
            <h2 className="timeline__title">{t('indexPage.getStartedTitle')}</h2>
            <div className="timeline__body">
              <Collapsible onOpening={() => handleOpen(1) } open={cs1} trigger={<div className="timeline__body__section"><img src="/img/icons/wallets.png" alt="" /> {t('indexPage.collapsables.walletTitle')}</div>}>
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <p>{renderHTML(t('indexPage.collapsables.walletText1'))}</p>
                    <p>{renderHTML(t('indexPage.collapsables.walletText2'))}</p>
                    <p>{renderHTML(t('indexPage.collapsables.walletText3'))}</p>
                  </div>
                  <div className="timeline__body__content__img">
                    <img src="/img/icons/sidecard-wallet.png" alt="" />
                  </div>
                </div>
              </Collapsible>
              <Collapsible onOpening={() => handleOpen(2) } open={cs2} trigger={<div className="timeline__body__section"><img src="/img/icons/pickaxe.png" alt="" /> {t('indexPage.collapsables.mineTitle')}</div>}>
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <p>{renderHTML(t('indexPage.collapsables.mineText1'))}</p>
                  </div>
                  <div className="timeline__body__content__img">
                    <img src="/img/icons/sidecard-mining.png" alt="" />
                  </div>
                </div>
              </Collapsible>
              <Collapsible onOpening={() => handleOpen(3) } open={cs3} trigger={<div className="timeline__body__section"><img src="/img/icons/community_white.png" alt="" /> {t('indexPage.collapsables.communityTitle')}</div>}>
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <p>{renderHTML(t('indexPage.collapsables.communityText1'))}</p>
                  </div>
                  <div className="timeline__body__content__img">
                    <img src="/img/icons/sidecard-community.png" alt=""/>
                  </div>
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
      </div>
    </div>
    <Footer />
    </>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Index />
    </Suspense>
  );
}

export default HoF;