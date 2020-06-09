import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }; 
    }

    toggleCatergories() { 

    
    if(this.state.activeTab === 0){
        return(
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto', color: '#fff'}}>
              <CardTitle style={{color: '#fff', height: '230px', background: 'url(chat_app.png) center / cover'}} ></CardTitle>
              <CardText>
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's */}
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '230px', background: 'url(/biz_card.png) center / cover'}} ></CardTitle>
              <CardText>
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's */}
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '230px', background: 'url(weather_app.png) center / cover'}} ></CardTitle>
              <CardText>
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's */}
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
  
  
        )
      } else if(this.state.activeTab === 1) {
        return (
          <div><h1>This is Angular</h1></div>
        )
      } else if(this.state.activeTab === 2) {
        return (
          <div><h1>This is VueJS</h1></div>
        )
      } else if(this.state.activeTab === 3) {
        return (
          <div><h1>This is MongoDB</h1></div>
        )
      }
  
    }
  
    render() {
        return(
            <div className="catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple> 
                    <Tab>SWIFT</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>REACT</Tab>
                    <Tab>WORDPRESS</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCatergories()}</div>
                        </Cell>
                    </Grid>
               </div>

            
        )
    }
} 


export default Projects;