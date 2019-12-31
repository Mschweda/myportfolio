import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="/myAvatar.png" alt="avatar"
                                style={{height: '200px'}}
                                />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Marisa Schweda</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>3715 S. 1st Street<br></br>Austin TX 78704</p>
                        <h5>Phone</h5>
                        <p>(970) 819-2869</p>
                        <h5>Email</h5>
                        <p>tahoe27@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2012}
                            endYear={2013}
                            schoolName="my University"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />

                        <Education
                            startYear={2013}
                            endYear={2014}
                            schoolName="my second University"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                            
                        <Experience
                            startYear={2009}
                            endYear={2010} 
                            jobName="First job"
                            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                            />

                        <Experience
                            startYear={2010}
                            endYear={2011} 
                            jobName="Second job"
                            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                            />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>

                        <Skills
                            skills="javaScript"
                            progress={80}
                            />
                        <Skills
                            skills="HTML/CSS"
                            progress={100}
                             />
                        <Skills
                            skills="React"
                            progress={85}
                             />
                        <Skills
                            skills="Node"
                            progress={90}
                             />
                        <Skills
                            skills="MongoDB"
                            progress={25}
                             />
                        <Skills
                            skills="Express"
                            progress={30}
                             />



                        </Cell>

                    
                </Grid>
            </div>
        )
    }
}

export default Resume;