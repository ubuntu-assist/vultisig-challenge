'use client'

import { motion } from 'framer-motion'

const GridLines = () => {
  return (
    <div className='absolute inset-0 z-1 overflow-hidden'>
      <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <pattern
            id='smallGrid'
            width='20'
            height='20'
            patternUnits='userSpaceOnUse'
          >
            <path
              d='M 20 0 L 0 0 0 20'
              fill='none'
              stroke='rgba(20, 184, 166, 0.1)'
              strokeWidth='0.5'
            />
          </pattern>
          <pattern
            id='grid'
            width='100'
            height='100'
            patternUnits='userSpaceOnUse'
          >
            <rect width='100' height='100' fill='url(#smallGrid)' />
            <path
              d='M 100 0 L 0 0 0 100'
              fill='none'
              stroke='rgba(14, 165, 233, 0.2)'
              strokeWidth='1'
            />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#grid)' />
      </svg>
    </div>
  )
}

const FloatingParticles = () => {
  // Create an array of 50 particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: 2 + Math.random() * 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color:
      Math.random() > 0.5
        ? 'rgba(20, 184, 166, 0.6)'
        : 'rgba(14, 165, 233, 0.6)',
  }))

  return (
    <div className='absolute inset-0 z-1'>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className='absolute rounded-full'
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [
              Math.random() * 40 - 20,
              Math.random() * 40 - 20,
              Math.random() * 40 - 20,
            ],
            y: [
              Math.random() * 40 - 20,
              Math.random() * 40 - 20,
              Math.random() * 40 - 20,
            ],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  )
}

const HexagonMesh = () => {
  // Create an array of 30 hexagons
  const hexagons = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 20 + Math.random() * 40,
    rotation: Math.random() * 360,
  }))

  return (
    <div className='absolute inset-0 z-1'>
      {hexagons.map((hexagon) => (
        <motion.div
          key={hexagon.id}
          className='absolute'
          style={{
            left: `${hexagon.x}%`,
            top: `${hexagon.y}%`,
            width: `${hexagon.size}px`,
            height: `${hexagon.size}px`,
          }}
          initial={{ opacity: 0, rotate: hexagon.rotation }}
          animate={{
            opacity: [0, 0.3, 0],
            rotate: hexagon.rotation + 360,
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polygon
              points='50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25'
              fill='none'
              stroke='rgba(20, 184, 166, 0.3)'
              strokeWidth='1'
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

const CircuitLines = () => {
  // Create 10 random circuit paths
  const circuits = Array.from({ length: 10 }, (_, i) => {
    // Generate a random path with 3-5 points
    const points = []
    const numPoints = 3 + Math.floor(Math.random() * 3)

    for (let j = 0; j < numPoints; j++) {
      points.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })
    }

    return {
      id: i,
      points,
      color: Math.random() > 0.5 ? '#14B8A6' : '#0EA5E9',
      delay: Math.random() * 5,
    }
  })

  return (
    <div className='absolute inset-0 z-1'>
      <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
        {circuits.map((circuit) => {
          // Create SVG path from points
          let pathData = `M ${circuit.points[0].x} ${circuit.points[0].y}`

          for (let i = 1; i < circuit.points.length; i++) {
            // For a more circuit-like appearance, use horizontal and vertical lines
            const prevPoint = circuit.points[i - 1]
            const currPoint = circuit.points[i]

            if (i % 2 === 1) {
              // Horizontal first, then vertical
              pathData += ` L ${currPoint.x} ${prevPoint.y} L ${currPoint.x} ${currPoint.y}`
            } else {
              // Vertical first, then horizontal
              pathData += ` L ${prevPoint.x} ${currPoint.y} L ${currPoint.x} ${currPoint.y}`
            }
          }

          return (
            <motion.path
              key={circuit.id}
              d={pathData}
              strokeDasharray='5,5'
              stroke={circuit.color}
              strokeWidth='1'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 7,
                delay: circuit.delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 3,
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}

const CreativeBackgroundPattern = () => {
  return (
    <div className='absolute inset-0 overflow-hidden'>
      <GridLines />
      <HexagonMesh />
      <CircuitLines />
      <FloatingParticles />
    </div>
  )
}

export { CreativeBackgroundPattern }
