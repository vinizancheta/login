
import { createClient } from "@supabase/supabase-js";
import {Auth} from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";



const supabase = createClient(
    "https://xzxuawqjlbokcliqdple.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6eHVhd3FqbGJva2NsaXFkcGxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MjMyOTAsImV4cCI6MjA0NDM5OTI5MH0.hKFNLEKEJPmh2e5qcozs1E15AkYvCujlGokRUBtwgys"
);

function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async(event)=>{
        if (event !== "SIGNED_OUT"){
            navigate("/success");
            //foward to success Url
        } else {
            navigate("/");
            //foward to location:3000
        }
    })

  return (
    <div className="App">
      <header className="App-header">
        <Auth
        supabaseClient = {supabase}
        appearance = {{theme:ThemeSupa}}
        theme = "dark"
        providers = {["discord"]}
        />        
      </header>
    </div>
  );
}

export default Login;
