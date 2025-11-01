import Image from "next/image"
import Link from "next/link"

import { APP_NAME } from "@/lib/constants"

import Menu from "./menu"

const Header = () => {
  return (
    <>
      <header className='w-full border-b'>
        <div className='wrapper flex-between'>
          <div className='flex-start'>
            <Link className='flex-start' href='/'>
              <Image
                src='/images/logo.png'
                alt={` ${APP_NAME} logo `}
                width={48}
                height={48}
                priority={true}
              />
              <span className='hidden lg:inline-block text-2xl font-bold ml-3'>
                {APP_NAME}
              </span>
            </Link>
          </div>
          <div className='space-x-2'>
            <Menu />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
