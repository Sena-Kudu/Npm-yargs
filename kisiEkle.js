
const fs = require('fs');

const ekle = function (isim,tel) {

    //console.log("isim: "+isim+ " tel: "+tel);
    const kisilerDizisi = dosyadanKisileriOku();

    const ayniAdaSahipKisiler = kisilerDizisi.filter(function (kisi) {

        return kisi.isim === isim

    });

    if(ayniAdaSahipKisiler.length === 0) {

        kisilerDizisi.push({

            'isim' : isim,
            'tel'  : tel
    
        });
    
        dosyayaKisileriYaz(kisilerDizisi);

    } else {

        console.log(isim+" adlı kişi kayıtlıdır.");

    }



}

const dosyadanKisileriOku = function() {

    try{

        const dataBuffer = fs.readFileSync('kisiler.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch(e) {

        return [];

    }   

}

const dosyayaKisileriYaz = function(kisilerDizisi) {

    const jsonData = JSON.stringify(kisilerDizisi);
    fs.writeFileSync('kisiler.json',jsonData)

}

const sil = function (isim) {

    const tumKisiler = dosyadanKisileriOku();

    const dosyayaYazilacakKisiler = tumKisiler.filter(function(kisi){

        return kisi.isim !== isim

    });

    if(tumKisiler.length > dosyayaYazilacakKisiler.length) {
        console.log("Kişi bulundu ve silindi");
        dosyayaKisileriYaz(dosyayaYazilacakKisiler);
    } else {
        console.log("Kişi bulunamadı.");
    }

}

const goster = function (isim) {

}

const listele = function () {

}

module.exports = {
    kisiEkle : ekle,
    kisiSil : sil,
    kisiGoster : goster,
    kisiListele : listele


}