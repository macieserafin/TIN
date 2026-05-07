class Auto {
    constructor(rok, przebieg, cena_wyjsciowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_wyjsciowa;
        this.przeliczCeneKoncowa();
    }

    obnizZaWiekAuta() {
        const obecnyRok = new Date().getFullYear();
        const wiekAuta = obecnyRok - this.rok;
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
}

class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {
    constructor(imie, nazwisko, oceny) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.oceny = oceny;
        this.srednia = this.obliczSrednia();
    }

    obliczSrednia() {
        const suma = this.oceny.reduce((wynik, ocena) => wynik + ocena.wartosc, 0);
        return suma / this.oceny.length;
    }
}

const auta = [
    new Auto(2021, 45000, 68000),
    new Auto(2018, 132000, 52000),
    new Auto(2014, 245000, 36000),
    new Auto(2023, 18000, 91000)
];

const studenci = [
    new Student("Jan", "Kowalski", [
        new Ocena("TIN", 4),
        new Ocena("POJ", 3),
        new Ocena("WPR", 5)
    ]),
    new Student("Anna", "Nowak", [
        new Ocena("TIN", 5),
        new Ocena("POJ", 4.5),
        new Ocena("PRI", 4)
    ]),
    new Student("Piotr", "Zielinski", [
        new Ocena("TIN", 3.5),
        new Ocena("WPR", 4),
        new Ocena("MAD", 3)
    ])
];

function formatujCene(cena) {
    return `${cena.toLocaleString("pl-PL")} zl`;
}

function zbudujTabeleAut(listaAut) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headerRow = document.createElement("tr");
    const naglowki = ["Rok", "Przebieg", "Cena wyjsciowa", "Cena koncowa"];

    for (const naglowek of naglowki) {
        const th = document.createElement("th");
        th.textContent = naglowek;
        headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);

    for (const auto of listaAut) {
        const row = document.createElement("tr");
        const dane = [
            auto.rok,
            `${auto.przebieg.toLocaleString("pl-PL")} km`,
            formatujCene(auto.cena_wyjsciowa),
            formatujCene(auto.cena_koncowa)
        ];

        for (const wartosc of dane) {
            const td = document.createElement("td");
            td.textContent = wartosc;
            row.appendChild(td);
        }

        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}

function zbudujStudenta(student) {
    const wrapper = document.createElement("div");
    const header = document.createElement("button");
    const details = document.createElement("div");
    const average = document.createElement("p");
    const grades = document.createElement("ul");

    wrapper.className = "student expanded";
    header.className = "student-header";
    header.type = "button";
    header.textContent = `${student.imie} ${student.nazwisko}`;

    details.className = "student-details";
    average.textContent = `Srednia ocen: ${student.srednia.toFixed(2)}`;
    grades.className = "grades";

    for (const ocena of student.oceny) {
        const li = document.createElement("li");
        li.textContent = `${ocena.przedmiot}: ${ocena.wartosc}`;
        grades.appendChild(li);
    }

    header.addEventListener("click", function () {
        wrapper.classList.toggle("expanded");
        wrapper.classList.toggle("collapsed");
    });

    details.appendChild(average);
    details.appendChild(grades);
    wrapper.appendChild(header);
    wrapper.appendChild(details);

    return wrapper;
}

function zbudujAkordeonStudentow(listaStudentow) {
    const fragment = document.createDocumentFragment();

    for (const student of listaStudentow) {
        fragment.appendChild(zbudujStudenta(student));
    }

    return fragment;
}

document.getElementById("cars-table").appendChild(zbudujTabeleAut(auta));
document.getElementById("students-accordion").appendChild(zbudujAkordeonStudentow(studenci));
