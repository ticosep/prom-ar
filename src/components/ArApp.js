import React, { Component } from "react";

import { AFrameRenderer, Marker } from "react-web-ar";
import patternPatt from "../patterns/pattern-m.patt";

export class ArApp extends Component {
  render() {
    return (
      <AFrameRenderer
        arToolKit={{
          sourceType: "webcam",
        }}
        stats
      >
        <Marker
          parameters={{
            preset: "pattern",
            type: "pattern",
            url: patternPatt,
          }}
        >
          <a-box
            color="pink"
            material="opacity: 1;"
            position="0 0.003 0"
            scale="0.4 0.4 0.4"
          >
            <a-animation
              attribute="rotation"
              to="360 0 0"
              dur="5000"
              easing="linear"
              repeat="indefinite"
            />
          </a-box>
        </Marker>
      </AFrameRenderer>
    );
  }
}
