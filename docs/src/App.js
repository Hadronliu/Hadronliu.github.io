import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box (props) {
  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function App () {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[-1.2, 1, 0]} />
      <Box position={[-1.2, 2, 0]} />
      <Box position={[-2.2, 0, 1]} />
      <Box position={[-3.2, 0, 1]} />
      <Box position={[1.2, 0, 0]} />
      <Box position={[1.2, 1, 0]} />
      <Box position={[1.2, 2, 0]} />
      <Box position={[2.2, 0, 1]} />
      <Box position={[3.2, 0, 2]} />
    </Canvas>
  )
}