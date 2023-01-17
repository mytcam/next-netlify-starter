import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Learn my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <h1>
          Hello world
        </h1>
        
      </main>

      <Footer />
    </div>
  )
}
