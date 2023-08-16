import "./App.css"

import Filter from "./components/RenderPropsFilter"
import TaskList from "./components/TaskList"

export default function App() {
	return (
		<Filter>
			{function (filterState, handleFilterChange, tasksState) {
				return (
					<div>
						<label htmlFor="filter">Filtrar por estado: </label>
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
						<TaskList tasks={tasksState} />
					</div>
				)
			}}
		</Filter>
	)
}
