import { useTranslation } from 'react-i18next';
import styles from './Contact.module.scss';

export const Contact = () => {
  const { t } = useTranslation();
  const url = 'https://wa.me';

  const whatsAppContactHandler = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const finalUrl = `${url}/${t('contact.whatsAppNumber')}?text=${encodeURI(
      t('contact.whatsAppMessage')
    )}`;

    window.open(finalUrl);
  };
  const instragramContactHandler = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const url = t('contact.instagramUrl');

    window.open(url);
  };
  const facebookContactHandler = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const url = t('contact.facebookUrl');

    window.open(url);
  };

  return (
    <>
      <section id="contact" className={`h-1/6 p-28 ${styles.contactSection}`}>
        <h2 className="text-4xl text-center bold mb-8">{t('contact.title')}</h2>
        <div className="flex width-full justify-around items-start py-20">
          <i
            className="pi pi-whatsapp text-8xl cursor-pointer"
            onClick={whatsAppContactHandler}
          ></i>
          <i
            className="pi pi-instagram text-8xl cursor-pointer"
            onClick={instragramContactHandler}
          ></i>
          <i
            className="pi pi-facebook text-8xl cursor-pointer"
            onClick={facebookContactHandler}
          ></i>
        </div>
      </section>
      <section
        className={`h-1/6 flex flex-col items-center justify-center pb-10 ${styles.contactCopyRightSection}`}
      >
        <div className={styles.skewed}></div>
        <p className="block text-center mb-8">
          {t('contact.copyRightText', { year: new Date().getFullYear() })}
        </p>
        <p className="block text-center">
          Powered by{' '}
          <a
            href="http://diei.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            DIEI
          </a>
        </p>
      </section>
    </>
  );
};
