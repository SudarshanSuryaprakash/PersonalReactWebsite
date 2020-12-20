import React, { Fragment } from 'react';
import { Grid, Cell } from 'react-mdl';

class Certifications extends React.Component {
  // oddCell = () => {
  //   const num = this.props.no;
  //   console.log(num);
  //   if (num === 1) {
  //     return (
  //       <Fragment>
  //         <h4>{this.props.name}</h4>
  //         <p>{this.props.description}</p>
  //         <a href={this.props.link}>Course Link</a>
  //       </Fragment>
  //     );
  //   }
  // };

  // evenCell = () => {
  //   const num = this.props.no;
  //   console.log(num);
  //   if (num === 2) {
  //     return (
  //       <Fragment>
  //         <h4>{this.props.name}</h4>
  //         <p>{this.props.description}</p>
  //         <a href={this.props.link}>Course Link</a>
  //       </Fragment>
  //     );
  //   }
  // };

  render() {
    return (
      <div style={{ textAlign: 'center', margin: 'auto' }}>
        {/* // <Grid>
      //   <Cell col={6}>{this.oddCell()}</Cell>
      //   <Cell col={6}>{this.evenCell()}</Cell>
      // </Grid> */}

        <h4>{this.props.name}</h4>
        <p>{this.props.description}</p>
        <a href={this.props.link}>View Certificate</a>
      </div>
    );
  }
}

export default Certifications;
