import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function NotesPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: notes } = await supabase.from('notes').select()
  
  return (
    <div>
      <h1>Notes</h1>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </div>
  )
}