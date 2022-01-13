const allTodos = document.querySelectorAll(".todo");
console.log(allTodos);

for (let todo of allTodos) {
    todo.innerText = "Aamzing skill for Virat Kholi";
}

const favs = ["Chennai","Coimbatore","Tiruppur","Salem","Erode"];
const favList = document.createElement("ul");

for(let fav of favs){
    const favItem = document.createElement("li");
    favItem.innerText = fav;
    favList.append(favItem);
}
document.body.append(favList);

// Task 1 :

const URL1 = "https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg";
const img1 = document.createElement("img");
img1.setAttribute("src",URL1);
document.body.append(img1);


const URL2 = "https://i.pinimg.com/736x/a7/30/e0/a730e0dec7f98bc11e199d7b31f22f66.jpg";
const img2 = document.createElement("img");
img2.setAttribute("src",URL2);
document.body.append(img2);

const URL3 = "https://www.whatspaper.com/wp-content/uploads/2021/07/hd-beautiful-wallpaper-whatspaper-8.jpg";
const img3 = document.createElement("img");
img3.setAttribute("src",URL3);
document.body.append(img3);


const URL4 = "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const img4 = document.createElement("img");
img4.setAttribute("src",URL4);
document.body.append(img4);




// Task 2 :
const country = countriesInfo;
const flag = "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png";
const name = "India";
const population = " 1,394,975,829";
const region = "Asia";
const capital = "New Delhi";
console.log(country);
