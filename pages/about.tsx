import type { NextPage } from 'next';
import Layout from './components/layout';
import Head from 'next/head';

export default function About() {
  return (
    <Layout>
      <div>
        <Head>
          <title>About Page</title>
        </Head>

        <main>
          This is the about page.
        </main>
      </div>
    </Layout>
  )
}
