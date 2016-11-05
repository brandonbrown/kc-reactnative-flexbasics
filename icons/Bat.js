import React, { Component } from 'react'

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

/*
Icons by Carla Dias from the Noun Project

https://thenounproject.com/carla.santos.dias.82/collection/halloween/
*/

export default class Bat extends Component {
    render() {
        return (
            <Svg
              height="71.6"
              width="87.3"
            >
            <Path d="M87.3,1.6c-12.8-4-22.9,0.5-27.4,3.1v0c0,0-2.3,1.3-6.6,4.2l4.3-0.5c0.9,13.4-9.5,18.1-9.5,18.1L35,10.3
c4.5,8.4,0.2,13.2-1.1,14.2c-1.2,1-6.9,4.2-14.1-2l13.1,16.3c0,0-6.7,8.9-19.2,5.6l1.7-5c-1.9,1.8-3.3,3.2-4.2,4.2c0,0,0,0,0,0
c0,0-12.8,10-11.1,28.2c0,0,5.4-5.2,12.5-1.9c0,0,6.3-5.4,13.6-0.7c0,0,12.9-19,41.1-3c-9.6-31,11.7-39.5,11.7-39.5
c-3-8.1,3.6-13.1,3.6-13.1C81.1,5.8,87.3,1.6,87.3,1.6z"/>
            </Svg>
        );
    }
}
