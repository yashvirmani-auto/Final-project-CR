"use client";

import SubmitButton from "./SubmitButton"
import {useRouter} from "next/navigation"
const Hero = () => {
  const router = useRouter()

  const handleRedirect = () => {
    router.push("./dashboard")
  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          WorldMeter, - Track your country
        </h1>
        <p className='hero__subtitle'>
        find the countries ranking based on multiple parameters!
        </p>
        <SubmitButton
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleRedirect}
        />
      </div>
    </div>
  )
}

export default Hero