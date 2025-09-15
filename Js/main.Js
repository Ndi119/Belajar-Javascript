// alert('Hallo')
// console.log ('My name is Yudi.')

// let usia = prompt('Masukan usia anda!')
// console.log('Hello Usia kamu Adalah ' + usia)
// alert('Hello Usia kamu Adalah ' + usia)

let nama = prompt('Masukan Nama Anda!')
let usia = prompt('Masukan Usia Anda!')
let TB = prompt('Masukan Tiggi Badan Anda!')
let BB = prompt('Masukan Berat Badan Anda!')
let pasangan =  prompt('Masukan Nama Pasangan Anda!')

if (pasangan ==null){
    pasangan = 'belum punya/jomblo'
}   else {
     pasangan = 'Adalah '+ pasangan
}

alert('Nama anda adalah ' + nama +
     ', usia anda adalah '+ usia + 
     ', tiggi badan anda adalah  ' + TB +
      ',cm barat badan anda adalah  ' + BB +
       'kg dan pasangan anda  ' + pasangan)
console.log('Nama anda adalah ' + nama+
    ', usia anda adalah '+ usia +
    ', tiggi badan anda adalah ' + TB +
    ', barat badan anda adalah ' + BB +
    ' dan pasangan anda  ' + pasangan)

