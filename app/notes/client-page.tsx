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
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-foreground">
        Notes (Client-side)
      </h1>
      <div className="bg-card border rounded-lg shadow-sm">
        <pre className="p-6 overflow-auto text-sm text-card-foreground">
          {JSON.stringify(notes, null, 2)}
        </pre>
      </div>
    </div>
  )
} 