import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Heart from '../Heart';

import './style.css';


class TripCard extends Component <TCProps> {
  render() {
    const { time, name, distance, placesNumber, likes } = this.props;
    const id = 'mask' + Math.random();

    return (
      <Card className="card">
        <Typography className="time" align="center" component="h4" variant="h4">
          {time}h
        </Typography>
        <CardContent className="card-content">
          <Typography component="h6" variant="h6">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {distance}km {placesNumber} places <Heart /> {likes}
          </Typography>
        </CardContent>
        <div style={{ flexGrow: 1 }}></div>
        <div onClick={ this.props.onClick } className="arrow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3214 10L6.9107 14.4108C6.58527 14.7362 6.58527 15.2638 6.9107 15.5893C7.23614 15.9147 7.76378 15.9147 8.08922 15.5893L13.0892 10.5893C13.4147 10.2638 13.4147 9.73619 13.0892 9.41075L8.08922 4.41075C7.76378 4.08531 7.23614 4.08531 6.9107 4.41075C6.58527 4.73619 6.58527 5.26382 6.9107 5.58926L11.3214 10Z" fill="black"/>
            <mask id={ id } mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="4" width="8" height="12">
            <path d="M11.3214 10L6.9107 14.4108C6.58527 14.7362 6.58527 15.2638 6.9107 15.5893C7.23614 15.9147 7.76378 15.9147 8.08922 15.5893L13.0892 10.5893C13.4147 10.2638 13.4147 9.73619 13.0892 9.41075L8.08922 4.41075C7.76378 4.08531 7.23614 4.08531 6.9107 4.41075C6.58527 4.73619 6.58527 5.26382 6.9107 5.58926L11.3214 10Z" fill="white"/>
            </mask>
            <g mask={ `url(#${id})` }>
              <rect width="20" height="20" fill="#45B8F3"/>
            </g>
          </svg>
        </div>
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
  onClick?: any
}

export default TripCard;
