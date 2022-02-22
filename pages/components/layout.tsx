import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <div className="flex justify-center items-center text-gray-300 bg-gray-900 h-screen w-screen">
        <div className="w-10/12 mx-auto">
          <Navbar />
          <main className="h-full w-full my-4">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}