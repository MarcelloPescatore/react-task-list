export default function AppMain() {
    const tasks = [
        {
          id: 1,
          title: "Implementare la homepage",
          priority: 1,
          estimatedTime: 120,
          state: "completed"
        },
        {
          id: 2,
          title: "Sviluppare il menu di navigazione",
          priority: 2,
          estimatedTime: 60,
          state: "completed"
        },
        {
          id: 3,
          title: "Creare il footer del sito",
          priority: 3,
          estimatedTime: 30,
          state: "completed"
        },
        {
          id: 4,
          title: "Ottimizzare le performance",
          priority: 1,
          estimatedTime: 180,
          state: "completed"
        },
        {
          id: 5,
          title: "Scrivere test per i componenti",
          priority: 2,
          estimatedTime: 90,
          state: "completed"
        },
        {
          id: 6,
          title: "Implementare la pagina dei contatti",
          priority: 3,
          estimatedTime: 60,
          state: "completed"
        },
        {
          id: 7,
          title: "Aggiungere animazioni CSS",
          priority: 2,
          estimatedTime: 30,
          state: "backlog"
        },
        {
          id: 8,
          title: "Integrare l'API di autenticazione",
          priority: 1,
          estimatedTime: 120,
          state: "in_progress"
        },
        {
          id: 9,
          title: "Aggiornare la documentazione",
          priority: 3,
          estimatedTime: 60,
          state: "backlog"
        },
        {
          id: 10,
          title: "Rifattorizzare il codice CSS",
          priority: 2,
          estimatedTime: 90,
          state: "in_progress"
        }
    ];
    
    const completedTasks = tasks.filter(task => task.state === 'completed')
    const currentTasks = tasks.filter(task => task.state !== 'completed')

    return (
        <main>
            <section className="current task">
                <h3>Current Tasks ({currentTasks.length})</h3>

                <ul>
                    {currentTasks.map(task => {
                        return (
                            <li key={task.id}>
                                <div className="title">
                                    <h4>{task.title}</h4>
                                    <div>{task.state}</div>
                                </div>
                                <p>Priority: {task.priority}</p>
                                <p>Est. time: {task.estimatedTime}</p>
                            </li>
                        )
                    })}
                </ul>
            

            </section>

            <hr />

            <section className="completed">
                <h3>Completed Tasks ({completedTasks.length})</h3>

                <ul>
                    {completedTasks.map(task => {
                        return (
                            <li key={task.id}>
                                <div className="title">
                                    <h4>{task.title}</h4>
                                    <div>{task.state}</div>
                                </div>
                                <p>Priority: {task.priority}</p>
                                <p>Est. time: {task.estimatedTime}</p>
                            </li>
                        )
                    })}
                </ul>

            </section>
        
        </main>
    )

}