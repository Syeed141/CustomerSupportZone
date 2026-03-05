import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import TicketsBoard from './Components/TicketCards/TicketsBoard'
import { useState } from 'react';

function App() {
  
const [TaskState , SetTaskState] = useState(0)

const [ResolvedTask, SetResolvedTask] = useState(0)


  return (

    
   
      <div>

        
        
        <Navbar> </Navbar>

        <Banner TaskState={TaskState} ResolvedTask={ResolvedTask}></Banner>

        <TicketsBoard  SetTaskState={SetTaskState} SetResolvedTask = {SetResolvedTask}> </TicketsBoard>

        <Footer> </Footer>
       
      </div>
   
  )
}

export default App
