import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Accord(props) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Typography><h3 style={{color:"rgb(36 95 211)"}}>{props.title}</h3></Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {props.body}
                </Typography>
                </AccordionDetails>
            </Accordion>    
        </div>  
    )
}

export default Accord
