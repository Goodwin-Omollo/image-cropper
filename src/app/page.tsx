import Hero from '@/src/components/hero'
import SetUp from '@/src/components/setUp'
import TestPage from '../components/trial'

const Home = () => {
  return (
    <div className='mt-12 space-y-6 max-w-5xl mx-auto px-3'>
      <Hero />
      <TestPage />
      <SetUp />
    </div>
  )
}

export default Home