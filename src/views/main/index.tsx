import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Map from '../../components/Map';
import MenuBar from '../../components/MenuBar';


class Main extends Component <MVProps, MVState> {
  constructor(props: MVProps) {
    super(props);

    this.state = {
      tab: 1 
    }
  }

  private handleNavigationTabChange = (tab: number) => {
    this.setState({ tab: tab });
  }

  render() {
    return (
      <div>
        <SwipeableViews
          axis="x"
          index={this.state.tab}
        >
          <div></div>
          <Map />
          <div></div>
        </SwipeableViews>
        <MenuBar onChange={ this.handleNavigationTabChange }/>
      </div>
    )
  }
}

interface MVState {
  tab: number
}

interface MVProps {};

export default Main;
