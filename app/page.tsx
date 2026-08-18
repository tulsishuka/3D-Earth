
import Footer from '@/components/Footer'
import About from '@/components/sections/About'
import Hero from '@/components/sections/Hero'
import Research from '@/components/sections/Research'
import Study from '@/components/sections/Study'
import Technology from '@/components/sections/Technology'

const page = () => {
  return (
    <>
    <main className="bg-[#020617]">

      <Hero />

      <About />
  <Technology />
    <Research />
  <Study/>
  

    

      <Footer />

    </main>
    </>
  )
}

export default page