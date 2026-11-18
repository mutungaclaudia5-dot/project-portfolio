
function Search({ projects, query, setQuery }) {

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <div className="flex justify-center mt-6">

        <input
          type="text"
          placeholder="Search projects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-1/2"
        />

      </div>

      <h1 className="text-4xl font-bold text-black text-center mt-6">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 p-4">

        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <h2 className="text-xl font-bold mb-2">
              {project.title}
            </h2>

            <p className="text-gray-700">
              {project.description}
            </p>
          </div>
        ))}

      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No projects found.
        </p>
      )}

    </>
  )
}

export default Search
