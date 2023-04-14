// 1-Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.
function writeWords(ab, s) {
  for (let i = 1; i <= s; i++) {
    console.log(ab);
    console.log(" ");
  }
}
// writeWords("merhaba", 8);
// writeWords("ali", 3);

// 2-Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function alanCevreHesapla(kisa, uzun) {
  let alan = kisa * uzun;
  let cevre = (kisa + uzun) * 2;
  return `àlan: ${alan} cevre: ${cevre}`;
}

// let sonuc = alanCevreHesapla(7, 10);
// console.log(sonuc);

console.log(alanCevreHesapla(5, 7));
console.log(alanCevreHesapla(15, 17));
console.log(alanCevreHesapla(8, 6));
console.log(alanCevreHesapla(5, 4));
console.log(alanCevreHesapla(9, 3));
