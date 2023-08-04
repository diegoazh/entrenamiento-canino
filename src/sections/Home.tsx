import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className={`h-2/6 p-28 text-justify ${styles.homeSection}`}
      >
        <p>
          Culpa qui do ea pariatur minim tempor. Deserunt adipisicing do ipsum
          amet. Aute reprehenderit sint ad qui nulla sit proident aute
          consectetur. Sint nisi id ex ea cillum id. Aliquip exercitation fugiat
          id minim. Aliqua incididunt esse in reprehenderit exercitation laboris
          pariatur dolore laborum aliquip. Ut laborum labore ullamco voluptate
          esse dolore mollit.
        </p>
        <p>
          Laboris consectetur proident laboris ea magna quis dolore proident
          adipisicing do culpa magna. Commodo fugiat mollit cupidatat duis
          pariatur. Excepteur nulla consectetur eu et nulla reprehenderit nulla
          commodo culpa laboris officia Lorem.
        </p>
        <p>
          Consequat exercitation ex esse aliquip nisi nulla exercitation eiusmod
          est eu. Tempor proident in nulla duis. Adipisicing enim id Lorem
          velit. Est dolor nisi voluptate voluptate ullamco irure do nisi et.
          Non sint amet ut ad. Reprehenderit enim officia sunt ex consectetur
          anim exercitation enim in consectetur in. Minim tempor duis voluptate
          ad.
        </p>
        <p>
          Dolore deserunt non sit labore Lorem qui et. Ex aliquip amet in
          incididunt et deserunt. Sunt in consequat sit tempor consequat
          voluptate cupidatat laboris est deserunt qui pariatur eu ipsum.
          Consectetur et Lorem deserunt consectetur dolore labore cupidatat esse
          magna aliquip do. Minim dolor veniam cupidatat tempor aliqua sint anim
          labore aute sint esse minim. Est ad elit nulla veniam fugiat.
        </p>
        <p>
          Amet ullamco voluptate occaecat deserunt fugiat consequat commodo do
          officia ad. Sint mollit labore do reprehenderit deserunt nisi duis
          anim ullamco est eiusmod ex. Consectetur ea laborum exercitation minim
          reprehenderit do reprehenderit quis pariatur nisi ad reprehenderit
          reprehenderit ipsum. Adipisicing esse ad sint occaecat elit nisi nulla
          proident tempor laborum laborum. Sunt dolore esse enim enim deserunt
          laboris.
        </p>
      </section>
      <div className={styles.homeContainer}>
        <div className={styles.homeWave}></div>
      </div>
    </>
  );
};
