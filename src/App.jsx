import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import TicketsBoard from "./Components/TicketCards/TicketsBoard";
import { useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [TaskState, SetTaskState] = useState(0);

  const [ResolvedTask, SetResolvedTask] = useState(0);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="rounded-xl border border-black/10 bg-white shadow-lg"
        bodyClassName="text-sm font-medium text-neutral-900"
        progressClassName="bg-blue-600"
      />

      <Navbar> </Navbar>

      <Banner TaskState={TaskState} ResolvedTask={ResolvedTask}></Banner>

      <TicketsBoard
        SetTaskState={SetTaskState}
        SetResolvedTask={SetResolvedTask}
      >
        {" "}
      </TicketsBoard>

      <Footer> </Footer>
    </div>
  );
}

export default App;
