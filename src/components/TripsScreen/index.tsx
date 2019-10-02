import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import TripCard from '../TripCard';


const trips = [
  {
    name: 'test',
    time: 1,
    distance: 1,
    placesNumber: 1,
    likes: 1
  },
  {
    name: 'test',
    time: 1,
    distance: 1,
    placesNumber: 1,
    likes: 1
  },
  {
    name: 'test',
    time: 1,
    distance: 1,
    placesNumber: 1,
    likes: 1
  },
  {
    name: 'test',
    time: 1,
    distance: 1,
    placesNumber: 1,
    likes: 1
  },
  {
    name: 'test',
    time: 1,
    distance: 1,
    placesNumber: 1,
    likes: 1
  },
  {
    name: 'test',
    time: 1,
    distance: 1,
    placesNumber: 1,
    likes: 1
  },
  {
    name: 'test',
    time: 1,
    distance: 1,
    placesNumber: 1,
    likes: 1
  },
  {
    name: 'test',
    time: 1,
    distance: 1,
    placesNumber: 1,
    likes: 1
  },
  {
    name: 'test',
    time: 1,
    distance: 1,
    placesNumber: 1,
    likes: 1
  },
  {
    name: 'test',
    time: 1,
    distance: 1,
    placesNumber: 1,
    likes: 1
  },
  {
    name: 'test',
    time: 1,
    distance: 1,
    placesNumber: 1,
    likes: 1
  },
  {
    name: 'test',
    time: 1,
    distance: 1,
    placesNumber: 1,
    likes: 1
  }
]

class TripScreen extends Component {
  render() {
    return (
      <Grid container style={{ overflow: 'hidden' }} direction="column" alignItems="center" justify="flex-start">
        {trips.map((trip) => {
          return (
            <Grid item key={ trip.name + Math.random() }>
              <TripCard {...trip} />
            </Grid>
          )
        })}
      </Grid>
    )
  }
}

export default TripScreen;
