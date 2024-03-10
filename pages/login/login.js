let arr = JSON.parse(localStorage.getItem('user')) || [];

const form = document.getElementById('form');
const singin = document.getElementById('singin');
const registerWindow = document.getElementById('registerWindow');
const connectWindow = document.getElementById('connectWindow');
const connect = document.getElementById('connect');
const connectEmail = document.getElementById('connectEmail');
const connectpassword = document.getElementById('connectpW');
const btnPrevious = document.getElementById('back');

//

// שליפה של האינפוטים
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

const pwInput = document.getElementById('password');
const pwtInput = document.getElementById('passwordIsTrue');
const addressInput = document.getElementById('address');
const pInput = document.getElementById('phonNamber');

// כפתור חזרה למקום בו היה קודם
btnPrevious.onclick = () => {
  history.back();
};

let flag = false;

// בהתחלה רואים את החלון של התחברות ולא רואם את החלון של להרשמה
registerWindow.style.display = 'none';
registerWindow.style.position = 'absolute';
registerWindow.style.width = '30%';
registerWindow.style.height = '87%';
registerWindow.style.zIndex = '999';

connectWindow.style.display = 'block';
connectWindow.style.position = 'absolute';
connectWindow.style.width = '30%';
connectWindow.style.height = '70%';
connectWindow.style.zIndex = '999';

// ברגע שלוחץ להרשמה
connect.onclick = (event) => {
   
let exsist = false;
  event.preventDefault();
  // שמירת המייל שהמשתמש הכניס
  localStorage.setItem("email", JSON.stringify(connectEmail.value));
 
  // בדיקה במערך האם המשתמש קיים לפי המייל שהכנס
 for (let index = 0; index < arr.length; index++) {

  if(JSON.stringify(arr[index].email) === localStorage.getItem("email")){
   exsist = true;
   localStorage.setItem("name", JSON.stringify(arr[index].firstName));
  }
  
 }
//  אם הוא לא קיים נשלח להרשמה
 if( exsist === false){
  alert('משתמש לא קיים לחץ להרשמה')
  registerWindow.style.display = 'block';
  connectWindow.style.display = 'none';
  emailInput.value=JSON.parse(localStorage.getItem("email")) ;
  
 }
 
//  אם הוא קיים חוזר למקום בו היה
 else{
 alert('משתמש קיים לחץ על previos לחזרה למקום בו היית');
 }
 
  
}

singin.onclick = (event) => {
  localStorage.setItem("letter",null);

  event.preventDefault();
  const userfirstName = document.getElementById('name').value;
  const useraddress = document.getElementById('address').value;
  const userphonNamber = document.getElementById('phonNamber').value;
  const useremail = document.getElementById('email').value;
  const userpassword = document.getElementById('password').value;
  const userpasswordIsTrue = document.getElementById('passwordIsTrue').value;

  const user1 = {
    firstName: userfirstName,
    address: useraddress,
    phonNamber: userphonNamber,
    email: useremail,
    password: userpassword,
    passwordISTrue: userpasswordIsTrue,
  };
  if(user1.password ===user1.passwordISTrue){
    arr.push(user1);
    localStorage.setItem("user", JSON.stringify(arr));
    localStorage.setItem("name", JSON.stringify(user1.firstName));

    alert('הפרטים נקלטו בהצלחה');
    location.href = `../../pages/home/home.html`;
  }
  else{
    alert('סיסמאות לא זהות')
  }
 
};

// ולידציה שם
nameInput.onkeydown = function (event) {
  if (!isKeyValid1(event.key)) {
    alert('key not valid: ' + 'הכנס שם משתמש');
    event.preventDefault();
  }
}

// ולידציה סיסמא
pwInput.onkeydown = function (event) {
  if (!isKeyValid2(event.key)) {
    alert('סיסמא שגויה: ' + 'הכנס סיסמא');
    event.preventDefault();
  }
}

// ולידציה אימות סיסמא
pwtInput.onkeydown = function (event) {
  if (!isKeyValid2(event.key)) {
    alert('key not valid: ' + 'הכנס סיסמא תקינה');
    event.preventDefault();
  }
}

// ולידציה כתובת
addressInput.onkeydown = function (event) {
  if (!isKeyValid3(event.key)) {
    alert('key not valid: ' + 'הכנס רחוב ומספר בנין');
    event.preventDefault();
  }
}

// ולידציה פלאפון
pInput.onkeydown = function (event) {
  if (!isKeyValid2(event.key)) {
    alert('key not valid: ' + 'הכנס מספר פלאפון תקין');
    event.preventDefault();
  }
}

// אותיות אנגלית או עברית או רווח
const isKeyValid1 = function (key) {

  return key >= 'a' && key <= 'z'
    || (key >= 'A' && key <= 'Z')
    || (key >= 'א' && key <= 'ת')
    || key === ' '
}

//מספרים בלבד
const isKeyValid2 = function (key) {
  return key >= '0' && key <= '9'
}

//אותיות או רווח או מספרים בלבד
const isKeyValid3 = function (key) {
  return (key >= 'a' && key <= 'z'
    || key >= 'A' && key <= 'Z'
    || (key >= 'א' && key <= 'ת')
    || key === ' ' || key >= '0' && key <= '9')

}
