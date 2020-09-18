import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './experience';
import Skills from './skills';

function Resume(){
    return(
       <Grid className = 'resumeGrid'>
            <Cell className = 'resumeLeftCol' col = {4}>
                <div>
                <img src = 'https://urbantasy.com/wp-content/uploads/2020/02/chester-wade-F6rApxzbLSw-unsplash-scaled.jpg'
                alt = 'avatar' className = 'avatar-resume'
                />  
                </div>
                <h2 style = {{paddingTop:'2em'}}>Anton Kozhukhov</h2>
                <h4 style = {{color:'grey'}}>Front-end developer</h4>
                <hr style = {{borderTop: '3px solid #833fb2', width: '75%'}}/>
                <p>Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore.</p>
                <hr style = {{borderTop: '3px solid #833fb2', width: '75%'}}/>
                <h5>Address</h5>
                <p>Zheleznovodsk</p>
                <h5>Phone</h5>
                <p>+79887467223</p>
                <h5>Email</h5>
                <p>antondj4851@gmail.com</p>
                <h5>Web site</h5>
                <p>www.mysite.com</p>
                <hr style = {{borderTop: '3px solid #833fb2', width: '75%'}}/>
            </Cell>
            <Cell  style = {{padding:'2em'}} className= 'resumeRightCol' col = {8}>
                <h2>Education</h2>
                <Education
                startYear={2012}
                endYear={2016}
                schoolName={'Северо-Кавказский Федеральный Университет'}
                schoolDescription={'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'}
                />

                <Education
                startYear={2009}
                endYear={2013}
                schoolName={'Техникум информационных технологий'}
                schoolDescription={'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'}
                />
                <hr style = {{borderTop: '3px solid #e22947'}}/>

                <h2>Experience</h2>
                <Experience
                startYear={2016}
                endYear={2018}
                jobName={'Моя первая работа'}
                jobDescription={'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'}
                />
                <Experience
                startYear={2018}
                endYear={2020}
                jobName={'Моя вторая работа'}
                jobDescription={'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'}
                />
                <hr style = {{borderTop: '3px solid #e22947'}}/>

                <h2>Skills</h2>
                <Skills
                skill={'HTML/CSS'} 
                    progress={70}
                />
                
                <Skills
                skill={'Java-Script'}
                progress={40}
                />

                <Skills
                skill={'React JS'}
                progress={30}
                />

                <Skills
                skill={'Node JS'}
                progress={5}
                />

                <Skills
                skill={'Mongo DB'}
                progress={5}
                />

            </Cell>
            
       </Grid>

    );
}
export default Resume;