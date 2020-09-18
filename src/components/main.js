import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import {Switch, Route} from 'react-router-dom';

function Main (){
    return(
        <Switch>
            <Route exact path = '/' component = {LandingPage}/>
            <Route path = '/aboutme' component = {AboutMe}/>
            <Route path = '/contact' component = {Contact}/>
            <Route path = '/resume' component = {Resume}/>
            <Route path = '/projects' component = {Projects}/>
        </Switch>
    );
}
export default Main;