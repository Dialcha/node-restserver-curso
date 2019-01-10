 //========================
 //Puerto
 //========================
 process.env.PORT = process.env.PORT || 3000;

 //========================
 //Entorno
 //========================
 process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

 //========================
 //Base de datos
 //========================
 let urlDB;

 if (process.env.NODE_ENV === 'dev') {
     urlDB = 'mongodb://localhost:27017/cafe'
 } else {
     urlDB = 'mongodb://usuario:d123456@ds153824.mlab.com:53824/cafe';
 }

 process.env.URLDB = urlDB;