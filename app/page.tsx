import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <AuthButton />
        </div>
      </nav>
      {
        user ? (
          <div>
            <p>Email : {user.email}</p>
            <p>ID : {user.id}</p>
          </div>
        ) : (<div>
          Not logged in
        </div>)
      }
    </div>
  );
}
