import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Loader from "../Loader/Loader";
import "./Menu.scss";
import { getCurrentFlag, getCurrentLanguage } from "../../helpers/Language";

function Menu() {
  console.log(getCurrentLanguage());
  const { t } = useTranslation();
  const triggerHeight = 100;
  const [isFixed, setIsFixed] = useState(window.scrollY > triggerHeight);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > triggerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });

    if (window.scrollY > triggerHeight) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, []);

  async function toggleMenu() {
    await setIsOpen(!isOpen);
  }

  function menuClass() {
    return classNames({
      menu: true,
      "menu--fixed": isFixed,
      "menu--open": isOpen,
    });
  }

  return (
    <>
      <div className="menu-trigger" onClick={toggleMenu}>
        <img src="/img/menu.png" alt="" />
      </div>
      <nav className={menuClass()}>
        <div className="menu__close" onClick={toggleMenu}>
          <img src="/img/back.png" alt="" />
        </div>
        <div className="container">
          {isFixed && (
            <Link to="/">
              <img
                src="/img/logo-menu-white.svg"
                alt="Peercoin"
		height="50"
                className="menu__logo"
              />
            </Link>
          )}
          <ul className="menu__main">
            <li>
              <Link to="/">{t("menuComponent.links.home.title")}</Link>
            </li>
            <li>
              <a href="/#getstarted">
                {t("menuComponent.links.getStarted.title")}
              </a>
            </li>
            <li>
              <Link to="/resources">
                {t("menuComponent.links.resources.title")}
              </Link>
            </li>
            <li>
              <Link to="/wallet">
                <span>{t("menuComponent.links.wallet.title")}</span>
              </Link>
            </li>
            <li>
              <Link to="/roadmap">
                <span>{t("menuComponent.links.roadmap.title")}</span>
              </Link>
            </li>
            <li>
                <Link to="/about">
                  {t("menuComponent.links.project.peercoinFoundation")}
                </Link>
            </li>
            <li>
              <span>
                <img
                  className="menu-flag"
                  src={`/img/flags/${getCurrentFlag()}.svg`}
                  alt="en-US"
                />
              </span>
              <img src="/img/icon-menu-arrow-down.svg" alt="" />
              <ul className="menu__main__submenu menu__main__submenu--small">
                <li onClick={() => i18n.changeLanguage("en-US")}>
                  <img
                    className="menu-flag"
                    src="img/flags/US.svg"
                    alt="en-US"
                  />
                </li>
                <li onClick={() => i18n.changeLanguage("cn")}>
                  <img className="menu-flag" src="img/flags/CN.svg" alt="cn" />
                </li>
                <li onClick={() => i18n.changeLanguage("es")}>
                  <img className="menu-flag" src="img/flags/ES.svg" alt="es" />
                </li>
                <li onClick={() => i18n.changeLanguage("fr")}>
                  <img className="menu-flag" src="img/flags/FR.svg" alt="fr" />
                </li>
                <li onClick={() => i18n.changeLanguage("kr")}>
                  <img className="menu-flag" src="img/flags/KR.svg" alt="kr" />
                </li>
                <li onClick={() => i18n.changeLanguage("ru")}>
                  <img className="menu-flag" src="img/flags/RU.svg" alt="ru" />
                </li>
                <li onClick={() => i18n.changeLanguage("jp")}>
                  <img className="menu-flag" src="img/flags/JP.svg" alt="jp" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Menu />
    </Suspense>
  );
}

export default HoF;
