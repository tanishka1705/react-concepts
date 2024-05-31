import React from 'react'
import NameComponent from './components/NameComponent'
import ResultComponent from './components/ResultComponent'

function ReactMemo() {
  return (
    <div>
        <h2>React.memo()</h2>
        <NameComponent name='Riyan'/>
        <ResultComponent marks={80}/>
        <p>Before wrapping the NameComponent and ResultComponent in  React.memo() any change happens in props of any
          one component then it re-renders both the component but after wrapping the components in React.memo() only the componets whose props are change
          is being re-render hence it optimizes the performace of our application.</p>
    </div>
  )
}

export default ReactMemo