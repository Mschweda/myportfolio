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
                        <h4 style={{color: 'grey'}}>Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>I have some years of experience as a front-end and WordPress developer, creating high quality responsive websites.

In my experience as a freelancer I have also obtained an eye for detail and appreciation for design. I also have strong knowledge of server-side integration and development, as well as knowing how to efficiently project manage and work with clients.

I now specialise in front-end development but my knowledge of multiple fields allows me to work on a project with the full scope in mind. Other skills in my tool box include PHP, Firebase, Photoshop, Illustrator and ServiceNow. I am currently in the process of becoming a ServiceNow Certifed System Administrator as well as a developer.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>3715 S. 1st Street<br></br>Austin TX 78704</p>
                        <h5>Phone</h5>
                        <p>(970) 819-2869</p>
                        <h5>Email</h5>
                        <p>marisaschweda@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        {/* <h2>Education</h2>
                        <Education
                            startYear={2012}
                            endYear={2013}
                            schoolName="my University"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />

                        <Education
                            startYear={2013}
                            endYear={2014}
                            schoolName="my second University"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" /> */}
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                            
                        <Experience
                            startYear={2019}
                            endYear="Present" 
                            jobName="Siteshark"
                            jobDescription="Started my own freelance company developing custom websites and applications. Worked on various logo and UI designs. Helped small buinsesses with marketing, online ordering, daily website assistance and updates during Covid-19."
                            />

                        <Experience
                            startYear={2019}
                            endYear={2019} 
                            jobName="Austin Coding Academy"
                            jobDescription="Attended ACA's fullstack web program. Learned how to build fullstack web apllications using the MERN stack. Became proficent is JavaScript, HTML, CSS, React, Express, MongoDB, Jquery, Boostrap, Git, Github and Node JS."
                            />
                            <Experience
                            startYear={2017}
                            endYear={2019} 
                            jobName="Self-Taught Programmer"
                            jobDescription="Took several classes on Udemy, Udacity, Freecodecamp and General Assembly. Learned the basics of web development, building websites and applications from scratch. "
                            />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills
                            skills="HTML/CSS"
                            progress={100}
                             />
                        <Skills
                            skills="WordPress"
                            progress={100}
                             />
                        <Skills
                            skills="Node"
                            progress={90}
                             />
                        <Skills
                            skills="React"
                            progress={85}
                             />
                        <Skills
                            skills="JavaScript"
                            progress={80}
                            />
                       <Skills
                            skills="Bootstrap"
                            progress={70}
                             />
                        <Skills
                            skills="Swift"
                            progress={50}
                             />
                        
                       <Skills
                            skills="MongoDB"
                            progress={40}
                             />
                        
                        
                        



                        </Cell>

                    
                </Grid>
            </div>
        )
    }
}

export default Resume;