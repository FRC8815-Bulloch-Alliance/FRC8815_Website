import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from './components/layout';
import Image from 'next/image';
import MidRoundImg from '../public/MidRoundImageWiderRatio.jpg';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="">
        <Head>
          <title>Bulloch Alliance</title>
        </Head>
        <div className="flex items-center justify-center">
          <div className="w-full h-full relative">
            <div className="">
              <Image
                src={MidRoundImg}
                layout="responsive"
                className="rounded-md object-scale-down"
              />
            </div>
            <div className="
          grid grid-cols-1 m-auto absolute top-8 
          left-20 rounded-xl border-4 bg-gray-900 
          w-4/12 h-fit p-4">
              {/* This will serve as a container for the text on the 'hero' page */}
              <div>
                <h1 className="text-8xl font-medium">
                  Welcome!
                </h1>
                <br />
                <p className="leading-relaxed text-xl">
                  Bulloch Alliance is a team of motivated, innovative high school students
                  and dedicated mentors that competes in the FIRST Robotics Competition
                  as FIRST Team 8815.
                </p>
              </div>
              <br />
              <div>
                <h2 className="text-5xl font-medium">Mission Statement</h2>
                <br />
                <p className="leading-relaxed text-xl">
                  Our mission is to galvanize ourselves and our fellow peers into the development of educational STEM
                  (science, technology, engineering, and mathematics) programs in
                  in Southeast Georgia by introducing students to FIRST Lego League
                  and FIRST Tech Challenge team in the upcoming seasons so that students
                  of all ages have the opportunity to grow and learn in an environment
                  For Inspiration and Recognition of Science and Technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
