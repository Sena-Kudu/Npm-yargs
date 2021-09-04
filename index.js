const yargs = require('yargs');
const kisi = require('./kisiEkle');


yargs.command({

    command : 'ekle',
    describe : 'yeni kişi eklemeye yarar',
    builder : {

        isim: {

            describe: 'eklenecek kişi adi',
            demandOption: true,
            type : 'string'

        },
        tel: {

            describe: 'eklenecek kişi teli',
            demandOption: true,
            type : 'string'

        }

    },
    handler(argv){

       kisi.kisiEkle(argv.isim,argv.tel);

    }
 
});

yargs.command({

    command : 'sil',
    describe : 'kişi silmeye yarar',
    builder : {

        isim: {

            describe: 'eklenecek kişi adi',
            demandOption: true,
            type : 'string'

        }

    },
    handler(argv){

       kisi.kisiSil(argv.isim);

    }
 
});

yargs.parse();