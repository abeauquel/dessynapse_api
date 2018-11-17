var utilisateurDAO = require('../donnee/UtilisateurDAO');

exports.seConnecter = async function (requete, reponse) {
    try {
        let pseudoUtilisateur = requete.body[utilisateurDAO.NOM_CHAMP_PSEUDO];
        let passeUtilisateur = requete.body[utilisateurDAO.NOM_CHAMP_MOT_DE_PASSE];

        const { rows : utilisateurs } = await utilisateurDAO.seConnecter(pseudoUtilisateur, passeUtilisateur);

        if(typeof utilisateurs !== 'undefined' && utilisateurs.length > 0){
            return reponse.status(200).send(utilisateurs[0]);
        }
        return reponse.status(204).send();
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}