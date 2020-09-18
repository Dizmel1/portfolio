import React, { useState } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';




function Projects(){

    const[activeTab, setState] = useState(0);

   function changeCatigoris(){
        if(activeTab === 0){
            return(
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://steemitimages.com/DQmRjArytrorSKNahEjyXyh683teXv3E1qCoz8jjzG38QVo/react.js-logo.png) center / cover'}}>React JS Project#1</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored><a href = 'http://www.google.com'>GetHub</a></Button>
        <Button colored>CodePen</Button>
        <Button colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
            )
        }
        else if(activeTab === 1){
        return(
            <div>
                 <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/media/C4zoD4oWcAAJd-j.jpg) center / cover'}}>Angular JS</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>GetHub</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
            </div>
        )
        }
    else if(activeTab === 2){
        return(

                 <div>
                 <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.freelance.ru/images/att/943362_900_600.png) center / cover'}}>Vue JS</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>GetHub</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

            </div>
        )
        }
        else if(activeTab === 3){
            return(
                <div>
                     <div>
                 <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i1.wp.com/www.virtono.com/community/wp-content/uploads/2017/10/mongodb-1.jpeg?fit=1040%2C560&ssl=1) center / cover'}}>Mongo JS</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>GetHub</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

            </div>
                </div>
            )
            }
    }
    return(
        <div className="category-tabs">
        <Tabs activeTab={activeTab} onChange={(tabId) =>setState( tabId )} ripple>
            <Tab>React JS</Tab>
            <Tab>Angular JS</Tab>
            <Tab>Vue JS</Tab>
            <Tab>Mongo DB</Tab>
        </Tabs>
        <section>
            <Grid className = 'project-Grid'>
                <Cell col = {12}>
                <div className = 'content' >
                    {changeCatigoris()}
                </div>
                </Cell>
            </Grid>
        </section>
    </div>

    );
}
export default Projects;