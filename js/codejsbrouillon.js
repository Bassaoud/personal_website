class Person {
    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    manger() {
        console.log("Peut manger ! ")
    }

    marcher() {
        console.log("Peut marcher ! ")
    }
}

const momo = new Person("Bassaoud", "Mohamed", 28)

/** momo.manger();
momo.marcher();*/

class Joueur extends Person {
    constructor(nom, prenom, age, marqueCrampon) {
        super(nom, prenom, age)
        this.marqueCrampon = marqueCrampon;
    }

    manger() {
        console.log("Peut jouer au foot ! ")
    }
}


const lolo = new Joueur("Lolo", "Dupont", 34, "Nike")

lolo.manger();