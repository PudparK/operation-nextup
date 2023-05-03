import { supabase } from "../lib/supabaseClient";

function Page({ profiles }) {
  console.log("profiles:", profiles);
  return (
    <ul>
      {profiles.map((profile) => (
        <li key={profile.id} className="font-sans text-slate-800">
          {profile.username}
        </li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("profiles").select();

  return {
    props: {
      profiles: data,
    },
  };
}

export default Page;
