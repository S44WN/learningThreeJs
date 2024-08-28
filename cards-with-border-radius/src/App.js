import { Canvas } from '@react-three/fiber'
import { Environment, ScrollControls } from '@react-three/drei'
import Carousel from './components/Carousel'
import Rig from './components/Rig'
import Banner from './components/Banner'

export const App = () => (
  <Canvas
    camera={{
      fov: 25,
      near: 0.1,
      far: 2000,
      position: [0, 1, 5]
    }}>
    {/* <fog attach="fog" args={['#a79', 8.5, 12]} /> */}
    <ScrollControls pages={4} infinite>
      <Rig rotation={[0, 0, 0.1]} position={[0, -0.5, 0]}>
        <Carousel />
      </Rig>
      <Banner position={[0, -0.65, 0]} />
    </ScrollControls>
    {/* <Environment preset="dawn" background blur={0.5} /> */}
  </Canvas>
)
