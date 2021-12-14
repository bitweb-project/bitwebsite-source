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
            href="#communities"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.actions.action3")}
          </a>
          <a
            href="#whitepaper"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.actions.action4")}
          </a>
          <a
            href="#graphics"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.actions.action5")}
          </a>
          <a
            href="#partner"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.actions.action6")}
          </a>
        </div>
      </div>

      <div className="main">
        <div className="anchor" data-id="exchanges"></div>
        <div className="container">
          <h2 className="title title--green">
            {t("resourcesPage.exchangesTitle")}
          </h2>
          <p className="description">{t("resourcesPage.exchangesText")}</p>
          <div className="blocks-list">
            <a
              href="https://www.coinealpro.com/trade/BTE-CNV"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Coineal Pro
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/exchanges/coineal.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                KYC required
              </div>
            </a>
            <a
              href="https://atomicdex.io"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Atomic DEX
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/exchanges/atomicdex.png"
                alt=""
              />
            </a>
            <a href="https://vindax.com/exchange-base.html?symbol=BTE_USDT" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BTE/USDT</h4>
              <img
                className="blocks-list__block__img"
                src="/img/exchanges/vdx.svg"
                alt=""
              />
            </a>
            <a href="https://vindax.com/exchange-base.html?symbol=BTE_BTC" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BTE/BTC</h4>
              <img
                className="blocks-list__block__img"
                src="/img/exchanges/vdx.svg"
                alt=""
              />
            </a>
            <a href="https://www.exbitron.com/trading/bteusdt" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BTE/USDT</h4>
              <img
                className="blocks-list__block__img"
                src="/img/exchanges/exbitron.png"
                alt=""
              />
            </a>
            <a href="https://www.exbitron.com/trading/btebtc" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BTE/BTC</h4>
              <img
                className="blocks-list__block__img"
                src="/img/exchanges/exbitron.png"
                alt=""
              />
            </a>
            <a href="https://www.exbitron.com/trading/btetrx" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BTE/TRX</h4>
              <img
                className="blocks-list__block__img"
                src="/img/exchanges/exbitron.png"
                alt=""
              />
            </a>
            <a
              href="https://docs.scalaris.info/scalarisdx/setup"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Scalaris DX
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/sla.png"
                alt=""
              />
            </a>
            <a
              href="https://t.me/jcchain2"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">Add Exchanges</h4>
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
            <a
              href="https://openchains.info/coin/bitweb/blocks"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">Open Chains</h4>
              <img
                className="blocks-list__block__img"
                src="/img/explorers/openchains.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>


      <div className="main">
        <div className="anchor" data-id="communities"></div>
        <div className="container">
          <h2 className="title title--green">
            {t("resourcesPage.communityTitle")}
          </h2>
          <div className="blocks-list">
            <a href="https://community.bitwebcore.org/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Forum</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/forum.png"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/BitwebBTE"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">Twitter</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/twitter.png"
                alt=""
              />
            </a>
            <a href="https://t.me/bitweb_en" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Telegram_English</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/tg.png"
                alt=""
              />
            </a>
            <a href="https://t.me/bitweb_rus" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Telegram_Russia</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/tg.png"
                alt=""
              />
            </a>
            <a href="https://t.me/bitweb" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Telegram_Chinese</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/tg.png"
                alt=""
              />
            </a>
            <a href="https://discord.gg/jQdttwgsJa" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Discord</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/discord.png"
                alt=""
              />
            </a>
            <a
              href="https://bitcointalk.org/index.php?topic=5338488.0"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">BitcoinTalk</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/bitcointalk.png"
                alt=""
              />
            </a>
            <a
              href="https://www.reddit.com/r/BitwebBTE"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">Reddit</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/reddit.png"
                alt=""
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCLZx6FcnBRGO-e9NLHTmtbw"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">YouTuBe</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/youtube.png"
                alt=""
              />
            </a>
            <a
              href="https://github.com/bitweb-project"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">GitHub</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/github.png"
                alt=""
              />
            </a>
          </div>
        </div>
          <h2 className="title title--green">
            Unofficial community
          </h2>
          <p className="description">Please take care to protect your cryptocurrency</p>
          <div className="blocks-list">
            <a href="https://jq.qq.com/?_wv=1027&k=OreLfke5" className="blocks-list__block">
              <h4 className="blocks-list__block__title">QQ group 1</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/China-qq.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                746470547
              </div>
            </a>
            <a href="#" className="blocks-list__block">
              <h4 className="blocks-list__block__title">QQ group 2</h4>
              <img
                className="blocks-list__block__img"
                src="/img/group/China-qq.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                970332590
              </div>
            </a>
            <a
              href="https://t.me/jcchain2"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">Add group</h4>
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

      <div className="main">
        <div className="anchor" data-id="graphics"></div>
        <div className="container">
          <h2 className="title title--green">
            {t("resourcesPage.graphicsTitle")}
          </h2>
          <div className="blocks-list blocks-list--grey">
            <div className="blocks-list__block">
              <img
                className="blocks-list__block__img"
                src="/img/logos/png/bitweb256px.png"
                alt=""
              />
              <a href="/img/logos/png/bitweb16px.png">
                <span>16px.png</span>
              </a>
              <a href="/img/logos/png/bitweb32px.png">
                <span>32px.png</span>
              </a>
              <a href="/img/logos/png/bitweb64px.png">
                <span>64px.png</span>
              </a>
              <a href="/img/logos/png/bitweb80px.png">
                <span>80px.png</span>
              </a>
              <a href="/img/logos/png/bitweb128px.png">
                <span>128px.png</span>
              </a>
              <a href="/img/logos/png/bitweb200px.png">
                <span>200px.png</span>
              </a>
              <a href="/img/logos/png/bitweb256px.png">
                <span>256px.png</span>
              </a>
              <a href="/img/logos/png/bitweb512px.png">
                <span>512px.png</span>
              </a>
              <a href="/img/logos/png/bitweb1024px.png">
                <span>1024px.png</span>
              </a>
            </div>
            <div className="blocks-list__block">
              <img
                className="blocks-list__block__img"
                src="/img/logos/svg/bitweb256px.svg"
                alt=""
              />
              <a href="/img/logos/svg/bitweb16px.svg">
                <span>16px.svg</span>
              </a>
              <a href="/img/logos/svg/bitweb32px.svg">
                <span>32px.svg</span>
              </a>
              <a href="/img/logos/svg/bitweb64px.svg">
                <span>64px.svg</span>
              </a>
              <a href="/img/logos/svg/bitweb80px.svg">
                <span>80px.svg</span>
              </a>
              <a href="/img/logos/svg/bitweb128px.svg">
                <span>128px.svg</span>
              </a>
              <a href="/img/logos/svg/bitweb200px.svg">
                <span>200px.svg</span>
              </a>
              <a href="/img/logos/svg/bitweb256px.svg">
                <span>256px.svg</span>
              </a>
              <a href="/img/logos/svg/bitweb512px.svg">
                <span>512px.svg</span>
              </a>
              <a href="/img/logos/svg/bitweb1024px.svg">
                <span>1024px.svg</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
	  <div className="anchor" data-id="partner"></div>
	    <div className="container">
		<h2 className="title title--green">
		  {t("foundationPage.partnerTitle")}
		</h2>
	    <div className="blocks-list">
            <a
              href="https://scalaris.info/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Scalaris Project - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/sla.png"
                alt=""
              />
            </a>
            <a
              href="https://widecoin.org/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Widecoin Project - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/wcn.png"
                alt=""
              />
            </a>
            <a
              href="https://miningpoolstats.stream/bitweb"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Mining pool stats - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/miningpools.jpg"
                alt=""
              />
            </a>
            <a
              href="https://cointomine.today/calculator/coin/BTE/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Coin To Mine - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/cointomine.png"
                alt=""
              />
            </a>
            <a
              href="https://bitcourier.co.uk/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                BitCourier Media - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/bitcour.png"
                alt=""
              />
            </a>
            <a
              href="https://www.trustpilot.com/review/bitwebcore.org"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Trustpilot - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/trustpilot.png"
                alt=""
              />
            </a>
            <a
              href="https://ltfn.scalaris.info/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                LitecoinFinance - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/ltfn.png"
                alt=""
              />
            </a>
            <a
              href="https://coinpaprika.com/coin/bte-bitweb/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Coinpaprika - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/coinpaprika.png"
                alt=""
              />
            </a>
            <a
              href="https://www.coingecko.com/en/coins/bitweb"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Coingecko - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/coingecko.png"
                alt=""
              />
            </a>
            <a
              href="https://blockspot.io/coin/bitweb/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Blockspot.io - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/blockspot.png"
                alt=""
              />
            </a>
            <a
              href="https://nomics.com/assets/bte3-bitweb"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Nomics.com - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/nomics.png"
                alt=""
              />
            </a>
            <a
              href="https://dexplorer.io/coin/BTE"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Dexplorer.io - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/dexp.png"
                alt=""
              />
            </a>
            <a
              href="https://coincost.net/en/currency/bitweb"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Coincost.net - partner
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/coincost.png"
                alt=""
              />
            </a>
            <a
              href="#"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                Jige - investor
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/partner/jige.jpg"
                alt=""
              />
            </a>
            <a
              href="https://t.me/jcchain2"
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
      <Resources />
    </Suspense>
  );
}

export default HoF;
