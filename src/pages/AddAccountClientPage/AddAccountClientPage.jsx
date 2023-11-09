import React, { useState, useEffect } from "react";
import axios from "axios";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import ModalCreateClient from "../../components/ModalCreateClient/ModalCreateClient";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const breadcrumbItems = [
  { to: "/", label: "Tableau de bord" },
  { to: "/clients", label: "Gestion des clients" },
  { label: "Ajout d'un(e) client(e)" },
];

export function AddAccountClientPage({ page }) {
  const [entrepriseId, setEntrepriseId] = useState("");
  const [responsable, setResponsable] = useState("");
  const [entreprises, setEntreprises] = useState([]);
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone1: "",
    telephone2: "",
    adresse: "",
    fax: "",
    ville: "",
    pays: "",
    code_postal: "",
    id_entreprise: ""
  });

  const handleEntrepriseChange = (event) => {
    const selectedEntrepriseId = event.target.value;
    setEntrepriseId(selectedEntrepriseId);
    setFormData({ ...formData, id_entreprise: selectedEntrepriseId });
    const selectedEntreprise = entreprises.find((entreprise) => entreprise.id === parseInt(selectedEntrepriseId));
    if (selectedEntreprise) {
      setResponsable(selectedEntreprise.nomDirigeant);
    } else {
      setResponsable(""); 
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    axios
      .post("http://localhost:3001/clients", {
        ...formData,
        code_postal: parseInt(formData.code_postal),
        id_entreprise: parseInt(formData.id_entreprise),
      })
      .then((response) => {
        console.log("Succès de la requête POST:", response.data);
        toast.success('Le client a été créé avec succès'); // Affiche la notification
        setFormData({
          prenom: "",
          nom: "",
          email: "",
          telephone1: "",
          telephone2: "",
          adresse: "",
          fax: "",
          ville: "",
          pays: "",
          code_postal: "",
          id_entreprise: entrepriseId,
        });
        window.location.href = "/clients";
      })
      .catch((error) => {
        console.error("Erreur lors de la requête POST:", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/entreprises")
      .then((response) => {
        setEntreprises(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des entreprises:", error);
      });
  }, []);
  return (
    <form>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-4 overflow-hidden rounded-lg ">
        <p className="text-2xl mt-4">Création du client</p>
          <div className="sm:p-6">
            <ModalCreateClient clickAction={handleFormSubmit} />
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
                      <input disabled type="text" name="code_client" id="code_client" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Code client"/>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="prenom" className="block text-sm font-medium leading-6 text-gray-900">Prénom <span className="text-red-500">*</span></label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input required type="text" name="prenom" id="prenom" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Prénom" value={formData.prenom} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="nom" className="block text-sm font-medium leading-6 text-gray-900">Nom <span className="text-red-500">*</span></label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input required type="text" name="nom" id="nom" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nom" value={formData.nom} onChange={handleInputChange}/>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="adresse" className="block text-sm font-medium leading-6 text-gray-900">Adresse</label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input type="text" name="adresse" id="adresse" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Adresse" value={formData.adresse} onChange={handleInputChange}/>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="code_postal" className="block text-sm font-medium leading-6 text-gray-900">Code Postal</label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input type="text" name="code_postal" id="code_postal" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Code Postal" value={formData.code_postal} onChange={handleInputChange}/>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="ville" className="block text-sm font-medium leading-6 text-gray-900">Ville <span className="text-red-500">*</span></label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input required type="text" name="ville" id="ville" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Ville" value={formData.ville} onChange={handleInputChange}/>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="pays" className="block text-sm font-medium leading-6 text-gray-900">Pays</label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input type="text" name="pays" id="pays" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Pays" value={formData.pays} onChange={handleInputChange}/>
                    </div>
                  </div>
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
                      <input required type="text" name="email" id="email" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Adresse Email" value={formData.email} onChange={handleInputChange}/>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="telephone1" className="block text-sm font-medium leading-6 text-gray-900">Téléphone 1 <span className="text-red-500">*</span></label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input required type="text" name="telephone1" id="telephone1" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Téléphone 1" value={formData.telephone1} onChange={handleInputChange}/>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="telephone2" className="block text-sm font-medium leading-6 text-gray-900">Téléphone 2</label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input type="text" name="telephone2" id="telephone2" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Téléphone 2" value={formData.telephone2} onChange={handleInputChange}/>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="fax" className="block text-sm font-medium leading-6 text-gray-900">Fax</label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input type="text" name="fax" id="fax" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Fax" value={formData.fax} onChange={handleInputChange}/>
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
                      <select required id="id_entreprise" name="id_entreprise" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleEntrepriseChange} value={entrepriseId}> 
                      <option value="0">Choisir une entreprise</option> 
                        {entreprises.map((entreprise) => (   
                          <option key={entreprise.id} value={entreprise.id}>     {entreprise.nom}   </option> 
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/6">
                      <label htmlFor="responsable" className="block text-sm font-medium leading-6 text-gray-900">Responsable</label>
                    </div>
                    <div className="mt-2 ml-5 w-1/6">
                      <input disabled type="text" name="responsable" id="responsable" className="block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nom du responsable" value={responsable}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </form>
  );
}
