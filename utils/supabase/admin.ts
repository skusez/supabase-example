'server-only'

import { Database } from '@/database.types'
import { createClient } from '@supabase/supabase-js'

export function createAdminClient() {
  if(!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Supabase URL or Service Role Key is not set')
  }
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
     auth: {
      autoRefreshToken: false,
      persistSession: false,
     }
    }
  )
}
