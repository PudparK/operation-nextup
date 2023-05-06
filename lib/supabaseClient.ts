import { createClient } from "@supabase/supabase-js";

const url: string = process.env.SUPABASE_URL!;
const apiKey: string = process.env.API_KEY!;

export const supabase = createClient(url, apiKey);
