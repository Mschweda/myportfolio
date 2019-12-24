import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contacts';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
    <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route Path="/aboutme" component={AboutMe} />
        <Route Path="/contacts" component={Contact} />
        <Route Path="/projects" component={Projects} />
        <Route Path="/resume" component={Resume} />

    </Switch>
)

export default Main;