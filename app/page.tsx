import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>
        Popular Companions
      </h1>
      <section className='home-section'>
        <CompanionCard 
        id="1"
        name="Neura the brainy explorer"
        topic="Neural Network of the Brain"
        duration={45}
        subject="science"
        color="#f0f0f0"
        />
        <CompanionCard 
        id="2"
        name="Robo the tech whiz"
        topic="Artificial Intelligence"
        duration={30}
        subject="technology"
        color="#4caf50"
        />
        <CompanionCard 
        id="3"
        name="Lexi the language guru"
        topic="Natural Language Processing"
        duration={60}
        subject="language"
        color="#f44336"
        />
      </section>
      <section className='home-section'>
        <CompanionsList 
        title="Recently completed Sessions"
        companions ={recentSessions}
        className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page