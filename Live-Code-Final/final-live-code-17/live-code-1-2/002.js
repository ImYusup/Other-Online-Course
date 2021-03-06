// Competencies: Mathematical Operation and Conditionals
/*
==================
Tax Administration
==================
Instruksi
=========
Di negara wkwkland, seseorang akan mengurus perpajakan. Untuk bisa mengurus, seseorang harus memiliki beberapa informasi:
1. name: nama yang tertera di KTP (harus memiliki nama, tidak boleh kosong)
2. age: umur pendaftar. Untuk bisa mengurus, minimal berumur 17 tahun.
3. citizenship: kewarganegaraan pendaftar.
Program akan melakukan tahap-tahap berikut:
Step 1. Jika name kosong, maka tampilkan di console "NAMA ANDA KOSONG! TIDAK BISA DAFTAR!" dan hentikan program.
Step 2. Jika age dibawah 17 tahun, maka tampilkan di console "BELUM CUKUP UMUR!" dan hentikan program.
Step 3. program akan mengenerate Tax ID dengan format:
  WKWK-<KODE> => untuk pendaftar yang warga negara 'wkwkland'. <KODE> mewakili jumlah karakter dari name ditambah age.
  ABCD-<KODE> => untuk pendaftar yang bukan warga negara 'wkwkland'. <KODE> mewakili jumlah karakter dari name ditambah age.
  Contoh:
  Untuk yang citizenship = 'wkwkland' dengan name = 'dimitri', age = 17,
  maka ubah taxID menjadi 'WKWK-24'.
  Untuk yang citizenship = 'Indonesia' dengan name = 'alexei', age = 20,
  maka ubah taxID menjadi 'ABCD-26'.
Ketentuan
=========
Diberikan variable name, age, citizenship, dan taxID.
Dipersilahkan mengganti nilai dari name, age dan citizenship secara manual, dan gantilah taxId sesuai dengan ketentuan program.
*/

// SKELETON CODE (Code Sample)

var name = 'dimitri'; // silakan berikan nilai bebas
var age = 17 ; // silakan berikan nilai bebas
var citizenship = 'wkwkland'; // silakan berikan nilai bebas
var taxId; // nilainya jangan di-assign langsung. gunakan program untuk mengisi ini!
// Buat code disini

if (name === ''){
  console.log('NAMA ANDA KOSONG! TIDAK BISA DAFTAR!');
}
else {
  if (age < 17) {
   console.log('BELUM CUKUP UMUR!'); 
  }
  else  { 
    var karakter = name.length + age ;
    if (citizenship === 'wkwkland'){
     taxId = 'WKWK-' +karakter;
    }
    else {
    taxId = 'ABCD-' +karakter;
    }
  }
  console.log('Nama : ' +name);
  console.log('Umur : ' +age);
  console.log('Citizenship : ' +citizenship);
  console.log('TAX ID : ' +taxId);
}

