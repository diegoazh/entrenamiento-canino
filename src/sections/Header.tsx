import styles from './Header.module.scss';

import { ReactComponent as Logo } from '../assets/entrenamiento-canino.svg';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        id="menu"
        className={`flex justify-between items-center h-36 px-20 ${styles.headerMenuContainer}`}
      >
        <div
          className={`flex justify-center w-1/4 ${styles.headerMenuLogoContainer}`}
        >
          <Logo
            className={`h-56 w-56 relative top-5 z-50 ${styles.headerMenuLogoShadow}`}
          />
        </div>
        <div className={`w-3/4 ${styles.headerMenu}`}>
          <ul className="flex justify-around items-start">
            <li className="">
              <a className="text-2xl" href="#home">
                {t('menu.home')}
              </a>
            </li>
            <li className="">
              <a className="text-2xl" href="#training">
                {t('menu.services')}
              </a>
            </li>
            <li className="">
              <a className="text-2xl" href="#about">
                {t('menu.about')}
              </a>
            </li>
            <li className="">
              <a className="text-2xl" href="#contact">
                {t('menu.contact')}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.headerContainer}>
        <div className={styles.headerWave}></div>
      </div>
    </>
  );
};
