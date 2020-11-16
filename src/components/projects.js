import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

import ProjectCard from './ProjectCard';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          <ProjectCard
            style={{}}
            title='ProfConnector'
            text=' A Full scale Social Media Web App that allows Professors from
              Brunel University to have a profile and communicate with each
              other. Uses MongoDB, Express, React and Node. Protects routes with JSON Web Tokens. Extensive backend testing with Postman.
              Redux is used for state management. Redux is functionality and state management is tested with Redux Dev Tools for Chrome.'
            link='https://ancient-springs-06742.herokuapp.com'
            button_text='Live Demo'
            pic='url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
          />
          <div className='breaker'></div>
          <ProjectCard
            title='E-Commerce Web App'
            text='Full scale E-Commerce web App rich with features. Built with the
              MERN stack. Ready to be deployed - Could find a client and sell. 
              Key features include: Search Product (SP)| SP based on category | New Arrivals | Best Sellers | Product Image | Product Information
              | Product in stock/Out of stock | View Product | Related Products | Full cart Functionalities | User and Admin Dashboards/Routes | Advanced SP based on Price range and Category'
            link='https://www.linkedin.com/posts/sudarshan-suryaprakash-b5ab1b190_mern-react-javascript-activity-6683104988476002304-H6O8'
            button_text='Video Demo'
            pic='url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
          />
          <div className='breaker'></div>
          <ProjectCard
            title='Streaming App'
            text="During the pandemic, there has been an increasing demand for online education - this increases demand for streaming/video-calling apps such as zoom.

I developed my own streaming app that allows one to share their screen, voice to any number of people who tune in.
|||
Technologies used-
Front end: React
State Management: Redux
Back End Servers: api - JSON server, rtmp - node-media-server
Recording Application - OBS
|||
Features - 
Google Authentication
Watch streams if not logged in
Create streams if you're logged in.
Edit/Delete streams if you created the stream"
            link='https://www.linkedin.com/posts/sudarshan-suryaprakash-b5ab1b190_hi-everyone-during-the-pandemic-there-activity-6724369565226213376-d27j'
            button_text='Video Demo'
            pic='url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
          />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>
          {/* Project 1 */}

          <ProjectCard
            title='COVID 19 Tracker'
            text="Uses an external API to obtain current data on the number of affected, dead and cured people due to the COVID-19. The app uses React, Material UI and Chart.js
            Corona Virus is, unfortunately, spreading through the entire world.
            As a developer, I decided to help by visualizing the data and spreading awareness. The data is fetched from an external API. This project/application is created using the most modern JavaScript syntax (Async/Await, arrow functions, Hooks). "
            link='https://covid19trackersud.herokuapp.com'
            button_text='Live Demo'
            pic='url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
          />
          <div className='breaker'></div>
          <ProjectCard
            title='A* Path Find Visualizer'
            text='A* is a graph traversal and path search algorithm, which is often used in many fields of computer science due to its completeness, optimality, and optimal efficiency.
            In this Project, I find the optimal path from the top left of the screen to the bottom right - past randomly generated obstacles. React was used to create the front end and modern CSS techniques (keyframes and animations) and Sass were used to animate the tiles.
            '
            link='https://pathfind-viz.vercel.app'
            button_text='Live Demo'
            pic='url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
          />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className='projects-grid'>
          <ProjectCard
            title='Movie Seat Booker'
            text='Allows for booking seats. Uses local storage to save selected data - persistent on page refresh'
            link='https://sudarshansuryaprakash.github.io/MovieSelector/'
            button_text='Live Demo'
            pic='url(https://images.unsplash.com/photo-1572621403925-33e05716ad8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80) center / cover'
          />{' '}
          <div className='breaker'></div>
          <ProjectCard
            title='Custom Video Player'
            text='Does not use the precoded controls for the HTML5 video. Custom controls for play, pause, progress bar'
            link='https://sudarshansuryaprakash.github.io/CustomVideoPlayer/'
            button_text='Live Demo'
            pic='url(https://images.unsplash.com/photo-1572621403925-33e05716ad8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80) center / cover'
          />
          <div className='breaker'></div>
          <ProjectCard
            title='Exchange Rate Converter'
            text='Fetches exchange rates from external API and calls a function to rerender data every time an input is changed.'
            link='https://sudarshansuryaprakash.github.io/Exchange-rate-calculator/'
            button_text='Live Demo'
            pic='url(https://images.unsplash.com/photo-1572621403925-33e05716ad8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80) center / cover'
          />
          <div className='breaker'></div>
          <ProjectCard
            title='DOM array Methods'
            text='Simple use of Javascript DOM array methods - forEach(), map(), sort(), filter() and reduce()'
            link='https://sudarshansuryaprakash.github.io/Dom-Array-Methods/'
            button_text='Live Demo'
            pic='url(https://images.unsplash.com/photo-1572621403925-33e05716ad8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80) center / cover'
          />
          <div className='breaker'></div>
          <ProjectCard
            title='Timer'
            text='Drawing Animations built with SVG (stroke-dasharray and stroke-dashoffset)'
            link='https://sudarshansuryaprakash.github.io/Timer/'
            button_text='Live Demo'
            pic='url(https://images.unsplash.com/photo-1572621403925-33e05716ad8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80) center / cover'
          />
          <div className='breaker'></div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='margin-remover'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
          className='margin-remover'
        >
          <Tab>Full Scale</Tab>
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
        </Tabs>

        <Grid className='margin-remover'>
          <Cell className='margin-remover' col={12}>
            <div className='content margin-remover'>
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
