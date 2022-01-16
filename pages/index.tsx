import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from './components/layout';
import Image from 'next/image';
import tripleClimb from '../public/TripleClimbHeroImage.jpg';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="">
        <Head>
          <title>Bulloch Alliance</title>
        </Head>

        <div className="flex items-center space-x-3">
          {/* This will serve as a container for the text on the 'hero' page */}
          <div className="w-6/12 bg-neutral-700 rounded-lg px-4 py-4" >
            <h1 className="text-5xl">
              Bulloch Alliance
            </h1>
            <br />
            <p>
              We are FRC Team 8815. Our goal is to help high school students in the Bulloch County area
              expand their horizons through exposure through STEM.
            </p>
          </div>
          {/* This will serve a as container for the hero image */}
          <div className="w-6/12">
            <Image
              src={tripleClimb}
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
