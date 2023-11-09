import React, { useState, useEffect } from "react";
import axios from "axios";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { NotificationSuccess } from "../../components/NotificationSuccess/NotificationSuccess";

const breadcrumbItems = [
  { to: "/", label: "Tableau de bord" },
  { to: "/clients", label: "Gestion des clients" },
];

export function ClientPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/clients")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des clients :", error);
      });
  }, []);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="md:justify-between mt-5 mb-5">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Liste des clients
          </h2>
        </div>
      </div>
      <div className="mt-4 flex md:mt-0">
        <a href="/clients/ajouter" className="w-40 inline-flex justify-center items-center bg-red-600 rounded-md bg-red p-1.5 text-xs font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 me-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
          </svg>
          Ajouter un client
        </a>
        <button
          type="button"
          className="inline-flex ml-3 justify-center w-40 text-center items-center bg-red-600 rounded-md text-white p-1.5 text-xs font-semibold text-gray-900 shadow-sm hover:bg-red-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125-1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125-1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5" />
          </svg>
          Export .xlsx
        </button>
      </div>    
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 w-50 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Numéro de compte</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Prénom Nom</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Téléphone</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Entreprise</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Ville</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Pays</th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clients.map((client) => (
                  <tr key={client.code_client}>
                    <td className="whitespace-nowrap px-3 py-4 w-48 text-sm text-red-500">
                      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-600">
                        <svg className="h-1.5 w-1.5 fill-red-400" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx={3} cy={3} r={3} />
                        </svg>
                        CL_0{client.code_client}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{client.prenom} {client.nom}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{client.telephone1}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{client.id_entreprise}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{client.ville}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{client.pays}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href={`/clients/${client.code_client}`} className="text-indigo-600 hover:text-indigo-900">
                        <PencilSquareIcon /><span className="sr-only">, Modifier {client.prenom} {client.nom}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
