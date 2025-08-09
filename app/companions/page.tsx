import CompanionCard from '@/components/CompanionCard';
import SearchInput from '@/components/SearchInput';
import SubjectFilter from '@/components/SubjectFilter';
import { getAllCompanions } from '@/lib/actions/companions.action';
import { getSubjectColor } from '@/lib/utils';
import React from 'react'

const page = async({searchParams}:SearchParams) => {
 const filter = await searchParams;
  const subject =  filter.subject ? filter.subject : '';
  const topic = filter.topic ? filter.topic : '';

  const companions = await getAllCompanions({ subject, topic });
  console.log("Companions:", companions);
  return (
   <main>
    <section className="flex justify-between gap-4 max-sm:flex-col">
      <h1>Companion Library</h1>
      <div className="flex gap-4">
        <SearchInput/>
        <SubjectFilter/>
      </div>
    </section>
    <div className="companions-grid">
      {
        companions.map((companion) => (
          <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)} />
        ))
      }
    </div>

   </main>
  )
}

export default page