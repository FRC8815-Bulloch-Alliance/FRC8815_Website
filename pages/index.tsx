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

        <div className="flex-auto items-center">
          <div className="w-7/12">
            <h1 className="text-5xl">
              Bulloch Alliance
            </h1>
            <p>
              We are FRC Team 8815.
            </p>
          </div>
          <div className="">
            <Image
              src={tripleClimb}
              alt="Image of Triple Climb"
              width={400}
              height={400}
            />
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Home
