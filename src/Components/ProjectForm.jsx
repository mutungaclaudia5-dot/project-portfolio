
import { useState } from 'react'

function ProjectForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim() || !description.trim()) {
      return
    }

    const newProject = {
      id: Date.now(),
      title: title,
      description: description
    }

    onAdd(newProject)

    setTitle('')
    setDescription('')
  }

  return (
    <div className="flex flex-col items-center mt-6">

      <h1 className="font-bold text-4xl mb-4">
        Add Project
      </h1>

      <form onSubmit={handleSubmit}>

        <div className="pb-3">
          <label className="m-2">Title:</label>

          <input
            className="border-2 rounded p-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project title"
          />
        </div>

        <div>
          <label className="m-2">Description:</label>

          <textarea
            className="border-2 rounded p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Project description"
          />
        </div>

        <button
          type="submit"
          className="bg-slate-300 m-4 p-2 rounded"
        >
          Add
        </button>

      </form>
    </div>
  )
}

export default ProjectForm
