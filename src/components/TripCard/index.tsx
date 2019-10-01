import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './style.css';


class TripCard extends Component <TCProps> {
  render() {
    const { time, name, distance, placesNumber, likes } = this.props;
    return (
      <Card className="card">
          <Typography className="time" component="h4" variant="h4">
            {time}
          </Typography>
        <CardContent className="card-content">
          <Typography component="h6" variant="h6">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {distance}km {placesNumber} places * {likes}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

interface TCProps {
  name: string
  time: number
  distance: number
  placesNumber: number
  likes: number
}

export default TripCard;
