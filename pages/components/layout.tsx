import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <div className="text-gray-300 bg-neutral-800 h-screen w-screen">
        <div className="w-10/12 mx-auto">
          <Navbar />
          <main className="w-full mt-4">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}