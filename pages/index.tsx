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
        <div className="md:max-w-6xl border rounded-md mx-auto">
          <div className="md:flex items-center">
            {/* This will serve as a container for the text on the 'hero' page */}
            <div className="h-full p-8 mx-auto" >
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
                We are a team of volunteer mentors with a goal of providing the tools and the
                environment for students to use the the knowledge that they have learned in
                school and focus it into building robots and relationships with the community.
              </p>
              <p>

              </p>
            </div>
            {/* This will serve a as container for the hero image */}
            <div className="w-1/2 md:shrink-0 h-full">
              <Image
                src={MidRoundImg}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Home
