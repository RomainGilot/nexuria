const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors'); // Importez le middleware CORS

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000', // Remplacez par l'URL de votre application React
}));

// Exemple d'une route pour récupérer tous les clients
app.get('/clients', async (req, res) => {
  const clients = await prisma.client.findMany();
  res.json(clients);
});

// Exemple d'une route pour ajouter un client
app.post('/clients', async (req, res) => {
  const { prenom, nom, entreprise, email, telephone } = req.body;
  try {
   const newClient = await prisma.client.create({
      data: {
        nom: nom,
        entreprise: entreprise,
        email: email,
        telephone: telephone,
        prenom: prenom
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





// Écoutez le serveur sur un port spécifique
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
