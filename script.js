// document.write("<h1>JS寫法</h1>");

//變數宣告 ------------------------------------------------

// var my_name = "\"YC\"" + "Hsieh";
// var my_age = 21;
// var ismale = true;

// document.write(my_name);

// 字串用法 -------------------------------------------------

// 字串長度      my_name.length
// 取出單一字母  my_name.charAt(0)
// 轉大小寫      my_name.toUpperCase/toLowerCase
// 字母index    my_name.indexOf("Y")
// 取出子字串    my_name.substring((2,5))

// 數字用法 --------------------------------------------------

// 最大最小值 Math.min()/max()
// 次方       Math.power(2,5) = 2**5
// 開根號     Math.sqrt(36) = 6
// 隨機整數   Math.random() = 0~1隨機小數
// 取位數     Math.round()

// var yourname = prompt("enter your name");
// var age = prompt("enter your age");
// age = parseFloat(age)*2;

// document.write("your account might be " + yourname + age);

//陣列array 基本上跟python差不多 --------------------------------
// var scores = [80,50,60,20,95];
// document.write(scores.length, " 人的成績分別是 ",  scores);
// scores[0] = 75; // assign

// 函式 function -----------------------------------------------

// function add(num1,num2){
//     return num1+num2;
// }

// document.write(add(1,5));

// if 判斷式 ---------------------------------------------------
// and = &&, or = ||, not = !

// var hungry = 60;
// var noteat = true;
// if(noteat && hungry>80){
//     document.write("去吃飯")
// }
// else if(noteat && hungry <= 80){
//     document.write("怎麼還沒吃飽")
// }
// else{
//     document.write("吃飽睡覺")
// }

// function max_num(int1,int2,int3){
//     var max = 0;
//     if(int1>max){
//         max = int1;
//     }
//     if(int2>max){
//         max = int2;
//     }
//     if(int3>max){
//         max = int3;
//     }
//     return max;
// }

// document.write(max_num(4,3,10));

//物件Object ---------------------------------------------
// key:value

// var person = {
//     name:"YC",
//     age :23,
//     is_male : true,
//     print_name: function(){
//         document.write(this.name);
//     }
// }

// person.print_name();

//while迴圈 -----------------------------------------------

// var i = 1;
// while(i<=3){
//     document.write(i,"</br>");
//     i++;
// }

//先做再判斷

// var i = 5;
// do{
//     document.write(i,"</br>");
//     i++;
// }while(i<=5)

//for迴圈 -------------------------------------------------

// for(var i = 0; i<10; i++){
//     document.write(i,"</br>");
// }

// 二維陣列、巢狀迴圈

// var num = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [0]
// ]

// for (var i = 0; i < num.length; i++){
//     for (var j = 0; j < num[i].length; j++){
//         document.write(num[i][j]);
//     }
// }

// class 模板

// class Phone{
//     constructor(number,year,waterproof){
//         this.number = number;
//         this.year = year;
//         this.waterproof = waterproof;
//     }

//     phone_age(){
//         return 2021-this.year;
//     }
// }

// var phone1 = new Phone("123", 2000, false);
// document.write(phone1.number);

// 引入html物件

// window為網站的全域，所有東東都在window下面

// var h1 = document.getElementById("header");
// h1.innerText = "這是首頁啦";
// h1.style.backgroundColor = "red";

// var link = document.getElementById("link");
// link.href = "https://www.netflix.com/browse";