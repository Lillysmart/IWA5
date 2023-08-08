
 const FREE_WARNING = 'Free shipping only applies to single customer orders';
 const BANNED_WARNING= 'Unfortunately we do not ship to your country of residence'
 const NONE_SELECTED = 0  

let customers = 1
let location = 'RSA'
let currency = null
 let shipping=null


if (location === "RSA") { console.log( currency='R',shipping = 400 ) }

location= 'NAM' 
currency= "$"
if (location === "NAM"){ 
    console.log(currency,shipping = 600) }
else { console.log(shipping = 800 , currency)}

 const shoes = 300 *1
const toys =100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED 
let cost =shoes+ toys+ shirts+ batteries+ pens ; 
 
currency = 'R'
let warning= "WARNING!"
let free_shipping="FREE SHIPPING"

if (cost >1000 && location==='RSA'
  || location==='NAM' && customers === 1  ) { console.log (free_shipping);}

  if (cost > 1000 &&  location !== 'NAM' || location !=='RSA' && customers !== 1) 
  {console.log (FREE_WARNING)}
		
location="NK"
location === 'NK' ? console.log(BANNED_WARNING): console.log('price', currency, shoes + batteries + pens + shirts +shipping )
console.log('price'+ currency + (cost +shipping) )