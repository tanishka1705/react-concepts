import React from 'react'

function ResultComponent({marks}) {
    console.log('Result Component')
  return (
    <div>Result is : {marks}</div>
  )
}
export default React.memo(ResultComponent)