import React from 'react';
import femmeIcon from "../../images/woman.png";
import hommeIcon from "../../images/man.png";

function ClientTable({ clients }) {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
            Prénom Nom
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Téléphone
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Entreprise
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Dernier projet
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Status
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {clients.map((client) => (
          <tr key={client.id}>
            <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
              <div className="flex items-center">
                <div className="h-11 w-11 flex-shrink-0">
                  <img className="h-11 w-11 rounded-full" src={client.sexe === 'f' ? femmeIcon : hommeIcon} alt="" />
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{client.prenom + " " + client.nom}</div>
                  <div className="mt-1 text-gray-500">{client.email}</div>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <div className="text-gray-900">{client.telephone}</div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <div className="text-gray-900">{client.entreprise}</div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500"></td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Actif
              </span>
            </td>
            <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a href={`/clients/${client.id}`} className="text-red-600 hover:text-red-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>

                <span className="sr-only">, Edit {client.prenom}</span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ClientTable;
