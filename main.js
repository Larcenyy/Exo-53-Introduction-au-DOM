
let h1Title = document.querySelectorAll("p");
console.log(h1Title);

for (let i = 0; i < h1Title.length; ++i){
    h1Title.item(i).style.color = "red";
    h1Title.item(i).style.width = "75%";
}

let back = document.querySelectorAll(".spanTest")
console.log(back);

for (let i = 0; i < back.length; ++i){
    back.item(i).style.background = "red";
    back.item(i).dir = "lft";
}

let click = document.querySelectorAll("a");
for (let i = 0; i < click.length; ++i){
    click.item(i).innerHTML = "click ici"
    click.item(i).style.link = "https://google.fr";
}

console.log(click);