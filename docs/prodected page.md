## Next steps
- [ ] Create some tables and insert some data
Head over to the Table Editor for your Supabase project to create a table and insert some example data. If you're stuck for creativity, you can copy and paste the following into the SQL Editor and click RUN!
```
create table notes (
  id bigserial primary key,
  title text
);

insert into notes(title)
values
  ('Today I created a Supabase project.'),
  ('I added some data and queried it from Next.js.'),
  ('It was awesome!');
```

- [ ] Query Supabase data from Next.js
To create a Supabase client and query data from an Async Server Component, create a new page.tsx file at /app/notes/page.tsx and add the following.

```
import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: notes } = await supabase.from('notes').select()

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
```

Alternatively, you can use a Client Component.

```
'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
```

- [ ] Build in a weekend and scale to millions!
You're ready to launch your product to the world! 🚀