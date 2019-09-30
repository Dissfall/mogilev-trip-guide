import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import BookmarksIcon from '@material-ui/icons/Bookmarks';
import MapIcon from '@material-ui/icons/Map';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';

import './style.css';

const useStyles = makeStyles(theme => ({
  menuRoot: {
    width: '100%',
    position: 'absolute',
    bottom: '0px',
    display: 'flex',
    justifyContent: 'center'
  },
  menuContainer: {
    backgroundColor: theme.palette.background.paper,
    position: 'static',
    // width: '30%',
    height: '5vw',
    margin: '15px',
    borderRadius: '120px'
  }
}));

function PaperSheet() {
  const classes = useStyles();

  return (
    <div className={classes.menuRoot}>
      <Paper className={classes.menuContainer}>
        <Tabs
          value={React.useState(0)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab icon={<BookmarksIcon />} />
          <Tab icon={<MapIcon />} />
          <Tab icon={<SwapCallsIcon />} />
        </Tabs>
      </Paper>
    </div>
  );
}

export default PaperSheet;
