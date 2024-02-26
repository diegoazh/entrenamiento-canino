import styles from './Training.module.scss';
import { Card } from 'primereact/card';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { useTranslation } from 'react-i18next';
import dogsImage from '../assets/adiestramiento-canino.webp';
import puppiesImage from '../assets/adiestramiento-cachorros.webp';
import aggressiveImage from '../assets/adiestramiento-agresividad.webp';
import tutorImage from '../assets/adiestramiento-tutores.webp';
import workImage from '../assets/adiestramiento-trabajo.webp';

interface IService {
  title: string;
  image: string;
  description: string;
}

export const Training = () => {
  const { t } = useTranslation();

  const services: IService[] = [
    {
      title: 'training.dogs.title',
      image: dogsImage,
      description: 'training.dogs.description',
    },
    {
      title: 'training.puppies.title',
      image: puppiesImage,
      description: 'training.puppies.description',
    },
    {
      title: 'training.aggressive.title',
      image: aggressiveImage,
      description: 'training.aggressive.description',
    },
    {
      title: 'training.work.title',
      image: workImage,
      description: 'training.work.description',
    },
    {
      title: 'training.tutor.title',
      image: tutorImage,
      description: 'training.tutor.description',
    },
  ];

  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: '0',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '0',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '0',
      numVisible: 2,
      numScroll: 2,
    },
  ];

  const HtmlContentComponent = ({ content }: { content: IService }) => {
    return (
      <p className="my-4 text-justify">
                  <img
            src={content.image}
            alt={content.title}
            className="w-6/12 border-4 border-solid border-yellow-500 rounded float-left m-4"
          />
        {t(content.description).split('\n').map((p) => {
          return (
            <>
              {p}
              <br />
            </>
          );
        })}
      </p>
    );
  };

  const carouselTemplate = (service: IService) => {
    return (
      <Card
        title={t(service.title)}
        className={`mr-20 ${styles.trainingCardWidth}`}
      >
        <div className="flex justify-center items-start">
          <HtmlContentComponent content={service} />
        </div>
      </Card>
    );
  };

  return (
    <>
      <section id="training" className={`p-28 ${styles.trainingSection}`}>
        <Carousel
          value={services}
          itemTemplate={carouselTemplate}
          numVisible={2}
          numScroll={2}
          responsiveOptions={responsiveOptions}
        />
      </section>
      <div className={styles.trainingContainer}>
        <div className={styles.trainingWave}></div>
      </div>
    </>
  );
};
