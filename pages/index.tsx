import type { NextPage } from 'next'
import { Layout } from './../layouts/Layout'
const Home: NextPage = () => {
  return (
    <Layout>
    <section className="mt-16">
      <h1 className="text-7xl font-bold">Hi I'm <span className="dark:text-purple-600">Cand</span></h1>
      <h3 className="text-4xl my-3">I am Web Designer</h3>
      <p className="text-gray-700 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quibusdam autem doloremque beatae iure, nihil fugit doloribus cum soluta modi!</p>
    </section>
    </Layout>
  )
}

export default Home