import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useTranslation } from 'react-i18next';
import './Footer.scss';
import Loader from '../Loader/Loader';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="main main--grey main--no_bottom">
      <div className="footer-wrapper">
        <div className="footer-wrapper__white_bg"></div>
        <div className="container">
          <footer className="footer">
            <div className="footer__twitter">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="BitwebBTE"
                options={{width: 365, height: 360}}
              />
            </div>
			<img src="/img/table.png"  width="720" height="360" alt="" />
          </footer>
        </div>
        <div className="footer-wrapper__copyright">{t('footerComponent.copyright.copyright')} {(new Date()).getFullYear()} {t('footerComponent.copyright.rights')}</div>
      </div>
    </div>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Footer />
    </Suspense>
  );
}

export default HoF;
