
function pitagoras(a, b, c) {
    const l = [a, b, c].sort((x, y) => x - y);
    const [x, y, z] = l;

    if (x > 0 && y > 0 && z > 0 && x * x + y * y === z * z) {
        console.log("To jest trójka pitagorejska");
        return true;
    } else {
        console.log("To nie jest trójka pitagorejska");
        return false;
    }
}

function podzielne(a, b, c) {
    console.log(`Liczby z przedziału ${a}-${b} podzielne przez ${c}:`);

    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i);
        }
    }
}

function tabliczka(n) {
    for (let i = 1; i <= n; i++) {
        let w = "";
        for (let j = 1; j <= n; j++) {
            w += (i * j) + " ";
        }
        console.log(w.trim());
    }
}

function fibonacci(n) {
    let a = 0;
    let b = 1;

    if (n <= 0) {
        console.log("Podaj liczbę większą od 0");
        return;
    }

    let w = [];

    for (let i = 0; i < n; i++) {
        w.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    console.log(w.join(" "));
}

function choinka(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}

function choinkaNoca(n) {
    if (n < 2) {
        console.log("*");
        return;
    }

    const szerokosc = 2 * n - 3;

    console.log("*".repeat(szerokosc));

    for (let i = 1; i <= n - 2; i++) {
        const gwiazdki = n - 1 - i;
        const spacje = szerokosc - 2 * gwiazdki;

        console.log("*".repeat(gwiazdki) + " ".repeat(spacje) + "*".repeat(gwiazdki));
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
    let pole;

    switch (figura.toLowerCase()) {
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

    console.log(`Pole figury ${figura} wynosi: ${pole}`);
    return pole;
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

        console.log(trojkat[i].join(" "));
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