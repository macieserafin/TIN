function pitagoras(a, b, c) {
    let liczby = [a, b, c];
    liczby.sort(function(x, y) {
        return x - y;
    });

    let x = liczby[0];
    let y = liczby[1];
    let z = liczby[2];

    if (x > 0 && y > 0 && z > 0 && x * x + y * y === z * z) {
        console.log("To jest trójka pitagorejska");
        return true;
    }

    console.log("To nie jest trójka pitagorejska");
    return false;
}

function podzielne(a, b, c) {
    console.log("Liczby z przedziału " + a + "-" + b + " podzielne przez " + c + ":");

    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i);
        }
    }
}

function tabliczka(n) {
    for (let i = 1; i <= n; i++) {
        let wiersz = "";

        for (let j = 1; j <= n; j++) {
            wiersz += i * j + " ";
        }

        console.log(wiersz);
    }
}

function fibonacci(n) {
    if (n <= 0) {
        console.log("Podaj liczbę większą od 0");
        return;
    }

    let a = 0;
    let b = 1;
    let wynik = "";

    for (let i = 0; i < n; i++) {
        wynik += a + " ";
        let temp = a + b;
        a = b;
        b = temp;
    }

    console.log(wynik);
}

function choinka(n) {
    for (let i = 1; i <= n; i++) {
        let wiersz = "";

        for (let j = 0; j < i; j++) {
            wiersz += "*";
        }

        console.log(wiersz);
    }
}

function choinkaNoca(n) {
    let szerokosc = 2 * n - 3;

    for (let i = 0; i < szerokosc; i++) {
        process = "";
    }

    console.log("*".repeat(szerokosc));

    for (let i = n - 2; i >= 1; i--) {
        let spacje = szerokosc - 2 * i;
        let wiersz = "";

        wiersz += "*".repeat(i);
        wiersz += " ".repeat(spacje);
        wiersz += "*".repeat(i);

        console.log(wiersz);
    }

    console.log("*".repeat(szerokosc));
}

function poleProstokata(a, b) {
    return a * b;
}

function poleTrapezu(a, b, h) {
    return ((a + b) * h) / 2;
}

function poleRownolegloboku(a, h) {
    return a * h;
}

function poleTrojkata(a, h) {
    return (a * h) / 2;
}

function poleFigury(figura, a, b, h) {
    let pole = 0;

    switch (figura) {
        case "prostokat":
            pole = poleProstokata(a, b);
            break;
        case "trapez":
            pole = poleTrapezu(a, b, h);
            break;
        case "rownoleglobok":
            pole = poleRownolegloboku(a, h);
            break;
        case "trojkat":
            pole = poleTrojkata(a, h);
            break;
        default:
            console.log("Nieznana figura");
            return;
    }

    console.log("Pole figury " + figura + " wynosi: " + pole);
}

function pascal(n) {
    let trojkat = [];

    for (let i = 0; i < n; i++) {
        trojkat[i] = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                trojkat[i][j] = 1;
            } else {
                trojkat[i][j] = trojkat[i - 1][j - 1] + trojkat[i - 1][j];
            }
        }

        let wiersz = "";
        for (let j = 0; j < trojkat[i].length; j++) {
            wiersz += trojkat[i][j] + " ";
        }

        console.log(wiersz);
    }
}

pitagoras(3, 5, 4);
podzielne(1, 20, 3);
tabliczka(3);
fibonacci(10);
choinka(4);
choinkaNoca(6);
poleFigury("prostokat", 4, 5);
poleFigury("trapez", 4, 6, 3);
poleFigury("rownoleglobok", 5, 0, 4);
poleFigury("trojkat", 6, 0, 4);
pascal(6);