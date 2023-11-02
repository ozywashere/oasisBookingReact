import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = https://xehcqozaniusnvseedui.supabase.co;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
