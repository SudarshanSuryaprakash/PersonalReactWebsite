import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img from '../img/Sudarshan-img.jpeg';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid header-color'>
          <Cell col={12}>
            <img src={img} alt='avatar' className='avatar-img' />

            <div className='banner-text'>
              <h1>Full Stack Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | Redux | NodeJS |
                Express | MongoDB | Python
              </p>

              <div className='social-links'>
                <a
                  href='https://www.linkedin.com/in/sudarshan-suryaprakash-b5ab1b190/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                {/* Github */}
                <a
                  href='http://github.com/SudarshanSuryaprakash'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
