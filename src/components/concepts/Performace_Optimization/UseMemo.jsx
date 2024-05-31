import React from 'react'
import HeavyCalculation from './components/HeavyCalculation'

function UseMemo() {
  return (
    <div>
        <h2>useMemo() hook</h2>
        <HeavyCalculation marks={90} subject={'maths'}/>
    </div>
  )
}

export default UseMemo