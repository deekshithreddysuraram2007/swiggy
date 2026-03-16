const restaurants=[

{
name:"Pizza Palace",
cuisine:"Italian Pizza",
img:"https://images.unsplash.com/photo-1513104890138-7c749659a591"
},

{
name:"Burger Barn",
cuisine:"American Burger",
img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
},

{
name:"Indian Spice",
cuisine:"Indian Food",
img:"https://images.unsplash.com/photo-1585937421612-70a008356fbe"
},

{
name:"Taco Fiesta",
cuisine:"Mexican",
img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47"
}

];


let cart=[];


/* LOAD RESTAURANTS */

function loadRestaurants(data=restaurants){

const list=document.getElementById("restaurant-list");

list.innerHTML="";

data.forEach(res=>{

list.innerHTML+=`

<div class="card">

<img src="${res.img}">

<h3>${res.name}</h3>

<p>${res.cuisine}</p>

<button onclick="addToCart('${res.name}')">
Add to Cart
</button>

</div>

`;

});

}


/* ADD TO CART */

function addToCart(name){

cart.push(name);

updateCart();

}


/* UPDATE CART */

function updateCart(){

const cartItems=document.getElementById("cartItems");

cartItems.innerHTML="";

cart.forEach(item=>{

cartItems.innerHTML+=`<p>${item}</p>`;

});

}


/* OPEN CART */

function openCart(){

document.getElementById("cartModal").style.display="flex";

updateCart();

}


/* CLOSE CART */

function closeCart(){

document.getElementById("cartModal").style.display="none";

}


/* SEARCH */

function searchRestaurant(){

const text=document.getElementById("searchInput").value.toLowerCase();

const filtered=restaurants.filter(r=>r.name.toLowerCase().includes(text));

loadRestaurants(filtered);

}


window.onload=function(){

loadRestaurants();

};
// CONTACT FORM

document.addEventListener("DOMContentLoaded",function(){

const form=document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("successMsg").innerText =
"Thank you! Your feedback has been submitted.";

form.reset();

});

});
function showAlert(){

alert("🎉 Special Offer! Get 20% OFF on your first order!");

}
function addToCart(name){

cart.push(name);

updateCart();

alert(name + " added to cart successfully!");

}
alert("Thank you! Your feedback has been submitted.");
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

/* Save preference */

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

});


/* Load saved theme */

window.addEventListener("load",()=>{

const theme = localStorage.getItem("theme");

if(theme==="dark"){

document.body.classList.add("dark-mode");

}

});
