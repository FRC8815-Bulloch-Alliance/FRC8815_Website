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

        <div className="flex items-center justify-between space-x-2">
          {/* This will serve as a container for the text on the 'hero' page */}
          <div className="w-4/12 h-full border border-neutral-400 rounded-md px-4 py-4 mx-auto" >
            <h1 className="text-5xl font-medium">
              Welcome!
            </h1>
            <br />
            <p className="leading-relaxed">
              We are FRC Team 8815. Having started the program in 2022, we plan on bringing
              STEM to as many high school students in the Bulloch County area as we can support.
            </p>
            <br />
            <h2 className="text-3xl font-medium">What we do</h2>
            <p className="leading-relaxed">
              Our goal is to expose students to engineering and practical experience through building
              out robots for the FIRST Robotics Competition. As we mature as a program, we will work towards
              community outreach.
            </p>
            <p>

            </p>
          </div>
          {/* This will serve a as container for the hero image */}
          <div className="w-1/2 h-full mx-auto">
            <Image
              src={MidRoundImg}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Home
