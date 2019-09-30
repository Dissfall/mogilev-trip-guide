import React, { Component } from 'react';

import Map from '../../components/Map';
import MenuBar from '../../components/MenuBar';


class Main extends Component {
  render() {
    return(
      <div>
        <Map />
        <MenuBar />
      </div>
    )
  }
}


export default Main;
