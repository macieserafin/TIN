class Auto {
    constructor(rok, przebieg, cena_wyjsciowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_wyjsciowa;
    }

    zwiekszCeneWyjsciowa() {
        this.cena_wyjsciowa += 1000;
        this.przeliczCeneKoncowa();
    }

    obnizZaWiekAuta() {
        let obecnyRok = new Date().getFullYear();
        let wiekAuta = obecnyRok - this.rok;
        this.cena_koncowa -= wiekAuta * 1000;
    }

    obnizZaPrzebieg() {
        this.cena_koncowa -= Math.floor(this.przebieg / 100000) * 10000;
    }

    przeliczCeneKoncowa() {
        this.cena_koncowa = this.cena_wyjsciowa;
        this.obnizZaWiekAuta();
        this.obnizZaPrzebieg();

        if (this.cena_koncowa < 0) {
            this.cena_koncowa = 0;
        }
    }

    aktualizujAuto(nowyPrzebieg, nowyRok) {
        this.przebieg = nowyPrzebieg;
        this.rok = nowyRok;
        this.przeliczCeneKoncowa();
    }
}

let tablica = [];

function dopiszDoTablicy(auto) {
    if (auto.cena_wyjsciowa > 10000) {
        tablica.push(auto);
    }
}

function zwiekszRok() {
    for (let auto of tablica) {
        auto.rok += 1;
    }
}

let a1 = new Auto(2024, 100000, 9000);
let a2 = new Auto(2024, 100000, 20000);

dopiszDoTablicy(a1);
dopiszDoTablicy(a2);

zwiekszRok();

console.log("Zadanie 1:");
console.log(tablica);

class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this._oceny = [];
        this.srednia = 0;
    }

    hello() {
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.srednia}.`;
    }

    set oceny(x) {
        if (x instanceof Ocena) {
            this._oceny.push(x);

            let suma = 0;
            for (let ocena of this._oceny) {
                suma += ocena.wartosc;
            }

            this.srednia = suma / this._oceny.length;
        }
    }

    get oceny() {
        let wynik = "";
        for (let ocena of this._oceny) {
            wynik += `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}. `;
        }
        return wynik.trim();
    }
}

let s = new Student("Jan", "Kowalski");
console.log("\nZadanie 2:");
console.log(s.hello());

s.oceny = new Ocena("WPR", 4);
s.oceny = new Ocena("TIN", 3);
s.oceny = new Ocena("POJ", 2);

console.log(s.oceny);
console.log(s.hello());
