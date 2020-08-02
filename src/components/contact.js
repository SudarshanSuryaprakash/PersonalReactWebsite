import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import img from '../img/Sudarshan-img.jpeg';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body header-color'>
        <Grid className='contact-grid header-color'>
          <Cell col={6} className='header-color'>
            <h2 style={{ color: '#0f5fa9' }}>
              Sudarshan <span style={{ color: 'white' }}>Suryaprakash</span>
            </h2>
            <img src={img} alt='avatar' style={{ height: '250px' }} />
            <p
              style={{
                width: '75%',
                margin: 'auto',
                paddingTop: '1em',
                color: 'white',
              }}
            >
              <span style={{ color: '#0f5fa9' }}>
                Feel free to get in touch with me for
              </span>{' '}
              Full stack development roles.
            </p>
          </Cell>
          <Cell col={6}>
            <h2 style={{ color: '#0f5fa9' }}>Contact Me</h2>
            <hr />

            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '30px',
                      fontFamily: 'Anton',
                      color: '#0f5fa9',
                    }}
                  >
                    <i
                      className='fa fa-phone-square phone'
                      aria-hidden='true'
                    />
                    07421054467
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '25px',
                      fontFamily: 'Anton',
                      color: '#0f5fa9',
                    }}
                  >
                    <i
                      className='fa fa-envelope push-right'
                      aria-hidden='true'
                    />
                    <span className='email-contact'>
                      sudarshansprakash@gmail.com
                    </span>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
