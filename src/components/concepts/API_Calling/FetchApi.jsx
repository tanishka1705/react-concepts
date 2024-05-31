import React, { useEffect } from "react";

export default function FetchApi() {

  //fetch api syntax
  useEffect(() => {
    fetch("https://dummyjson.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);

  //fetchapi using async await syntax
  // async function fetchUsers(){

  // }

  return (
    <div>
      <h1>Fetch API</h1>
    </div>
  );
}
