"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function CursorEffect() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0.5, y: 0.5 })
  const lastMousePosition = useRef({ x: 0.5, y: 0.5 })
  const isTouchDevice = useRef(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Check if it's a touch device
    isTouchDevice.current = "ontouchstart" in window || navigator.maxTouchPoints > 0

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(
      -1, // left
      1, // right
      1, // top
      -1, // bottom
      0.1,
      1000,
    )
    camera.position.z = 1

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Create a plane that covers the entire screen
    const geometry = new THREE.PlaneGeometry(2, 2)

    // Create shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uLastMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uIntensity: { value: isTouchDevice.current ? 0.15 : 0.25 },
      },
      vertexShader: `
        varying vec2 vUv;
        
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec2 uLastMouse;
        uniform vec2 uResolution;
        uniform float uIntensity;
        
        varying vec2 vUv;
        
        void main() {
          // Calculate aspect ratio
          vec2 ratio = vec2(
            min(uResolution.x / uResolution.y, 1.0),
            min(uResolution.y / uResolution.x, 1.0)
          );
          
          // Adjust UV coordinates based on aspect ratio
          vec2 uv = vUv * ratio;
          vec2 mouse = uMouse * ratio;
          
          // Calculate distance from current pixel to mouse
          float dist = distance(uv, mouse);
          
          // Create ripple effect with smooth falloff
          float strength = uIntensity / (dist * 8.0 + 0.1);
          strength = clamp(strength, 0.0, 1.0);
          
          // Create gradient colors based on distance and strength
          vec3 deepPurple = vec3(0.059, 0.0, 0.102); // #0F001A
          vec3 lightPurple = vec3(0.729, 0.408, 1.0); // #BA68FF
          vec3 white = vec3(1.0, 1.0, 1.0);
          
          // Mix colors based on distance
          vec3 color = mix(deepPurple, lightPurple, smoothstep(0.0, 0.5, strength));
          color = mix(color, white, smoothstep(0.5, 1.0, strength));
          
          // Apply ripple effect with opacity
          float alpha = strength * 0.6;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
    })

    const plane = new THREE.Mesh(geometry, material)
    scene.add(plane)

    // Handle mouse movement
    const onMouseMove = (event: MouseEvent | TouchEvent) => {
      lastMousePosition.current.x = mousePosition.current.x
      lastMousePosition.current.y = mousePosition.current.y

      if ("touches" in event) {
        mousePosition.current.x = event.touches[0].clientX / window.innerWidth
        mousePosition.current.y = 1 - event.touches[0].clientY / window.innerHeight
      } else {
        mousePosition.current.x = event.clientX / window.innerWidth
        mousePosition.current.y = 1 - event.clientY / window.innerHeight
      }
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("touchmove", onMouseMove, { passive: true })

    // Handle window resize
    const onResize = () => {
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", onResize)

    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Update uniforms
      material.uniforms.uTime.value = elapsedTime
      material.uniforms.uMouse.value.set(mousePosition.current.x, mousePosition.current.y)
      material.uniforms.uLastMouse.value.set(lastMousePosition.current.x, lastMousePosition.current.y)

      // Render
      renderer.render(scene, camera)

      // Request next frame
      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("touchmove", onMouseMove)
      window.removeEventListener("resize", onResize)

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose resources
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-50" aria-hidden="true" />
  )
}

