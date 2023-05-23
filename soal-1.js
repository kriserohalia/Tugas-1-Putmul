const mahasiswa = {
    nama : "Putri Mulyani",
    nim : "02042111025",
    email : "pasaribuputri02@gmail.com"
}

let {nama,nim,email} = mahasiswa
console.log(nama,nim,email);

let teman1 = ["arin","vitaa"]
let teman2 = ["krise","amel"]
let teman3 = ["aliya","bunga"]

let teman = [...teman1,...teman2,...teman3]
console.log(teman);