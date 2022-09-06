import React from 'react';
import { Scene } from 'react-scrollmagic'

const SvgLogo = () => {
  return (
    <div className='svg-logo-row'>
      <Scene
        triggerElement='#trigger'
        classToggle='svg-logo-left-wall-after'
        reverse={true}
      >
        <div className='svg-logo-left-wall'>
          <Scene
            triggerElement='#trigger'
            classToggle='svg-logo-left-after'
            indicators={false}
            reverse={true}
          >
            <svg id='svg-logo-left' className='svg-logo-left' width='410' height='462' viewBox='0 0 410 462' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <line id='top-left' x1='0' y1='0' x2='410' y2='0' stroke='white' strokeWidth='4' />
              <line id='middle' x1='410' y1='0' x2='410' y2='462' stroke='white' strokeWidth='4' />
              <line id='bottom-left' x1='410' y1='462' x2='0' y2='462' stroke='white' strokeWidth='3' />
            </svg>
          </Scene>
        </div>
      </Scene>
      <Scene
        triggerElement='#trigger'
        classToggle='svg-logo-right-wall-after'
        reverse={true}
      >
        <div className='svg-logo-right-wall'>
          <Scene
            triggerElement='#trigger'
            classToggle='svg-logo-right-after'
            reverse={true}
          >
            {(progress: number, event: any) => {
              // console.log(event.type);
              return (
                <svg id='svg-logo-right' className='svg-logo-right' width='410' height='462' viewBox='0 0 410 462' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <line id='top-right' x1='410' y1='0' x2='0' y2='0' stroke='white' strokeWidth='4' />
                  <line id='middle' x1='0' y1='0' x2='0' y2='462' stroke='white' strokeWidth='4' />
                  <line id='bottom-right' x1='0' y1='462' x2='410' y2='462' stroke='white' strokeWidth='3' />
                </svg>
              )
            }}
          </Scene>
        </div>
      </Scene>
    </div>
  )
};


// const SvgLogo = () => {
//   return (
//     <div className='svg-logo'>
//       {/* <svg width='870' height='700' viewBox='0 0 870 700' fill='none' xmlns='http://www.w3.org/2000/svg'>
//       <line id='bottom-right' x2='869.278' y2='697.917' x1='434.612' y1='581.449' stroke='white' strokeWidth='3' />
//       <line id='bottom-left' x1='435.388' y1='581.449' x2='0.721613' y2='697.917' stroke='white' strokeWidth='3' />
//       <line id='middle' x1='435' y1='119' x2='435' y2='581' stroke='white' strokeWidth='3' />
//       <line x1='435' y1='270' x2='435' y2='440' stroke='black' strokeWidth='4' />
//       <line id='top-right' x2='434.612' y2='118.551' x1='869.278' y1='2.08255' stroke='white' strokeWidth='3' />
//       <line id='top-left' x1='0.718307' y1='2.08114' x2='435.385' y2='118.55' stroke='white' strokeWidth='3' />
//     </svg> */}
//       <Scene
//         triggerElement='#trigger'
//         classToggle='svg-logo-right-after'
//         indicators={true}
//         reverse={true}
//       >
//         {(progress: number, event: any) => {
//           console.log(event.type);
//           return (
//             <svg id='svg-logo-right' className='svg-logo-right' width='410' height='462' viewBox='0 0 410 462' fill='none' xmlns='http://www.w3.org/2000/svg'>
//               <line id='top-right' x1='410' y1='0' x2='0' y2='0' stroke='white' strokeWidth='4' />
//               <line id='middle' x1='0' y1='0' x2='0' y2='462' stroke='white' strokeWidth='4' />
//               <line id='bottom-right' x1='0' y1='462' x2='410' y2='462' stroke='white' strokeWidth='3' />
//             </svg>
//           )
//         }}
//       </Scene>
//       <Scene
//           triggerElement='#trigger'
//           classToggle='svg-logo-left-after'
//           indicators={true}
//           reverse={true}
//         >
//           <svg id='svg-logo-left' className='svg-logo-left' width='410' height='462' viewBox='0 0 410 462' fill='none' xmlns='http://www.w3.org/2000/svg'>
//             <line id='top-left' x1='0' y1='0' x2='410' y2='0' stroke='white' strokeWidth='4' />
//             <line id='middle' x1='410' y1='0' x2='410' y2='462' stroke='white' strokeWidth='4' />
//             <line id='bottom-left' x1='410' y1='462' x2='0' y2='462' stroke='white' strokeWidth='3' />
//           </svg>
//         </Scene>
//       {/* <div className='svg-logo-centerer-left'> 
//         <div className='new-svg-logo-left' />
//       </div> */}
//     </div>
//   )
// };

export default SvgLogo;