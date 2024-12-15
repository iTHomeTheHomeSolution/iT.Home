const nama = "pegawai iT.Home";
let usia = 18;

let biodata = document.getElementById('biodata');

function generateBiodata() {
  let generasi;

  if (usia > 10 && usia < 18) {
    generasi = "remaja";
  }
  else if (usia > 18 && usia < 30) {
    generasi = "dewasa";
  }
  else if (usia >= 30) {
    generasi = "tua";
  }
  else if (usia > 2 && usia < 10) {
    generasi = "anak anak";
  }
  else {
    generasi = "bayi";
  }
  return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();