import { createClient } from '@supabase/supabase-js';

const URL = import.meta.env.VITE_URL;
const APP_KEY = import.meta.env.VITE_APP_KEY;
export const supabase = createClient(URL, APP_KEY);
