import Footer from "@/components/footer"
import Header from "@/components/shared/header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex flex-col h-full'>
      <Header />
      <main className='flex-1 wrapper h-full'>{children}</main>
      <Footer />
    </div>
  )
}
