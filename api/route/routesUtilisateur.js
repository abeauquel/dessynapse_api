'use strict';
var controleurUtilisateur = require('../controleur/controleurUtilisateur');

module.exports = function(app) {
var motDePasse="paul";

    // humidite Routes
    app.post('/connexion' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage connexion : accees refuse")
            return res.status(401).send("Accees refuse");
        }
        console.log('Routage connexion : connexion d un utilisateur');
       return controleurUtilisateur.seConnecter(req, res);
    });

    // humidite Routes
    app.post('/utilisateur' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage connexion : accees refuse")
            return res.status(401).send("Accees refuse");
        }
        console.log('Routage connexion : post d un utilisateur');
        return controleurUtilisateur.postUtilisateur(req, res);
    });

};