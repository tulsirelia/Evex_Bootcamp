let btn = document.querySelector('button');
let div = document.querySelector('div');
let h3 = document.querySelector('h3');



let getRandomColor = function(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
    
}

btn.addEventListener('click', function(){
    div.style.backgroundColor = getRandomColor();
    h3.innerText = getRandomColor();
})
// console.dir(h3);



