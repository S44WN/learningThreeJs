import { Environment, useGLTF, OrbitControls } from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <OrbitControls makeDefault />

      <Environment preset="city" />

      <color args={["#241a1a"]} attach="background" />

      <primitive object={computer.scene} />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
