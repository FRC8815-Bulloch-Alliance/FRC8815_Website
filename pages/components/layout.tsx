import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <div className="text-gray-300 bg-neutral-800 h-screen w-screen relative">
        <div className="w-8/12 m-auto">
          <Navbar />
          <main className="my-9">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}