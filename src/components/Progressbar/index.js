import React from 'react';
import {CircularProgressbarWithChildren,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progressbar = (probs) => (
   <div style={{width:"200px",position:"relative",left:"18%",bottom:"5%"}}>
    <CircularProgressbarWithChildren
      value={probs.percentage}
      text={probs.percentage}
      strokeWidth={15} styles={buildStyles({
        textColor: "#01BF71",
        pathColor: "#01BF71",
        trailColor: "yellow"
      })}  style={{width:"10px"}}  />
    
      </div>
);

export default Progressbar
