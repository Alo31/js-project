var imie = "Franek";

// TPYPY ZMIENNYCH
let wiek = 20; // int - liczba calkowita
let auto = "Mercedes"; // string - łancuch wyrazowy
let auto2 = 'Audi'; // mozemy tez uzywac ' zamiast "
let tempearatura = 10.5; // float - liczba zmiennoprzecinkowa
let czyDzisJestLadnie = true; // bool - zmienna logiczna, moze przyjmowac wartosci prawda/falsz

// camel case 
// snake case is_today_sunny

console.log(wiek)
console.log(auto)
console.log(tempearatura)
console.log(czyDzisJestLadnie)

let hp = 100;
console.log("HP przed:", hp)
hp = hp + 10; // zwiekszamy hp o 10
// hp += 10 // to samo co wyzej, zapisane krocej

console.log("HP po:", hp)

// operacje arytmetyczne
hp = hp * 10
hp = hp / 2
hp -= 20

console.log("HP po:", hp)

// INSTRUKCJE WARUNKOWE
let fuel = 20; // mamy 20l paliwa w baku
// jezeli ilosc paliwa jest mniejsza od 10 to chcemy powiedziec kierowcy ze ma rezerwe, musi dolac paliwo
if (fuel < 10) {
    console.log("Low fuel level")
}
else {
    console.log('Fuel level is OK')
}

// CW
// samolot przesyla wiezy kontrolnej kod akcji, na tej podstawie wieza ma zinterpretowac co samolot obecnie robi
// 1 startuje
// 2 leci
// 3 laduje
// 4 kołuje

let kod = 2;
if (kod == 1) { // == to operator porownania
    console.log('STARTUJE')
}
else if (kod == 2) {
    console.log('LECI')
}
else if (kod == 3) {
    console.log('LADUJE')
}
else if (kod == 4) {
    console.log('KOŁUJE')
}
else {
    console.log('NIEZNANY KOD')
}

let temp = 30;

// roznica miedzy dwoma ifami ponizej a ifem i else ifem jest tutaj taka ze wykonają się oba ify, 
// a w drugiej konstrukcji wykona się tylko pierwszy if, else if się nie wykona

// if (temp > 10) {
//     console.log('CIEPLO')
// }
// else if (temp > 20) {
//     console.log('BARDZO CIEPLO')
// }


if (temp > 10) {
    console.log('CIEPLO')
}
else if (temp > 20) {
    console.log('BARDZO CIEPLO')
}

// OPERATOR POROWNANIA - zwraca wartosc true lub false
console.log(10 == 10)
console.log(10 == 11)

// OPERATOR NIEROWNOSCI
console.log("Czy 1 jest rozne od 2:", 1 != 2)
console.log("Czy 10 jest rozne od 10:", 10 != 10)

// zmienne bez warotsci poczatkowej
let name;
// zmienna name ma teraz wartosc undefined 

// cw 
// napiszmy program w ktorym mamy zdefiniowana zmienna przechowującą wiek osoby i na tej podstawie mamy wyswietlic czy moze glosowac w wyborach prezdyenckcich

let age = 10;

if (age >= 18) {
    console.log('MOZESZ GLOSOWAC')
}
else {
    console.log('NIE MOZESZ GLOSOWAC')
}

// PĘTLE

// PĘTLA FOR
for (let i = 0; i < 10; i++) {
    // ciało pętli
    console.log(i)
}

// i++ inkrementacja zmiennej, zwiekszenie jej wartosci o 1
// to samo co i = i + 1 albo i += 1

// i-- dekrementacja, zmniejszenie o 1
console.log("-----------")
for (let i = 5; i > -1; i -= 2) {
    console.log(i)
}