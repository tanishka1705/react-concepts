import React, { useMemo } from "react";

export default function HeavyCalculation({marks, subject}) {
 
  const  result = useMemo(()=>{
    console.log('inside useMemo');
    return (marks*100)/100
  }, [marks]) 

  return (
    <div>
      <p>Marks of {subject} is {result} </p>
      <p>if a student got 90 marks in both maths and history subject then we'll use useMemo to cache the result and it will not recompute the heavy calculation</p>
    </div>
  );
}
