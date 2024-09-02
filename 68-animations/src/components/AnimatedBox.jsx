import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const AnimatedBox = ({ boxPositions, ...props }) => {
  const box = useRef();

  useFrame(({ clock }) => {
    const seconds = parseInt(clock.getElapsedTime());
    console.log(seconds);

    const targetPosition = boxPositions[seconds % boxPositions.length]; // 0, 1, 2, 3

    console.log(targetPosition);
  });
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
