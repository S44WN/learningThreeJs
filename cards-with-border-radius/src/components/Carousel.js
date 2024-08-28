import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from '../utils/maath'
import { Image } from '@react-three/drei'
import '../utils/bentPlaneGeometry'

function Carousel({ radius = 2.4, count = 10 }) {
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      url={`/img${Math.floor(i % 10) + 1}_.jpg`}
      position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ))
}

function Card({ url, ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)

  const pointerOver = (e) => (e.stopPropagation(), hover(true))
  const pointerOut = () => hover(false)

  useFrame((state, delta) => {
    // Update the scale and material radius/zoom
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta) // Scale
    easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta) // Material radius
    easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta) // Material zoom
  })

  return (
    <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
      <bentPlaneGeometry args={[0.1, 1.25, 1, 20, 20]} />
    </Image>
  )
}

export default Carousel
