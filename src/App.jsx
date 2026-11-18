
import { useState } from 'react'
import { PROJECTS } from './Components/data.js'

import Navbar from './Components/Navbar'
import ProjectForm from './Components/ProjectForm'
import ProjectList from './Components/ProjectList'
import Hero from './Components/Hero'

function App() {
  const [projects, setProjects] = useState(PROJECTS)
  const [query, setQuery] = useState('')

  // Add a new project
  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      newProject
    ])
  }

  return (
    <div>
      <Navbar title="My Portfolio" />

      <Hero />

      <ProjectForm onAdd={handleAddProject} />

      <ProjectList
        projects={projects}
        query={query}
        setQuery={setQuery}
      />
    </div>
  )
}

export default App
