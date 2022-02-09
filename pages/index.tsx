import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from './components/layout';
import Image from 'next/image';
import tripleClimb from '../public/TripleClimbHeroImage.jpg';
import MidRoundImg from '../public/MidRoundImage.jpg';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="">
        <Head>
          <title>Bulloch Alliance</title>
        </Head>
        <div className="h-full">
          <div className="absolute inset-y-0 w-5/6 flex items-center justify-center">
            <div className="flex items-center">
              {/* This will serve as a container for the text on the 'hero' page */}
              <div className="p-2 m-2" >
                <h1 className="text-5xl font-medium">
                  Welcome!
                </h1>
                <br />
                <p className="leading-relaxed">
                  Bulloch Alliance is a team of motivated, innovative high school students
                  and dedicated mentors that competes in the FIRST Robotics Competition
                  as FIRST Team 8815.
                </p>
                <br />
                <h2 className="text-3xl font-medium">Mission Statement</h2>
                <p className="leading-relaxed">
                  Our mission is to galvanize ourselves and our fellow peers into the development of educational STEM
                  (science, technology, engineering, and mathematics) programs in
                  in Southeast Georgia by introducing students to FIRST Lego League
                  and FIRST Tech Challenge team in the upcoming seasons so that students
                  of all ages have the opportunity to grow and learn in an environment
                  For Inspiration and Recognition of Science and Technology.
                </p>
                <p>

                </p>
              </div>
              {/* This will serve a as container for the hero image */}
              <div className="w-5/6">
                <div className="">
                  <Image
                    src={MidRoundImg}
                    layout="responsive"
                    className=""
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
