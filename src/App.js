
import './App.css';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { purple } from '@mui/material/colors';
import { Stack, Icon } from '@mui/material';
import { ReactComponent as MySVG } from '../src/assets/images/icon-star.svg';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.head.appendChild(linkElement);

function App() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="app-container" >
      <div className="container">
        <div className="card">
          <div style={{ fontWeight: "bold" }}>
            <MySVG id="svg" />
            <span style={{ "verticalAlign": "middle", fontSize: "3em", fontFamily:"WorkSans-VariableFont_wghtWorkSans-BlackItalic"}}>  FAQ's</span></div><br />
          <Accordion sx={{
            '&:before': {
              display: 'none',
            }
          }} className='accord' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

            <AccordionSummary
              expandIcon={<Stack direction="row">
                
                <Icon   sx={{ color: purple[500],display:(expanded!=="panel1")?"inline-block":"none" }}>add_circle</Icon>
                <RemoveCircleIcon  sx={{ color: "black",display:(expanded==="panel1"?"inline-block":"none") }}/>
                {/* <Icon  sx={{ color: purple[500],display:expanded=="panel1" }}>minus_circle</Icon> */}
              </Stack>}
              aria-controls="panel1-content"
              id="panel1-header"
              style={{ fontWeight: "bold" }}
            className='acc-summary'>

              What is Frontend Mentor, and how will it help me?
            </AccordionSummary>
            <AccordionDetails>
              Frontend Mentor offers realistic coding challenges to help developers improve their
              frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
              all levels and ideal for portfolio building.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{
            '&:before': {
              display: 'none',
            }
          }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary

              expandIcon={<Stack direction="row">
                <Icon   sx={{ color: purple[500],display:(expanded!=="panel2")?"inline-block":"none" }}>add_circle</Icon>
                <RemoveCircleIcon  sx={{ color: "black",display:(expanded==="panel2"?"inline-block":"none") }}/>
                </Stack>}
              aria-controls="panel1-content"
              id="panel1-header"
              style={{ fontWeight: "bold" }}
              className='acc-summary'>

              Is Frontend Mentor free?
            </AccordionSummary>
            <AccordionDetails>
              Yes, Frontend Mentor offers both free and premium coding challenges, with the free
              option providing access to a range of projects suitable for all skill levels.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{
            '&:before': {
              display: 'none',
            }
          }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary

              expandIcon={<Stack direction="row">
                <Icon   sx={{ color: purple[500],display:(expanded!=="panel3")?"inline-block":"none" }}>add_circle</Icon>
                <RemoveCircleIcon  sx={{ color: "black",display:(expanded==="panel3"?"inline-block":"none") }}/>
              </Stack>}
              aria-controls="panel1-content"
              id="panel1-header"
              style={{ fontWeight: "bold" }}
              className='acc-summary'>

              Can I use Frontend Mentor projects in my portfolio?
            </AccordionSummary>
            <AccordionDetails>
              Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
              way to showcase your skills to potential employers!
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{
            '&:before': {
              display: 'none',
            }
          }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary

              expandIcon={<Stack direction="row">
                <Icon   sx={{ color: purple[500],display:(expanded!=="panel4")?"inline-block":"none" }}>add_circle</Icon>
                <RemoveCircleIcon  sx={{ color: "black",display:(expanded==="panel4"?"inline-block":"none") }}/>
              </Stack>}
              aria-controls="panel1-content"
              id="panel1-header"
              style={{ fontWeight: "bold" }}
              className='acc-summary' >

              How can I get help if I'm stuck on a Frontend Mentor challenge?
            </AccordionSummary>
            <AccordionDetails>
              The best place to get help is inside Frontend Mentor's Discord community. There's a help
              channel where you can ask questions and seek support from other community members.
            </AccordionDetails>
          </Accordion>
          </div>
        </div>
      </div>
      );
}

      export default App;
