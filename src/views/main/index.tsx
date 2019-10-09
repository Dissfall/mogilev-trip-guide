import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Map from '../../components/Map';
import MenuBar from '../../components/MenuBar';
import TripsScreen from '../../components/TripsScreen';


class Main extends Component <MVProps, MVState> {
  constructor(props: MVProps) {
    super(props);

    this.state = {
      tab: 1,
      tripView: 0
    }
  }

  private handleNavigationTabChange = (tab: number) => {
    this.setState({ tab: tab });
  }

  private changeTripView = () => {
    this.setState({ tripView: (() => 1 - this.state.tripView )() });
  }

  render() {
    return (
      <SwipeableViews
        axis="x"
        index={this.state.tripView}
      >
        <div style={{ height: '100vh' }}>
          <SwipeableViews
            axis="x"
            index={this.state.tab}
            ignoreNativeScroll={true}
            onChangeIndex={this.handleNavigationTabChange}
          >
            <div></div>
              <Map />
            <div style={{ height: "92vh" }}>
              <TripsScreen onTripSelect={ this.changeTripView } />
            </div>
          </SwipeableViews>
          <MenuBar onChange={ this.handleNavigationTabChange }/>
        </div>
        <div>
          <button onClick={ this.changeTripView }>back</button>
        </div>
      </SwipeableViews>
    )
  }
}

interface MVState {
  tab: number
  tripView: number
}

interface MVProps {};

export default Main;
