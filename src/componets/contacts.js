import React, { Component } from 'react';
import  { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
 

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>MARISA SCHWEDA</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar"
                            style= {{height: '250px'}}
                             />
                            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>     
                    </Cell>
                    <Cell col={6}>
                        <h2>CONTACT ME</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>  
                                    (970) 819-2869
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>  
                                    (970) 819-2869
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>  
                                    tahoe27@gmail.com
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