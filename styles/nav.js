const showtime = document.getElementById('time');
const date = new Date();
const hour = date.getHours();

if (hour>20 && hour<23 || hour<6) 
    showtime.innerHTML = 'לילה טוב!!';
    else if (hour>=6 && hour<=12 || hour<=12)
    showtime.innerHTML = 'בוקר טוב!!';
    else if (hour >= 1 && hour<=19)
    showtime.innerHTML = 'צהריים טובים!!';
    else if (hour >= 19)
    showtime.innerHTML = 'ערב טוב!!';

//  הצגת שם המשתמש בnav
const user = document.getElementById('user');
const showUser = JSON.parse(localStorage.getItem("name"));
user.innerHTML = showUser ;
console.log(user);
user.style.color = "#D8AC5A";
user.style.fontSize  = '100%';



