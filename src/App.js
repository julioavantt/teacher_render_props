import { useState } from "react"

const tasks = [
	{ id: 1, title: "comprar", completed: true },
	{ id: 2, title: "gym", completed: false },
	{ id: 3, title: "cocinar", completed: false },
]

function TaskList({ tasks }) {
	return (
		<ul>
			{tasks?.map(task => (
				<li key={task.id}>{task.title}</li>
			))}
		</ul>
	)
}

function Filter({ children }) {
	const [filterState, setFilterState] = useState("all")

	const handleFilterChange = event =>
		setFilterState(event.target.value)

	return children(filterState, handleFilterChange)
}

function App() {
	return (
		<Filter>
			{(filterState, handleFilterChange) => {
				return (
					<div>
						<label htmlFor="filter">Filtrar pro estado: </label>
						<select
							id="filter"
							value={filterState}
							onChange={handleFilterChange}
						>
							<option value="all">Todos</option>
							<option value="completed">Completados</option>
							<option value="uncompleted">
								Sin completar
							</option>
						</select>
						<TaskList
							tasks={
								filterState === "all"
									? tasks
									: tasks.filter(task =>
											filterState === "completed"
												? task.completed
												: !task.completed
									  )
							}
						/>
					</div>
				)
			}}
		</Filter>
	)
}

export default App
