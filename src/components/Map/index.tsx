import React, { Component, PureComponent } from 'react';
import { compose, withProps } from 'recompose';
import { YMaps, Map } from 'react-yandex-maps';


class MapView extends Component {
  render () {
    return (
      <YMaps>
        <Map style={{ width: '100vw', height: '100vh' }} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </YMaps>
    )
  }
}


export default MapView;
