import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";

export default function TicketsBoard({ SetTaskState, SetResolvedTask }) {
 
  // all tickets (left side)
  const [tickets, setTickets] = useState([]);
  // selected tickets (Task Status) — NOW AN ARRAY
  const [selected, setSelected] = useState([]);
  // resolved tickets
  const [resolved, setResolved] = useState([]);

  // load tickets 
  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.log("Failed to load tickets.json:", err));
  }, []);

  // add a ticket to Task Status 
  const selectTicket = (ticket) => {
    
    toast.info("Task added to the queue!");
    const exists = selected.some((t) => t.id === ticket.id);
    if (exists) return;

    setSelected((prev) => [...prev, ticket]);
    SetTaskState((prev) => prev + 1);
  };

  // complete ONE selected task 
  const completeTask = (task) => {
   
    toast.success("Task has been resolved!");

    SetTaskState((prev) => prev - 1);
    SetResolvedTask((prev) => prev + 1);
    // move -> resolved
    setResolved((prev) => [{ ...task, status: "Resolved" }, ...prev]);

    // remove from left tickets
    setTickets((prev) => prev.filter((t) => t.id !== task.id));

    // remove from selected list
    setSelected((prev) => prev.filter((t) => t.id !== task.id));
  };

  const priorityBadge = (priority) => {
    const base = "text-xs font-semibold px-2 py-1 rounded-full";
    if (priority === "High") return `${base} bg-rose-100 text-rose-700`;
    if (priority === "Medium") return `${base} bg-amber-100 text-amber-700`;
    return `${base} bg-sky-100 text-sky-700`;
  };

  const statusBadge = (status) => {
    const base = "text-xs font-semibold px-2 py-1 rounded-full";
    if (status === "Open") return `${base} bg-emerald-100 text-emerald-700`;
    if (status === "In-Progress")
      return `${base} bg-purple-100 text-purple-700`;
    if (status === "Resolved") return `${base} bg-gray-100 text-gray-700`;
    return `${base} bg-gray-100 text-gray-700`;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">
            Customer Tickets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.map((t) => (
              <button
                key={t.id}
                onClick={() => selectTicket(t)}
                className="text-left rounded-xl border border-black/5 bg-white p-4 shadow-sm
                           transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-sm text-neutral-900">
                    {t.title}
                  </p>
                  <span className={statusBadge(t.status)}>{t.status}</span>
                </div>

                <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                  {t.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs text-neutral-500">
                    {t.customer} • {t.createdAt}
                  </p>
                  <span className={priorityBadge(t.priority)}>
                    {t.priority}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

       
        <div className="space-y-6">
         
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-neutral-900">
              Task Status
            </h3>
            <p className="mt-1 text-xs text-neutral-500">
              Click multiple tickets to add them here
            </p>

            {selected.length === 0 ? (
              <div className="mt-4 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-500">
                No task selected yet.
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                {selected.map((task) => (
                  <div
                    key={task.id}
                    className="rounded-lg border border-black/5 bg-white p-3"
                  >
                    <p className="font-semibold text-neutral-900">
                      {task.title}
                    </p>
                    <p className="mt-1 text-sm text-neutral-600 line-clamp-3">
                      {task.description}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className={statusBadge(task.status)}>
                        {task.status}
                      </span>
                      <span className={priorityBadge(task.priority)}>
                        {task.priority}
                      </span>
                    </div>

                    <button
                      onClick={() => completeTask(task)}
                      className="mt-3 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white
                                 transition hover:bg-blue-700 active:bg-blue-800"
                    >
                      Complete Task
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

         
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-neutral-900">
              Resolved Task
            </h3>

            {resolved.length === 0 ? (
              <p className="mt-3 text-sm text-neutral-500">
                No resolved tasks yet.
              </p>
            ) : (
              <div className="mt-4 space-y-3">
                {resolved.map((t) => (
                  <div
                    key={t.id}
                    className="rounded-lg bg-emerald-50 p-3 border border-emerald-100"
                  >
                    <p className="text-sm font-semibold text-emerald-900">
                      {t.title}
                    </p>
                    <p className="mt-1 text-xs text-emerald-700">
                      {t.customer} • {t.createdAt}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
