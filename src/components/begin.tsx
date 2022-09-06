import { useEffect, useState } from 'react';
import { Tween } from 'react-gsap';
import { useTranslation } from 'react-i18next';
import { Scene } from 'react-scrollmagic';
import './begin.css';
import './svg-logo.css';

const Begin = () => {
  const { t } = useTranslation();
  const [height, setHeight] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [shouldLoadIan, setShouldLoadIan] = useState<boolean>(false);

  useEffect(() => {
    setHeight(window.innerHeight);
    // console.log('height', height);
    if (height / 2 - 125 > 0) {
      setScrollHeight(height / 2 - 125);
    }
    // console.log('scrollHeight', scrollHeight);
  })

  setTimeout(() => {
    setShouldLoadIan(true);
  }, 3500);

  return (
    <div className='begin-row' style={{
      height: shouldLoadIan ? `${height + 250}px` : height,
    }}>
      <div className='begin-IONIS'>
        <svg className='svg-logo-middle' width='100' height='150' viewBox='0 0 100 150' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <line x1='50' y1='0' x2='50' y2='150' stroke='black' stroke-width='4' />
        </svg>
        <div id='trigger' />
        <Scene
          duration={150}
          triggerElement='#trigger'
        >
          {(progress: number) => (
            <Tween
              to={{ color: 'black', /* Ideally this should go to opacity 0 but animation issue */ }}
              ease='Strong.easeout'
              totalProgress={progress}
              paused
            >
              <div className='ionis-title' id='I'>I</div>
              <div className='ionis-title' id='O'>O</div>
              <div className='ionis-title' id='N'>N</div>
              <div className='ionis-title' id='I2'>I</div>
              <div className='ionis-title' id='S'>S</div>
            </Tween>
          )}
        </Scene>
      </div>
      {shouldLoadIan && (
        <div className='begin-ian-row' style={{
          height: `${height / 2 + 250 + height / 2 - 125}px`,
        }}>
          <Scene
            triggerElement='#trigger'
            classToggle='begin-ian-origin-centerer-after'
            reverse={true}
          >
            <div className='begin-ian-origin-centerer'>
              <Scene
                duration={scrollHeight}
                triggerElement='#trigger2'
                pin={true}
              >
                <div id='trigger2'>
                  <Scene
                    duration={120}
                    triggerElement='#trigger3'
                  >
                    {(progress: number) => (
                      <Tween
                        to={{
                          opacity: 1,
                        }}
                        ease='Strong.easein'
                        totalProgress={progress}
                        paused
                      >
                        <div id='trigger3'>
                          I A N
                          <br />
                          H U A N G
                          <br />
                          <div className='begin-ian-subtitle'>
                            {t('Begin.subtitle')}
                          </div>
                        </div>
                      </Tween>
                    )}
                  </Scene>
                </div>
              </Scene>
            </div>
          </Scene>
        </div>
      )}
    </div>
  )
}

export default Begin;