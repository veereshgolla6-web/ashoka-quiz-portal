window.AQP_SUPABASE_URL="https://rvgmbpvksoyflfcebxyo.supabase.co";
window.AQP_SUPABASE_PUBLISHABLE_KEY="sb_publishable_1IJxzL-dd9jIUFtjzzkAqQ_EGey2EUO";
window.aqpSupabase=window.supabase.createClient(
  window.AQP_SUPABASE_URL,
  window.AQP_SUPABASE_PUBLISHABLE_KEY,
  {auth:{autoRefreshToken:true,persistSession:true,detectSessionInUrl:true}}
);