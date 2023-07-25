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

function Sphere (props) {
  const mesh = useRef()

  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
  })

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  )
}

function Cone (props) {

  const mesh = useRef()

  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01
  })

  return (
    <mesh {...props} ref={mesh}>
      <coneGeometry args={[1, 2, 32]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  )
}

function Cylinder (props) {
  const mesh = useRef()

  useFrame((state, delta) => {
    mesh.current.rotation.z += 0.01
  })

  return (
    <mesh {...props} ref={mesh}>
      <cylinderGeometry args={[1, 1, 2, 32]} />
      <meshStandardMaterial color="teal" />
    </mesh>
  )
}

export default function App () {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[20, 20, 20]} />
      {/* <Box position={[0, 0, 0]} /> */}
      {/* <Box position={[0, 1, 0]} /> */}
      <Box position={[1, 0, 1]} />
      {/* <ambientLight intensity={0.5} /> */}
      <Sphere position={[2, 2, 0]} />
      <Cone position={[0, 0, 0]} />
      <Cylinder position={[0, -2, 0]} />
    </Canvas>
  )
}