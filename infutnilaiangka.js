let nilai = 72; // ganti sesuai input
let huruf;

if (nilai >= 85) {
  huruf = "A";
} else if (nilai >= 70) {
  huruf = "B";
} else if (nilai >= 55) {
  huruf = "C";
} else if (nilai >= 40) {
  huruf = "D";
} else {
  huruf = "E";
}

console.log("Nilai huruf: " + huruf);
