select name, type, description, price, imageurl
from products
where itemid = $1;
