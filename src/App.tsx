import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styled from 'styled-components';
import './App.css'

type LayoutProps = {
  gap: number,
}

const Row = styled.div<LayoutProps>
 display: flex;
 flex-direction: Row;
 gap: $((props)=> props.gap)px;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
    </div>
  )
}

export default App
