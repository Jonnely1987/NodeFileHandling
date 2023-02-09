const ex = require('express')
const wd = ex();
const fs = require('fs');

wd.set("view engine",  "ejs")
wd.use(ex.urlencoded({ extended: true}))

wd.get('/login',(r1, r2)=>{
    r2.render("login")
});

wd.post('/login-registration', (r1, r2)=>{
   const username_value = 'admin';
   const password_value = '123456';
            
   let usr = r1.body.username
   let pwd = r1.body.password
   //passw = readingPassword('John', 'ramon')

   if(usr == username_value && pwd == password_value){
   // r2.send("OK");
    r2.render('form')

   } else {
    //r2.send("Sorry");
    r2.render("login", { errorMessage:"Sorry try again" })
   }

   //r2.send("Inputs: " + usr.toString() + " : " + pwd.toString())
   //console.log(usr + " : " + pwd)
   //console.log(usr.toString() + " : " + pwd.toString())

});

wd.post('/form-registration', (req, res)=>{
 
 let fname = req.body.firstname
 let lname = req.body.lastname
 let password = 'MyPassword'
    
 console.log(fname +  "    " +lname)

    fs.writeFile('storage/' + fname + "-" +lname + '.txt', fname +  "    " +lname, function (err) {
    if (err) throw err;
     console.log('Saved!');
     res.end();
    });


})

function readingPassword(fname, lname){
let pass = '';

    fs.readFile('shared/' + fname + '-' + lname + '.txt', function(err, data){
        pass = data
        res.end();
    });

return pass;
}





wd.listen(3000)
console.log('running in port 3000')

//npm init -y
//npm i express
//npm i ejs