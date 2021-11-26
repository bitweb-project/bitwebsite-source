import React, {useEffect, useState, Suspense} from 'react';
import { useTranslation } from 'react-i18next';
import './LatestNews.scss';
import Loader from '../Loader/Loader';

function LatestNews() {
  const { t } = useTranslation();
  return (
    <div className="latest-news">
        <a href="https://bitcourier.co.uk/blog/bitweb" className="post" key="" target="_blank" rel="noopener noreferrer">
          <img src="/img/news/bitweb.jpg" alt="" className="post__img" />
          <h3 className="post__title">
	  Bitweb Review 2021 -- New Open Source P2P Money
	  </h3>
          <span href="https://bitcourier.co.uk/blog/bitweb" className="post__button">{t('latestNewsComp.readMore')}</span>
        </a>
        <a href="https://bitcourier.co.uk/news/bitweb-interview" className="post" key="" target="_blank" rel="noopener noreferrer">
          <img src="/img/news/bitweb.jpg" alt="" className="post__img" />
          <h3 className="post__title">
	  An Interview with Vitalik Mraksoll — A Chief Developer behind Bitweb
	  </h3>
          <span href="https://bitcourier.co.uk/news/bitweb-interview" className="post__button">{t('latestNewsComp.readMore')}</span>
        </a>
    </div>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <LatestNews />
    </Suspense>
  );
}

export default HoF;
