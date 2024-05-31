import React from "react";

function NameComponent({ name }) {
  console.log("Name Component");
  return <div>Name is: {name}</div>;
}
export default React.memo(NameComponent);
