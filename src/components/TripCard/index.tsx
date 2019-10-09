import React, { Component } from 'react';

import styled from 'styled-components';

import Card from '../Card';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Heart from '../Heart';


// Max description length 
const MDL: number = 50;


class TripCard extends Component <TCProps> {
  render() {
    let { name, image, description, time, distance, placesNumber, likes } = this.props;

    if (this.props.image && this.props.time) {
      console.warn('"time" and "image" props passed to card, but only one can be displayed. Image preferenced.');
      time = undefined;
    }

    return (
      <Card withdescription={ !!description } >
        { image && ( <TripImage image={ image } /> )}
        { time && ( <TripTime>{ time }</TripTime> )}
        <CardInfoContainer name={name} description={description} distance={distance} places={placesNumber} likes={likes} />
        <Arrow onClick={ this.props.onClick } />
      </Card>
    )
  }
}

const CardInfoContainer = (props: { name?: string, description?: string, distance?: number, places?: number, likes?: number, onClick?: any }) => {
  let { name, description, distance, places, likes, onClick } = props;
  
  if (description) {
    description = description.length > MDL ? description.substring(1, MDL) + '...' : description;
  }

  return (
    <div style={{ width: '60%', padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
      <Typography component="h6" variant="h6">
        {name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" style={{ lineHeight: 0.95 }}>
        { description }
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {distance}km {places} places <Heart /> {likes}
      </Typography>
    </div>
  );
};

const TextContainer = styled(Typography)`
  width: var(--card-height);
  line-height: var(--card-height)!important;
  color: #45B8F3;
`;

const TripTime = (props: { children: number }) => {
  const { children } = props; 
  const time: string = children > 60 ? (children/60).toFixed(1) + 'h' : children + 'm';

  return (
    <TextContainer align="center" component="h4" variant="h4">
      { time }
    </TextContainer>
  );
};

const SVGContainer = styled.div`
  width: calc(var(--card-height) / 2.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Arrow = (props: { onClick: any }) => {
  const id = 'mask' + Math.random();

  return (
    <SVGContainer onClick={ props.onClick }>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.3214 10L6.9107 14.4108C6.58527 14.7362 6.58527 15.2638 6.9107 15.5893C7.23614 15.9147 7.76378 15.9147 8.08922 15.5893L13.0892 10.5893C13.4147 10.2638 13.4147 9.73619 13.0892 9.41075L8.08922 4.41075C7.76378 4.08531 7.23614 4.08531 6.9107 4.41075C6.58527 4.73619 6.58527 5.26382 6.9107 5.58926L11.3214 10Z" fill="black"/>
        <mask id={ id } mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="4" width="8" height="12">
        <path d="M11.3214 10L6.9107 14.4108C6.58527 14.7362 6.58527 15.2638 6.9107 15.5893C7.23614 15.9147 7.76378 15.9147 8.08922 15.5893L13.0892 10.5893C13.4147 10.2638 13.4147 9.73619 13.0892 9.41075L8.08922 4.41075C7.76378 4.08531 7.23614 4.08531 6.9107 4.41075C6.58527 4.73619 6.58527 5.26382 6.9107 5.58926L11.3214 10Z" fill="white"/>
        </mask>
        <g mask={ `url(#${id})` }>
          <rect width="20" height="20" fill="#45B8F3"/>
        </g>
      </svg>
    </SVGContainer>
  );
};

const TripImage = styled.div<{ image: string }>`
  width: var(--card-height);
  height: 100%;
  background-image: url("${props => props.image }");
  background-size: cover;
  background-position: center;
`;

interface TCProps {
  name: string
  image?: string
  description?: string 
  time?: number
  distance?: number
  placesNumber?: number
  likes?: number
  onClick?: any
}

export default TripCard;
