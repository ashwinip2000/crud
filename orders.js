var express = require('express');
var router = express.Router();
var db = require('../db');
router.get('/', function(req, res, next) {
    var query = 'select * from product'

    db.query(query,function(err,rows,fields){
        if(err) throw err;
        // res.json(rows);
        res.render('orders', { title: 'Orders',orders : rows });
    });
  
});

router.get('/createOrder-form',function(req,res,next){
    res.render('createOrderform',{title:'Create Orders'});
})

router.post('/create',function(req,res,next){
    // console.log(req.body);
    var sql="insert into product values(null,'" + req.body.pName +"','" + req.body.pDesc +"','" + req.body.pPrice +"','" + req.body.pQty +"')"
    db.query( sql, function(err,result){
      if(err) throw err
      res.redirect('/orders');
    })
    // db.end();
})

router.get('/editOrder-form/:id',function(req,res,next){
    var id = req.params.id;
    var sql=`select * from product where id = ${id}`;
    
    db.query(sql,function(err,rows,fields){
        if(err) throw err
        res.render('editOrderform',{title:'Update Orders',orders:rows[0]});
    })
})
router.post('/edit/:id',function(req,res,next){
    var id=req.params.id;
    var pName= req.body.pName;
    var pDesc= req.body.pDesc;
    var pPrice = req.body.pPrice;
    var pQty = req.body.PQty;
    
    var sql=`update product set pName= "${pName}" ,pDesc = "${pDesc}", pPrice = "${pPrice}", pQty = "${pQty}" where id = "${id}"`
    
    db.query( sql, function(err,result){
      if(err) throw err;
      res.redirect('/orders');
    })
    // db.end();
})

router.get('/delete/:id',function(req,res,next){
    var id = req.params.id;
    var sql=`delete from product where id=${id}`;
    db.query( sql, function(err,result){
        if(err) throw err;
        res.redirect('/orders');
      })
});

module.exports = router;
