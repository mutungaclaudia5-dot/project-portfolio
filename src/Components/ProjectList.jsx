
import Search from './Search.jsx'

function ProjectList({ projects, query, setQuery }) {
  return (
    <div>
      <Search
        projects={projects}
        query={query}
        setQuery={setQuery}
      />
    </div>
  )
}

export default ProjectList
