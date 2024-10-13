import { createClient } from "@supabase/supabase-js";
import {Auth} from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';



const supabase = createClient(
    "https://xzxuawqjlbokcliqdple.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6eHVhd3FqbGJva2NsaXFkcGxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MjMyOTAsImV4cCI6MjA0NDM5OTI5MH0.hKFNLEKEJPmh2e5qcozs1E15AkYvCujlGokRUBtwgys"
);


function Success() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData () {
        await supabase.auth.getUser().then((value)=>{
            //value.data.user
            if(value.data?.user){
                console.log(value.data.user);
                setUser(value.data.user);
            }
        })
    }
    getUserData();
  },[])

  async function singOutUser(){
    const {error} = await supabase.auth.signOut();
    navigate("/");
  }


  return (
    <div className="App">
      <header className="App-header">
        { Object.keys(user).length !==0 ?
            <>
                <h1>Success</h1>
                <button onClick={()=> singOutUser()}>Sign Out</button>
            </>
        :
            <>
                <h1> User is not logged</h1>
                <button onClick={()=>{navigate("/")}}>Go back home</button>
            
            </>
        }
        
      </header>
    </div>
  );
}

export default Success;
