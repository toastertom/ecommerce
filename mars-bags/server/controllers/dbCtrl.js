var app = require('../../server.js');
var db = app.get('db');

//read_products
module.exports = {
    readProducts: function(){
        db.read_products([10], function(err, products){
            console.log(err, products);
        })
    }
}

// Create Product
module.exports.createProduct = function () {
  db.create_product([], function(err, productCreated) {
    console.log(err, productCreated);
  })
}

//Update product
module.exports.updateProduct = function () {
  db.update_product([], function (err, productUpdated) {
    console.log(err, productUpdated);
  })
}

// Delete Product
module.exports.deleteProduct = function () {
  db.delete_product([],function (err, productDeleted) {
    console.log(err, productDeleted);
  })
}
