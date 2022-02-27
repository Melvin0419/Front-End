//取得物件

var btn = document.getElementById("btn");
var title = document.getElementById("title");
var content = document.getElementById("content");
var list = document.getElementById("list");

btn.addEventListener("click", function(){
    list.innerHTML = list.innerHTML + `   
    <div id = "list">
        <h2>${title.value}</h2>
        <p>${content.value}</p>
        <hr/>
    </div>
    `
})