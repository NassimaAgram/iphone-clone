import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
            <div className="relative">
              <div className="h-24 w-24 rounded-full "></div>
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#53596E] animate-spin">
              </div>
            </div>
        </div>
      </div>
    </Html>
  )
}

export default Loader