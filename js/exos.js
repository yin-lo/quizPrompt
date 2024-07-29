/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
// Ton code ici...
const question1 = `Quelle mer borde la ville de Sébastopol ?`;

const solution1 = `la mer Noire`;

// pour débuter le décompte des points :
let score = 0;

/* Exo 2 */
// Ton code ici...

const reponse1 = prompt(question1);

// toLowerCase transforme toutes les réponses données en minuscule
if (reponse1.toLowerCase() === solution1.toLowerCase()) {
	alert(`Gagné !`);
	// à chaque fois que le joueur gagne un point on incrémente
	score = score + 1;
} else {
	alert(`Perdu...`);
}

/* Exo 3 */
// Ton code ici...

const question2 = `Quel est l'âge du capitaine ?`;
const solution2 = 63;

const reponse2 = prompt(question2);
if (Number(reponse2) === solution2) {
	alert(`Gagné !`);
	// à chaque fois que le joueur gagne un point on incrémente
	score++;
} else {
	alert(`Perdu...`);
}
// Annonce le nombre de bonnes réponses
alert(`Vous avez ${score} bonne(s) réponse(s)`);
