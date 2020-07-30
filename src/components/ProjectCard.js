import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
} from 'react-mdl';

class ProjectCard extends React.Component {
  render() {
    return (
      <div style={{ marginRight: '25px' }} className=''>
        {/* Project 1 */}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle
            style={{
              color: '#fff',
              height: '176px',
              background:
                'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover',
            }}
          >
            {this.props.title}
          </CardTitle>
          <CardText>{this.props.text}</CardText>
          <CardActions border>
            <Button colored>
              <a
                style={{ textDecoration: 'none', color: 'blue' }}
                href={this.props.link}
              >
                {this.props.button_text}
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}></CardMenu>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
