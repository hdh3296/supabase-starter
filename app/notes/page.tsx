import { createClient } from '@/utils/supabase/server'

export default async function NotesPage() {
  const supabase = await createClient()
  
  try {
    const { data: notes } = await supabase.from('notes').select('*')
    
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Notes</h1>
        <div className="bg-card border rounded-lg shadow-sm">
          <pre className="p-6 overflow-auto text-sm text-card-foreground">
            {JSON.stringify(notes, null, 2)}
          </pre>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error:', error)
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-destructive font-medium">Failed to load notes</div>
      </div>
    )
  }
}