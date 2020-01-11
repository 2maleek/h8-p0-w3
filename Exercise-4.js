function dataHandling2(arr) {
    arr.splice(1, 1, "Roman Alamsyah Elsharawy");
    arr.splice(2, 1, "Provinsi Bandar Lampung");
    arr.splice(4, 1, "Pria");
    arr.splice(5, 0, "SMA Internasional Metro");
    console.log(arr);

    // pengkondisian menjadi nama bulan
    var tanggal = arr[3].split('/');
    var descTanggal = tanggal.slice();
    switch(tanggal[1]) {
        case '01' : console.log('Januari');
        break;
        case '02' : console.log('Februari');
        break;
        case '03' : console.log('Maret');
        break;
        case '04' : console.log('April');
        break;
        case '05' : console.log('Mei');
        break;
        case '06' : console.log('Juni');
        break;
        case '07' : console.log('Juli');
        break;
        case '08' : console.log('Agustus');
        break;
        case '09' : console.log('September');
        break;
        case '10' : console.log('Oktober');
        break;
        case '11' : console.log('November');
        break;
        case '12' : console.log('Desember');
        break;
        default : console.log('Invalid nama bulan');
        break;
    }

    // decsending
    for(var i=0; i<descTanggal.length-1; i++) {
         for(var j=i+1; j<descTanggal.length; j++) {
            if(Number(descTanggal[i]) < Number(descTanggal[j])) {
              var temp = descTanggal[i];
              descTanggal[i] = descTanggal[j];
              descTanggal[j] = temp;
            }
         }
    }

    console.log(descTanggal);
    console.log(tanggal.join('-'));
    console.log(arr[1].slice(0, 15));
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

