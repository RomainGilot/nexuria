import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import ModalCreateClient from "../../components/ModalClient/ModalClient";
import { FormAddClient } from "../../components/FormAddClient/FormAddClient";

export function AccountClientPage({page}) {
  const [clientInfo, setClientInfo] = useState(null);

  const breadcrumbItems = [
    { to: "/", label: "Tableau de bord" },
    { to: "/clients", label: "Gestion des clients" },
    { label: clientInfo ? `Client(e) ${clientInfo.prenom} ${clientInfo.nom}` : 'Chargement...'}
  ];

  const { id } = useParams();
   useEffect(() => {
    axios.get(`http://localhost:3001/clients/${id}`) 
      .then((response) => {
        setClientInfo(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des informations du client :", error);
      });
  }, [id]);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <form className="mt-4 overflow-hidden rounded-lg ">
        <p className="text-2xl mt-4">Compte de {clientInfo ? clientInfo.prenom + " " + clientInfo.nom : ""} </p>
          <div className="sm:p-6">
         <div className="flex">
           <button type='button' className={`mt-2 me-5 bg-orange-300 hover:bg-orange-400 text-orange-800 text-sm font-bold py-2 px-4 rounded inline-flex items-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
            <span>Modifier</span>
          </button>
            <ModalCreateClient result="valider" colorButton="green" title="Valider la modification du compte" buttonLabel="Valider"/>
         </div>
            <div className="flex flex-wrap">
              <div className="mt-4 overflow-hidden w-full sm:w-2/5 me-3 rounded-lg bg-gray-100">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-xl font-semibold text-gray-800">
                    Informations client(e)
                  </p>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="code_client" className="block text-sm font-medium leading-6 text-gray-900">Code client <span className="text-red-500">*</span></label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input value={clientInfo ? clientInfo.code_client : ""} disabled type="text" name="code_client" id="code_client" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Code client"/>
                    </div>
                  </div>
                  <FormAddClient name="prenom" label="Prénom" formData={clientInfo ? clientInfo.prenom : ""} required />
                  <FormAddClient name="nom" label="Nom" formData={clientInfo ? clientInfo.nom : ""} required/>
                  <FormAddClient name="adresse" label="Adresse" formData={clientInfo ? clientInfo.adresse : ""}/>
                  <FormAddClient name="code_postal" label="Code Postal" formData={clientInfo ? clientInfo.code_postal : ""}/>
                  <FormAddClient name="ville" label="Ville" formData={clientInfo ? clientInfo.ville : ""} required/>
                  <FormAddClient name="pays" label="Pays" formData={clientInfo ? clientInfo.pays : ""}/>
                </div>
              </div>
              <div className="mt-4 overflow-hidden w-full sm:w-2/5 me-3 rounded-lg">
                <div className="px-4 py-5 sm:p-6 bg-gray-100 rounded-lg w-full">
                  <p className="text-xl font-semibold text-gray-800">
                    Contact(s) client(e)
                  </p>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Courriel <span className="text-red-500">*</span></label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input disabled value={clientInfo ? clientInfo.email : ""} required type="text" name="email" id="email" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Adresse Email" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="telephone1" className="block text-sm font-medium leading-6 text-gray-900">Téléphone 1 <span className="text-red-500">*</span></label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input disabled value={clientInfo ? clientInfo.telephone1 : ""} required type="text" name="telephone1" id="telephone1" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Téléphone 1" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="telephone2" className="block text-sm font-medium leading-6 text-gray-900">Téléphone 2</label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input disabled value={clientInfo ? clientInfo.telephone2 : ""} type="text" name="telephone2" id="telephone2" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Téléphone 2" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="fax" className="block text-sm font-medium leading-6 text-gray-900">Fax</label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input disabled value={clientInfo ? clientInfo.fax : ""} type="text" name="fax" id="fax" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Fax" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 overflow-hidden w-full sm:w-2/5 me-3 rounded-lg bg-gray-100">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-xl font-semibold text-gray-800">Informations Société</p>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="id_entreprise" className="block text-sm font-medium leading-6 text-gray-900">Société <span className="text-red-500">*</span></label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                  
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="responsable" className="block text-sm font-medium leading-6 text-gray-900">Responsable</label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input disabled type="text" name="responsable" id="responsable" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nom du responsable" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </form>
    </>
  )
}