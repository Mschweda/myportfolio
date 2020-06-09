import React, { Component } from 'react';
import  { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
 

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={5}>
                        <h2>MARISA SCHWEDA</h2>
                        <img
                            src="/myAvatar.png" alt="avatar"
                                style={{height: '300px'}}
                                />
                             
                            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>I’m currently available for freelance work. I love to connect with clients and hear their ideas. Drop me a line!  </p>     
                    </Cell>
                    <Cell col={5}>
                        <h2>CONTACT ME</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    {/* <i className="fa fa-phone-square" aria-hidden="true"/>   */}
                                    (970) 819-2869
                                    </ListItemContent>
                                </ListItem>

                               <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                    {/* <i className="fa fa-envelope" aria-hidden="true"/>   */}
                                    marisaschweda@gmail.com
                                    </ListItemContent>
                                </ListItem>
                               
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;