import { RoundedBox } from "@react-three/drei";
import { useRef } from "react";

export const AnimatedBox = ({ boxPositions, ...props }) => {
  const box = useRef();

  return (
    <group {...props}>
      <RoundedBox
        scale={0.5}
        position-x={boxPositions[0].x}
        position-y={boxPositions[0].y}
        position-z={boxPositions[0].z}
        ref={box}
      >
        <meshStandardMaterial color="white" />
      </RoundedBox>
    </group>
  );
};
