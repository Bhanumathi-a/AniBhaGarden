"use client"

import { Button } from "@/components/ui/button"
import { APP_NAME } from "@/lib/constants"
import Image from "next/image"

const NotFoundPage = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen'>
      <Image
        src='/images/logo.png'
        alt={`  logo - Page Not Found! `}
        width={60}
        height={60}
        priority={true}
      />
      <div className='p-3 w-1/3 rounded-lg shadow-md text-center'>
        <h2 className='font-bold text-3xl mb-4'>Page Not Found!</h2>
        <p className='text-destructive'>Requested page could not find</p>
        <Button
          variant='outline'
          className='mt-4 ml-2 cursor-pointer'
          onClick={() => (window.location.href = "/")}>
          Back to Home
        </Button>
      </div>
      {/* <APP_NAME /> */}
    </div>
  )
}

export default NotFoundPage
