import Paragraph from "../../templated/Paragraph";
import React from "react";

import MonthsSwarm from "../MonthsSwarm";

const Steps = ({ steps }) => {
  return (
    <div className='inno-steps inno-uncontain js-steps' data-type={steps[0].step.includes('line-') ? 'line' : 'radar'}>
      <div className='inno-container'>
        <ul className='inno-steps__steps inno-content'>
          {steps.map(step => (
            <li className='inno-steps__step js-steps-step' data-step={step.step} data-score={step.score}>
              <p className='inno-p' dangerouslySetInnerHTML={{__html:step.text}}></p>
            </li>
          ))}
        </ul>
      </div>

      <div className='inno-steps__content'>

        {steps[0].step == ('initial-step') &&
          <MonthsSwarm />
        }
      </div>

    </div>
  );
};

export default Steps;