import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const AnimatedBox = ({ boxPositions, ...props }) => {
  const box = useRef();

  useFrame(({ clock }) => {
    /* 
    Detailed Explanation
Calculate the Index:

seconds % boxPositions.length calculates the index by taking the remainder of seconds divided by the length of the boxPositions array.
This ensures that the index is always a valid position within the array, even as seconds increases indefinitely.
Example: If seconds is 10 and boxPositions.length is 4, then 10 % 4 equals 2. The index will be 2.
Access the Target Position:

boxPositions[seconds % boxPositions.length] uses the calculated index to access the corresponding position in the boxPositions array.
This retrieves the target position for the object based on the elapsed time.
Example: If boxPositions is [pos1, pos2, pos3, pos4] and the index is 2, then boxPositions[2] will be pos3.
Assign to targetPosition:

The retrieved position is then assigned to the targetPosition variable.
This variable can be used later in the function to update the object's position in the 3D scene.

const boxPositions = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 1, z: 1 },
  { x: 2, y: 2, z: 2 },
  { x: 3, y: 3, z: 3 }
];

useFrame(({ clock }) => {
  const seconds = parseInt(clock.getElapsedTime());
  const targetPosition = boxPositions[seconds % boxPositions.length];
  console.log(targetPosition);
});
    
    */
    const seconds = parseInt(clock.getElapsedTime()); //gives time in int seconds from the start of page render like 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 and so on
    const targetPosition = boxPositions[seconds % boxPositions.length]; // 0, 1, 2, 3

    /* 
    lerp() Function:

      THREE.MathUtils.lerp() is a function provided by Three.js that performs linear interpolation between two values.

      Syntax: THREE.MathUtils.lerp(value1, value2, alpha)

      value1 and value2 are the two values to interpolate between.
      alpha is the interpolation factor, which should be between 0 (close to 0 is slower) and 1 (close to 1 is faster).
      The function returns a value that is linearly interpolated between value1 and value2 based on the alpha factor.

    */
    // box.current.position.x = THREE.MathUtils.lerp(
    //   box.current.position.x,
    //   targetPosition.x,
    //   0.05
    // );

    // box.current.position.y = THREE.MathUtils.lerp(
    //   box.current.position.y,
    //   targetPosition.y,
    //   0.05
    // );

    // box.current.position.z = THREE.MathUtils.lerp(
    //   box.current.position.z,
    //   targetPosition.z,
    //   0.05
    // );

    // Vector3.lerp() Function: Vec3 is (x, y, z) and lerp() is linear interpolation

    box.current.position.lerp(targetPosition, 0.05); //result same as above longer code

    box.current.rotation.x += 0.01;
    box.current.rotation.y += 0.01;
    box.current.rotation.z += 0.01;
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
