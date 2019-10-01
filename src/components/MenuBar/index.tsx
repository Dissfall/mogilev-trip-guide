import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import BookmarksIcon from '@material-ui/icons/Bookmarks';
import MapIcon from '@material-ui/icons/Map';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';

import './style.css';


class MenuBar extends Component <MBProps, MBState> {
  constructor(props: MBProps) {
    super(props);

    this.state = { tab: 1 };
  }

  render() {
    return (
      <div className="menu-root">
        <Paper className="menu-container">
          <Tabs
            value={this.state.tab}
            onChange={(event: any, tab: number) => {
              this.setState({ tab: tab });
              this.props.onChange ? this.props.onChange(tab) : (() => {})();
            }}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab icon={<BookmarksIcon />} />
            <Tab icon={<MapIcon />} />
            <Tab icon={<SwapCallsIcon />} />
          </Tabs>
        </Paper>
      </div>
    );
  }
}

interface MBProps {
  currentTab?: string
  onChange?: any
};

interface MBState {
  tab: number
}

export default MenuBar;
