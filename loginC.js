var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var connection = require('../db');
router.get('/', function(req, res, next) {
    res.render('loginC', { title: 'User' });
  });
  
  function User() {};
  User.prototype={
    find:function(user=null,callback)
    {
      if(user)
      {
        var field = Number.isInteger(user) ? 'id' : 'email';
      }
      let sql=`select * from customerinfo where ${field} = ? `;
      connection.query(sql,user,function(err,result){
        if(err) throw err
        
        if(result.length){
            callback(result[0]);
        }
        else{
            callback(null);
        }
      });
    },
  
    create : function(body,callback)
    {
      let pwd=body.cPassword;
      console.log(pwd);
      body.cPassword=bcrypt.hashSync(pwd,10);
  
      var bind=[];
      for(prop in body){
        bind.push(body[prop]);
      }
  
      //let sql=`insert into customerinfo(email,cName,cMobile,cPassword) values(?, ?, ?, ?)`;
      let sql="insert into customerinfo values(null,'" + body.email +"','" + body.cName +"','" + body.cMobile +"','" + body.cPassword +"' )";
      connection.query(sql,bind,function(err,lastId){
        if(err) throw err
        callback(lastId);
  
      });
    },
    login : function(email,cPassword,callback){
      this.find(email,function(user){
        if(user)
        {
          if(bcrypt.compareSync(cPassword,user.cPassword)){
            callback(user);
            return;
          }
        }
        callback(null);
      });
    }
  }
  const user=new User(); 

router.post('/submit',function(req,res,next){
    
    user.login(req.body.email , req.body.cPassword , function(result){
        if(result)
        {
          //req.session.user = result;
          //req.session.opp = 1;//1 for login 0 for register
          // res.send('Logged in as: ' + result.email);
          res.render('dashboard');
        }
        else{
          res.send('email or password incorrect');
        }
      });
  });



  router.post('/register',function(req,res){
    // const user=new User();
    // let userInput={
    //   email : req.body.email,
    //   cName : req.body.cName,
    //   cMobile : req.body.cMobile,
    //   cPassword : req.body.cPassword
    // };
  
    // user.create(userInput,function(lastId){
    //   if(lastId){
    //     user.find(lastId , function(result){
    //     //   req.session.user = result;
    //     //   req.session.opp = 0;
    //       res.render('dashboard');
    //     });
    //   }
    //   else{
    //     console.log('error creating a new user');
    //   }
    // });
  
    let pwd=req.body.cPassword;
    console.log(pwd);
    req.body.cPassword=bcrypt.hashSync(pwd,10);

    var bind=[];
    for(prop in req.body){
      bind.push(req.body[prop]);
    }

    //let sql=`insert into customerinfo(email,cName,cMobile,cPassword) values(?, ?, ?, ?)`;
    let sql="insert into customerinfo values(null,'" + req.body.email +"','" + req.body.cName +"','" + req.body.cMobile +"','" + req.body.cPassword +"' )";
    
        connection.query( sql,bind, function(err){
            if(err) throw err
            res.render('dashboard')
          });
  });
  
module.exports = router;