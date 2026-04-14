// 1

let prostokat = function(a, b) {
    return a * b;
};

let trapez = function(a, b, h) {
    return ((a + b) * h) / 2;
};

let rownoleglobok = function(a, h) {
    return a * h;
};

let trojkat = function(a, h) {
    return (a * h) / 2;
};

function pole(figura, a, b, h) {
    return figura(a, b, h);
}

console.log("1.");
console.log(pole(trojkat, 5, 6));        // 15
console.log(pole(prostokat, 4, 5));      // 20
console.log(pole(trapez, 4, 6, 3));      // 15
console.log(pole(rownoleglobok, 5, 4));  // 20


// 2

function cenzura(zdanie, zakazane) {
    return zdanie.replace(zakazane, "*");
}

console.log("\n2.");
console.log(cenzura("Ala ma kota i psa", "kot")); // Ala ma *a i psa


// 3

function cenzura(wyraz, zakazane) {
    return wyraz.replace(zakazane, "*");
}

let tablica = ['kotlet', 'kotka', 'koty', 'pies'];

let wynik = tablica.map(function(wyraz) {
    return cenzura(wyraz, "kot");
});

console.log(wynik);

// 4

function sortujModulo3(a, b) {
    return (a % 3) - (b % 3);
}

console.log("\n4.");
let arr1 = [10, 11, 13, 12, 14, 15];
let sorted = arr1.sort(sortujModulo3);
console.log(sorted); // [12, 15, 10, 13, 11, 14]


// 5

function wiekPowyzej20(osoba) {
    return osoba[2] > 20;
}

console.log("\n5.");
let arr2 = [
    ['Jan', 'Kowalski', 21],
    ['Anna', 'Nowak', 19],
    ['Jan', 'Trzeci', 27]
];

let filtrowane = arr2.filter(wiekPowyzej20);
console.log(filtrowane);


// 6

function formatujOsobe(osoba) {
    return osoba[0] + " | " + osoba[1] + " | " + osoba[2];
}

console.log("\n6.");
let zmapowane = arr2.map(formatujOsobe);
console.log(zmapowane);