import React, { useState, useEffect } from "react";
import axios from "axios";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import ModalCreateClient from "../../components/ModalClient/ModalClient";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormAddClient } from "../../components/FormAddClient/FormAddClient";

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
            <ModalCreateClient result="créer" buttonLabel="Enregistrer" colorButton="red" title="Ajouter un compte" clickAction={handleFormSubmit} />
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
                  <FormAddClient name="prenom" label="Prénom" formData={formData.prenom} handleInputChange={handleInputChange} required/>
                  <FormAddClient name="nom" label="Nom" formData={formData.nom} handleInputChange={handleInputChange} required/>
                  <FormAddClient name="adresse" label="Adresse" formData={formData.adresse} handleInputChange={handleInputChange}/>
                  <FormAddClient name="code_postal" label="Code Postal" formData={formData.code_postal} handleInputChange={handleInputChange}/>
                  <FormAddClient name="ville" label="Ville" formData={formData.ville} handleInputChange={handleInputChange} required/>
                  <FormAddClient name="pays" label="Pays" formData={formData.pays} handleInputChange={handleInputChange}/>
                </div>
              </div>
              <div className="mt-4 overflow-hidden w-full sm:w-2/5 me-3 rounded-lg">
                <div className="px-4 py-5 sm:p-6 bg-gray-100 rounded-lg w-full">
                  <p className="text-xl font-semibold text-gray-800">
                    Contact(s) client(e)
                  </p>
                  <FormAddClient name="email" label="Courriel" formData={formData.email} handleInputChange={handleInputChange} required/>
                  <FormAddClient name="telephone1" label="Téléphone 1" formData={formData.telephone1} handleInputChange={handleInputChange} required/>
                  <FormAddClient name="telephone2" label="Téléphone 2" formData={formData.telephone2} handleInputChange={handleInputChange}/>
                  <FormAddClient name="fax" label="Fax" formData={formData.fax} handleInputChange={handleInputChange}/>

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
                  <FormAddClient name="responsable" label="Responsable" formData={responsable} />
                </div>
              </div>
            </div>
          </div>
      </div>
    </form>
  );
}
