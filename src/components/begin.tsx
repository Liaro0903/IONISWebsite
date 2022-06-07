import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';
import './begin.css';

const Begin = () => {

  return (
    <div className='wrapper begin'>
      <div style={{ position: 'absolute' }}>
        <svg id='svg-logo-middle' width='100' height='150' viewBox='0 0 100 150' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <line x1='50' y1='0' x2='50' y2='150' stroke='black' stroke-width='4' />
        </svg>
      </div>
      <div id='trigger' style={{ transform: 'translate(0, 10px)' }} />
      <div id='trigger2' style={{ transform: 'translate(0, 20vh' }} />
      <Scene
        duration={150}
        triggerElement='#trigger'
      >
        {(progress: number) => (
          <Tween
            to={{
              color: 'black',
            }}
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
      <Scene
        duration={150}
        triggerElement='#trigger2'
      >
        {(progress: number) => (
          <Tween
            to={{
              opacity: 1,
              // color: 'white',
            }}
            ease='Strong.easeout'
            totalProgress={progress}
            paused
          >
            <div style={{
              fontSize: '96px',
              fontWeight: 100,
              transform: 'translate(0, 40vh)',
              opacity: 0,
            }}
            >I A N
            <br></br>
            H U A N G
            <br></br>
            <div style={{fontSize: '20px'}}>
              Software Engineer | Computational Neuroscience
            </div>
            </div>
          </Tween>
        )}
      </Scene>
    </div>
  )
}

export default Begin;