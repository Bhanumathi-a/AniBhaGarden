import { APP_NAME } from "@/lib/constants"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='border-t'>
      <div className='wrapper p-5 flex-between'>
        <strong>{`${APP_NAME}`}</strong>
        <span>{`©${currentYear} All Rights Reserved `}</span>
      </div>
    </footer>
  )
}

export default Footer
