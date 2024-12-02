const mysql = require('mysql');

const dbConfig = {
    host:"localhost",
    user:"root",
    password:"70986019",
    port:3306,
    database:"bible_db"
}

const db = mysql.createPool(dbConfig);

module.exports = (query) => {
    return new Promise((resolve,reject)=>{
        db.connect(err =>{
            if(err){
                reject(err);
            }else{
                db.query(query,(err,results)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(results);
                    }
                });
            }
        });
    });
}