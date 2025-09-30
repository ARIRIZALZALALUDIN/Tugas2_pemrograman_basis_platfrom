let angka = 6;

function angkaGanjilGenap() {
    if (angka % 2 === 0) {
        return angka + " adalah bilangan Genap";
    } else {
        return angka + " adalah bilangan Ganjil"; 
    }
}

console.log("Angka:", angka);
console.log("Hasil:", angkaGanjilGenap());