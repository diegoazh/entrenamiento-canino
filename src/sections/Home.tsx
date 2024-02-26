import { useTranslation } from 'react-i18next';
import styles from './Home.module.scss';

export const Home = () => {
  const { t } = useTranslation();

  const HtmlContentComponent = ({ content }: { content: string }) => {
    return content.split('\n').map((p) => {
      return <p className="mb-4 text-justify">{p}</p>;
    });
  };

  return (
    <>
      <section
        id="home"
        className={`p-28 text-justify ${styles.homeSection}`}
      >
        <HtmlContentComponent content={t('home.content')} />
      </section>
      <div className={styles.homeContainer}>
        <div className={styles.homeWave}></div>
      </div>
    </>
  );
};
