'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export default function NotesClientPage() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])

  return (
    <div>
      <h1>Notes (Client-side)</h1>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </div>
  )
} 