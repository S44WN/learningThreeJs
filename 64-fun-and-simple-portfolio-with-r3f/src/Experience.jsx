import { OrbitControls } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <color args={["#241a1a"]} attach="background" />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
