//toggle menu icon up to 1080px
const menu = document.querySelector(".toggle-btn");
menu.onclick = function(){
    dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("active");
}

//toggle join button
// const join = document.querySelector(".join-button");
// join.onclick = function(){
//     dropDownJoin = document.querySelector(".dropdown-join");
//     dropDownJoin.classList.toggle("active");
// }