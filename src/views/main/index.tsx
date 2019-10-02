import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Map from '../../components/Map';
import MenuBar from '../../components/MenuBar';
import TripsScreen from '../../components/TripsScreen';


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
          ignoreNativeScroll={true}
          onChangeIndex={this.handleNavigationTabChange}
        >
          <div></div>
            <Map />
          <div style={{ height: "92vh" }}>
            <TripsScreen />
          </div>
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
