const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors'); // Importez le middleware CORS

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000', 
}));

app.get('/clients', async (req, res) => {
  const clients = await prisma.client.findMany();
  res.json(clients);
});

app.get('/entreprises', async (req, res) => {
  const entreprises = await prisma.entreprise.findMany();
  res.json(entreprises);
});

app.post('/clients', async (req, res) => {
  const { prenom, nom, telephone1, telephone2, email, adresse, ville, pays, code_postal, fax, id_entreprise } = req.body;
  try {
   const newClient = await prisma.client.create({
      data: {
        nom: nom,
        prenom: prenom,
        telephone1: telephone1,
        telephone2: telephone2,
        email: email,
        adresse: adresse,
        ville: ville,
        pays: pays,
        code_postal: code_postal,
        fax: fax,
        id_entreprise: id_entreprise,
      }
    })
    // Gérez la réponse ici, par exemple, renvoyez le nouveau client créé.
    res.json(newClient);
  } catch (error) {
    // Gérez les erreurs ici
    console.error(error);
    res.status(500).send("Une erreur s'est produite lors de la création du client.");
  }
});

app.get('/clients/:id', async (req, res) => {
  const { id } = req.params; // Récupérez l'ID du client à partir des paramètres d'URL
  try {
    const client = await prisma.client.findUnique({
      where: { code_client: parseInt(id) } // Utilisez l'ID pour rechercher le client
    });

    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ message: 'Client non trouvé' });
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du client :', error);
    res.status(500).json({ message: 'Erreur serveur lors de la récupération du client' });
  }
});


// Écoutez le serveur sur un port spécifique
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
