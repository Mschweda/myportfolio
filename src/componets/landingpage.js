import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';




class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                   
                        <img
                            src="/myAvatar.png" alt="avatar"  
                            className="avatar-image"
                        />
                            <div className="banner-text">
                            {/* <h3>MARISA SCHWEDA</h3> */}
                            <h1 class="mdl-cell--hide-phone">WEB DEVELOPER</h1>
                           
                            <hr/>
                            <p>HTML/CSS * JavaScript * React * NodeJS * MongoDB * Bootstrap * WordPress * Swift</p>
                                <div className="social-links">

                                {/* Linkeden */}
                                <a href="http://google.com" rel="noopener noreferrer" target="-blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="-blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>

                            
                                </div>
                            </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;