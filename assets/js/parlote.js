reset_dispo = 0;
let talk = new Audio("assets/_sounds/_sans_voice.mp3");

let isPlaying = talk.currentTime > 0 && !talk.paused && !talk.ended &&
    talk.readyState > 2;

if (!isPlaying) {
    talk.play();
}

function pré_parlote() {
    clearInterval();
    texte = prompt("que désirez-vous qui soit écrit?");
    parlote();


}

function parlote() {
    message = texte;

    if (++i < message.length) {
        tps = message.length;
        // On incremente i et on compare a la taille du texte.
        // Si i ne depasse pas le nombre de caracteres dans le texte
        // Note : le premier caractere de la chaine commence a l'index 0 d'où l'idée de commencer le i par -1
        if (message[i] == '\n') {
            // Si saut de ligne on remplace par l'equivalent HTML : "<br/>".
            document.getElementById("ecrit").innerHTML += '\n';
            reset_dispo = 1;
        } else {
            // Sinon on ajoute simplement le caractere a l'emplacement courant.
            document.getElementById("ecrit").innerHTML += message[i];
            if (i % 2 === 0) {
                document.getElementById("visu").src = "assets/pics/speak1.gif";
                talk.play();

                document.getElementsByClassName("dot").className = "dotplis";

            } else {
                document.getElementById("visu").src = "assets/pics/speak0.gif";

            }
        }
    } else {
        // Sinon on arrete le timer car le texte a fini de s'afficher.
        document.getElementById("visu").src = "assets/pics/speak0.gif";
        clearTimeout(interval);


    }
}
let message = "";
let i = -1; // On incremente i en debut de fonction, il vaudra donc 0 a la premiere execution.
let interval = setInterval(parlote, 50); // On declanche le timer et on le garde dans une variable pour l'arreter plus tard.
let ecrit = document.getElementById("ecrit").innerHTML