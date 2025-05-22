import React from 'react'

function AddShedule() {
  return (
    <form className=" flex flex-col gap-4 bg-base-100 p-4 rounded-lg shadow-md max-w-xl mx-auto w-full">
      <div className="w-full flex items-center mb-2">
        <p className="p-2 text-primary text-2xl font-semibold">Ajouter une matière</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="Matière"
          className="input input-secondary flex-1"
        />
        <input
          type="text"
          placeholder="Salle"
          className="input input-secondary flex-1"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-col flex-1">
          <label className="mb-1 font-medium">Heure de début</label>
          <input
            type="time"
            className="input input-primary"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label className="mb-1 font-medium">Heure de fin</label>
          <input
            type="time"
            className="input input-primary"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <input
          type="text"
          placeholder="Professeur"
          className="input input-primary flex-1"
        />
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full md:w-64 border p-2 flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="toggle checked:bg-primary"
            id="tdtp"
          />
          <label htmlFor="tdtp" className="label cursor-pointer">
            TD/TP
          </label>
        </fieldset>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full md:w-auto self-center mt-2"
      >
        Ajouter
      </button>
    </form>
  )
}

export default AddShedule