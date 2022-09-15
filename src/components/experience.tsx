import React from 'react';
import { useTranslation } from 'react-i18next/';
import { Scene } from 'react-scrollmagic';
import './experience.css';

interface IExperiencesData {
  id: string;
  num_p: number;
}

const experiencesData: IExperiencesData[] = [
  {
    id: 'marder',
    num_p: 2,
  },
  {
    id: 'rocket',
    num_p: 3,
  },
  {
    id: 'fcc',
    num_p: 2,
  },
  {
    id: 'gravyty',
    num_p: 2,
  }
];

const awardData: IExperiencesData[] = [
  {
    id: 'awards.code19',
    num_p: 1,
  },
  {
    id: 'awards.code18',
    num_p: 1,
  }
]

const Card = ({ d }: { d: IExperiencesData }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className='space-between-wrapper'>
        <h3 className='experience-subtitle-top'>{t(`Experience.${d.id}.title`)}</h3>
        <h4 className='experience-subtitle-middle'>{t(`Experience.${d.id}.location`)}</h4>
      </div>
      <div className='space-between-wrapper'>
        <p className='experience-subtitle-middle'>{t(`Experience.${d.id}.position`)}</p>
        <h4 className='experience-subtitle-bottom'>{t(`Experience.${d.id}.year`)}</h4>
      </div>
      <div className='li-wrapper'>
        {[...Array(d.num_p)].map((e, i) => {
          return <li key={`${d.id}-${i+1}`}>{t(`Experience.${d.id}.p.${i+1}`)}</li>
        })}
      </div>
    </>
  )
}

const Experiences = () => {
  const { t } = useTranslation();

  return (
    <div className='row'>
      <section id='experience'>
        <h2>{t('Experience.title')}</h2>
        {
          experiencesData.map(exp => (
            <Scene
              triggerElement={`#_${exp.id}`}
              classToggle='scroll-reveal'
              reverse={true}
              offset={-350}
              key={exp.id}
            >
              {/* An underscore was added because it wouldn't understand 115959 I think */}
              <article id={`_${exp.id}`}>
                <Card d={exp} />
              </article>
            </Scene>
          ))
        }
        <h3 className='mid-title'>{t('Experience.awards.title')}</h3>
        {
          awardData.map(award => (
            <Scene
              triggerElement={`#${award.id.replace('awards.', '')}`}
              classToggle='scroll-reveal'
              reverse={true}
              offset={-350}
              key={award.id}
            >
              {/* An underscore was added because it wouldn't understand 115959 I think */}
              <article id={`${award.id.replace('awards.', '')}`}>
                <Card d={award} />
              </article>
            </Scene>
          ))
        }
      </section>
    </div>
  )
}

export default Experiences;