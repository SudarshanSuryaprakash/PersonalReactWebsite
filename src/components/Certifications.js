import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Certifications extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center', margin: 'auto' }}>
        <h4>{this.props.name}</h4>
        <p>{this.props.description}</p>
        <a href={this.props.link}>Course Link</a>
      </div>
    );
  }
}

export default Certifications;
