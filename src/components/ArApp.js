import patternPatt from "../patterns/pattern-m.patt";
import shiba from "../models/shiba.glb";

export const ArApp = () => {
  return (
    <a-scene
      vr-mode-ui="enabled: false;"
      arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
    >
      <a-marker-camera preset="pattern" type="pattern" url={patternPatt}>
        <a-entity gltf-model={shiba} rotation="-90 0 0"></a-entity>
      </a-marker-camera>
      <a-entity
        camera
        orbit-controls="target: 0 1.6 -0.5; minDistance: 0.5; maxDistance: 180; initialPosition: 0 5 15"
      ></a-entity>
    </a-scene>
  );
};
