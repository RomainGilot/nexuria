import React from 'react';

function ClientForm({ formData, handleFormSubmit, handleInputChange, handleOpenModal }) {
  return (
    <form method="post" onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <label htmlFor="prenom" className="block text-sm font-medium text-gray-600">
          Prénom
        </label>
        <input
          type="text"
          name="prenom"
          id="prenom"
          className="mt-1 p-2 w-full border rounded-lg"
          placeholder="Le prénom"
          value={formData.prenom}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="nom" className="block text-sm font-medium text-gray-600">
          Nom
        </label>
        <input
          type="text"
          name="nom"
          id="nom"
          className="mt-1 p-2 w-full border rounded-lg"
          placeholder="Le nom"
          value={formData.nom}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="mt-1 p-2 w-full border rounded-lg"
          placeholder="pseudo@exemple.com"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="telephone" className="block text-sm font-medium text-gray-600">
          Téléphone
        </label>
        <input
          type="text"
          name="telephone"
          id="telephone"
          className="mt-1 p-2 w-full border rounded-lg"
          placeholder="06 XX XX XX XX"
          value={formData.telephone}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="entreprise" className="block text-sm font-medium text-gray-600">
          Entreprise
        </label>
        <input
          type="text"
          name="entreprise"
          id="entreprise"
          className="mt-1 p-2 w-full border rounded-lg"
          placeholder="Nom de la société"
          value={formData.entreprise}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium"
        >
          Créer le compte
        </button>
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-600 py-2 px-4 rounded-lg font-medium"
          onClick={handleOpenModal}
        >
          Annuler
        </button>
      </div>
    </form>
  );
}

export default ClientForm;
