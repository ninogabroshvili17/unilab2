//toggle menu icon up to 1080px
const menu = document.querySelector(".toggle-btn");
menu.onclick = function(){
    dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("active");
}


//pet knowledge slider left and right arrows
const rightArrow = document.getElementById("right-arrow");
const imageSlider = document.querySelector(".pet-knowledge-banner-slider")

rightArrow.addEventListener('click', () => {
    const banners = document.querySelectorAll(".pomeranian-banner");
    imageSlider.appendChild(banners[0]);
});


const leftArrow = document.getElementById('left-arrow');

leftArrow.addEventListener('click', () => {
    const banners = document.querySelectorAll(".pomeranian-banner");
    imageSlider.insertBefore(banners[banners.length - 1], banners[0]);
});


//real time countdown

    const countDownDate = new Date("Nov 16, 2024 00:00:00").getTime(); //date when the countdown will end

    //interval will repeat on 1000 milliseconds, which is one second
    const interval = setInterval( function()
    {
        let now = new Date().getTime(); //this stores current date
        let difference = countDownDate - now; //how much time is left between countdown vs todays date

        //calculation of the distance in terms of days, hours, minutes and seconds
        //1 second = 1000 milliseconds
        //1 minute = 60 * 1000 = 60 000 milliseconds
        //1 hour = 60 * 60 000 = 3 600 000milliseconds
        //1 day = 24 * 3 600 000 = 86 400 000 milliseconds

        //difference is represented in milliseconds. We can reach days, hours, minutes and seconds one by one like this:

        let days = Math.floor(difference / (86400000));
        //after getting to days remaining milliseconds were left that was not rounded to days so we're deviding remaining by hours now and so on: 
        let hours = Math.floor((difference % (86400000) / 3600000));
        let minutes = Math.floor((difference % (3600000) / 60000));
        let seconds = Math.floor((difference % (60000) / 1000));


        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        
    }, 1000)



