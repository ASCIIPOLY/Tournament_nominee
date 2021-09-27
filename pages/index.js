import Head from 'next/head'
import CardList from '../components/CardList';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <CardList/>
    </>
  )
}
