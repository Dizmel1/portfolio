import React from 'react';
import {Grid, Cell} from 'react-mdl';

function LandingPage(){
    return(
        <div style = {{width:'100%',margin:'auto'}}>
            <Grid className = 'landing-grid'>
            <Cell col={12}>               
                <img src = 'https://urbantasy.com/wp-content/uploads/2020/02/chester-wade-F6rApxzbLSw-unsplash-scaled.jpg'
                alt = 'avatar' className = 'avatar-img'
                />     
                <div style = {{backgroundColor:'black', opacity:'.8', color:'white', margin:'auto', borderRadius:'10px'}} className = 'banner-text'>
                    <h1>Full stack web developer</h1>
                    <hr/>
                    <p style = {{fontSize:'20px'}}>HTML/CSS | JavaScript | React JS</p>
                    <div className = 'social-links'>
                        {/* YouTube */}
                        <a href = 'http://google.com' rel="noopener noreferrer" target='_blank'> 
                        <i className="fa fa-youtube-square" aria-hidden="true"/>
                         </a>
                         
                         
                        {/* VK */}
                        <a href = 'http://google.com' rel="noopener noreferrer" target='_blank'> 
                        <i class="fa fa-vk" aria-hidden="true"></i> 
                        </a>
                        
                        
                        {/* facebook */}
                        <a href = 'http://google.com' rel="noopener noreferrer" target='_blank'> 
                        <i class="fa fa-facebook" aria-hidden="true"></i> 
                        </a>
                        
                        
                        {/* instagram */}
                        <a href = 'http://google.com' rel="noopener noreferrer" target='_blank'> 
                        <i class="fa fa-instagram" aria-hidden="true"></i> 
                        </a>
                        </div>
                </div>

            </Cell>
            </Grid>
        </div>

    );
}
export default LandingPage;