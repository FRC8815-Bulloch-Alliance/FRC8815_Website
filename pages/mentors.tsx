// pages/mentors.tsx
import type { NextPage } from 'next';
import Layout from './components/layout';
import Head from 'next/head';

export default function Mentors() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Mentors</title>
        </Head>
        <h1 className="text-6xl">Meet the Mentors</h1>
        <div className="flex">
          <div>
            <h3 className="text-3xl">James Walker</h3>
          </div>
          <div>
            <h3 className="text-3xl">Jonathan Nguyen</h3>
          </div>
          <div>
            <h3 className="text-3xl">Cameron Stuart</h3>
          </div>
          <div>
            <h3 className="text-3xl">Adam Head</h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}