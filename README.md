# Parlote

Parlote est un projet assez vieux pour Kidpaddleetcie!

Au début, c'était "Pokémon Animation" et le code c'était ça:
```javascript
var texte= prompt ("Que souhaitez vous écrire?");
		
            function extraire()
            {
                if( ++i < message.length ){  // On incremente i et on compare a la taille du message.
                    // Si i ne depasse pas le nombre de caracteres dans le message
                    // Note : le premier caractere de la chaine commence a l'index 0
                    if( message[i] == '\n' ){
                        // Si saut de ligne on remplace par l'equivalent HTML : "<br/>".
                        document.getElementById("msg").innerHTML += '<br/>';
                    } else {
                        // Sinon on ajoute simplement le caractere a l'emplacement courant.
                        document.getElementById("msg").innerHTML += message[i];
                    }
                } else {
                    // Sinon on arrete le timer car le texte a fini de s'afficher.
                    clearTimeout(interval);
                }
            }
             
            var i = -1; // On incremente i en debut de fonction, il vaudra donc 0 a la premiere execution.
            var message = texte; // Message a afficher, on utilise le caractere \n pour le retour a la ligne.
            var interval = setInterval(extraire, 120); // On declanche le timer et on le garde dans une variable pour l'arreter plus tard.
            ```
	    
Mais ce vieux code (datant du 28 Novembre 2017) ne permettait pas de créer un système +/- viable pour le créer ce que je voulais !

Ce que je veux ? Une animation en mode "machine à écrire" qui produit un son toutes les deux lettres!

J'avais fais également d'autres exercices autour de la textbox pour tenter de reprendre le texte mais ça s'est conclut par de nombreux échecs amenant le pauvre Glin Kidpaddleetcie à une forte envie de passer à autre chose !

2 ans plus tard (ou 1 an et 4 mois ), je suis de retour avec un avancement du projet mais il y aura quand même des choses à améliorer!

## Ce que je dois encore améliorer

- Le prompt est dégeulasse, je préférais employer un input !
- Appuyer sur le bouton doit permettre de ré-écrire un nouveau texte (on doit recharger la page pour la version actuelle) !
- D'autres sons devrait être disponible parce que la voix de Sans, elle est bonne mais elle saoul au bout de la 20ème manipulation/correction !


J'espère que ce sera finit un jour pour l'implémenter dans un projet annexe comme un RPG ou un truc du genre !


         
