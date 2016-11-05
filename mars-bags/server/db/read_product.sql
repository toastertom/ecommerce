select name, type, description, price, imageURL
from products
where itemid = $1;
