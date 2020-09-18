import React from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl'; 


function Skills (props){
    return(
        <Grid>  
        <Cell col = {12}>
             {props.skill}
            <div>         
                <ProgressBar progress={props.progress} style={{margin:'auto', width:'75%'}} />

                </div>
               
           
    
       </Cell>
    </Grid>
    )  
}
export default Skills;