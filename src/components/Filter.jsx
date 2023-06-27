import { useState } from "react"

const tasks = [
	{ id: 1, title: "comprar", status: "completed" },
	{ id: 2, title: "gym", status: "completed" },
	{ id: 3, title: "cocinar", status: "uncompleted" },
]

export default function Filter({ children }) {
	const [filterState, setFilterState] = useState("all")
	const [tasksState, setTasksState] = useState(tasks)

	const handleFilterChange = event => {
		setFilterState(event.target.value)

		if (event.target.value === "all") setTasksState(tasks)
		else {
			const filteredTasks = tasks.filter(
				task => task.status === event.target.value
			)
			setTasksState(filteredTasks)
		}
	}

	return children(filterState, handleFilterChange, tasksState)
}
