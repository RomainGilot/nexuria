// Créez une fonction pour valider clientInfo et fournir des valeurs par défaut si nécessaire
function validerClientInfo(clientInfo) {
  return {
    prenom: clientInfo.prenom || 'inconnu',
    nom: clientInfo.nom || 'inconnu',
  };
}

// Utilisez la version validée de clientInfo
const clientInfoValide = validerClientInfo(clientInfo);
const clientInfoText = `Client(e) ${clientInfoValide.prenom} ${clientInfoValide.nom}`;
