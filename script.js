const max2 = (cislo1,cislo2) => {
    if (cislo1 > cislo2) {
        return cislo1
    }
    return cislo2
}

//dlouhy zapis s promennou vysledek a zbytecnym else
/*const max2 = (cislo1, cislo2) => {
    let vysledek;
    if (cislo1 > cislo2) {
        vysledek = cislo1
    }
    else {
        vysledek = cislo2
    }
    return vysledek
}*/

//zkraceny zapis fce s ternarnim operatorem
/*const max2 = (cislo1, cislo2) => cislo1 > cislo2 ? cislo1 : cislo2 */

console.log(max2(800, 510))

document.body.innerHTML = `větší číslo je: ${max2(800, 510)}`