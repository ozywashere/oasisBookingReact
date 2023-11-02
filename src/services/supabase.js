import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://xehcqozaniusnvseedui.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlaGNxb3phbml1c252c2VlZHVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxMzQ0NTMsImV4cCI6MjAwODcxMDQ1M30.uE75EFyYowMA9eaLlNo1IyTUNhuYU6DqSitVd_ij61A';

export const supabase = createClient(supabaseUrl, supabaseKey);
