var app = require('../../server.js');
var db = app.get('db');

//Get all Items
module.exports = {
    readProducts: function(req, res){
        db.read_products( function(err, products){
            res.status(200).send(products);
        })
    }
}

//Get one item
module.exports.readProduct = function(req, res){
  db.read_product([itemid], function(err, product){
    res.status(200).send(product);
  })
}

// Create Product
module.exports.createProduct = function (req, res) {
  db.create_product(req.body.data, function(err, productCreated) {
    res.status(200).send(err, 'Product was created!');
  })
}

//Update product
module.exports.updateProduct = function (req, res) {
  db.update_product([], function (err, productUpdated) {
    res.status(200).send(err, 'Product was updated!');

  })
}

// Delete Product
module.exports.deleteProduct = function (req, res) {
  db.delete_product([],function (err, productDeleted) {
    res.status(200).send(err, 'Product was deleted');
  })
}
