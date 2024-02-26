import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';
import aboutImage from '../assets/about.webp';
import aboutImage2 from '../assets/about2.webp';

export const About = () => {
  const { t } = useTranslation();

  const AddImageComponent = ({
    html,
    index,
  }: {
    html: JSX.Element;
    index: number;
  }) => {
    return index === 0 ? (
      <>
        {html}{' '}
        <img
          src={aboutImage2}
          alt={t('about.imageAlt2')}
          className="w-1/5 border-4 border-solid border-yellow-500 rounded float-right ml-4"
        />
      </>
    ) : (
      html
    );
  };

  const HtmlContentComponent = ({ content }: { content: string }) => {
    return (
      <>
        {content.split('\n').map((p, i) => {
          const html = <p className="mb-4 text-justify">{p}</p>;

          return <AddImageComponent key={i} index={i} html={html} />;
        })}
      </>
    );
  };

  return (
    <>
      <section id="about" className={`p-28 ${styles.aboutSection}`}>
        <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
        <img
          src={aboutImage}
          alt={t('about.imageAlt')}
          className="w-1/5 border-4 border-solid border-yellow-500 rounded float-left mr-4"
        />
        <HtmlContentComponent content={t('about.content')} />
      </section>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutWave}></div>
      </div>
    </>
  );
};
