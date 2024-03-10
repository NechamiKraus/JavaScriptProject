const step_1 = document.getElementById('step_1');
const step_2 = document.getElementById('step_2');
const step_3 = document.getElementById('step_3');
const step_4 = document.getElementById('step_4');
const address = document.getElementById('address');
const addresSpan = document.getElementById('addresSpan');


// שליפת כל האינפוטים לבדיקת תקינות
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('userInput');
const pwInput = document.getElementById('pw');
const pwtInput = document.getElementById('pwT');
const fnameInput = document.getElementById('fullName');
const adressInput = document.getElementById('address');
const pInput = document.getElementById('phone');
const cNInput = document.getElementById('cardName');
const numCInput = document.getElementById('cardno');
const cvcInput = document.getElementById('cvcpwd');
const dateInput = document.getElementById('inputDate');

const contactPw = JSON.parse(localStorage.getItem("pW"));

// שליפה של האייקון

const ikon = document.getElementById('ikon');

// שליפה של הכפתורים
const nextStep_1 = document.getElementById('nextStep_1');
const nextStep_2 = document.getElementById('nextStep_2');
const nextStep_3 = document.getElementById('nextStep_3');
const previous_2 = document.getElementById('previous_2');
const previous_3 = document.getElementById('previous_3');

step_1.style.display = "block";
step_2.style.display = "none";
step_3.style.display = "none";
step_4.style.display = "none";

ikon.classList.add("k");
// מעבר לשלב השני

nextStep_1.onclick = () => {
    let pw = JSON.parse(pwInput.value);
    let pwT = JSON.parse(pwtInput.value);
   
    // ולידציה אימייל
    
    let contactEmail = JSON.parse(localStorage.getItem("email"));
   
    if (contactEmail !== emailInput.value) {
        alert('משתמש לא מחובר לחץ להתחברות');
        location.href = `../login/login.html`;
    }
    if (pw === pwT ) {
        step_1.style.display = "none";
        step_2.style.display = "block";
        ikon.className = "fas fa-user k";
    }
    else {
        alert('סיסמאות לא תואמות')
    }

}
// מעבר לשלב השלישי
nextStep_2.onclick = () => {
    localStorage.setItem("addres", JSON.stringify(address.value));
    addresSpan.innerHTML = JSON.parse(localStorage.getItem("addres"));
    step_2.style.display = "none";
    step_3.style.display = "block";
    ikon.className = "fas fa-credit-card k";

}
// מעבר לשלב הרביע
nextStep_3.onclick = () => {
    step_3.style.display = "none";
    step_4.style.display = "block";
    ikon.className = "fas fa-check k";
    sessionStorage.setItem("pay",1);

}
// חזרה לשלב הראשון
previous_2.onclick = () => {
    step_2.style.display = "none";
    step_1.style.display = "block";
    ikon.className = "fas fa-lock k";
}
// חזרה לשלב השני
previous_3.onclick = () => {
    step_3.style.display = "none";
    step_2.style.display = "block";
    ikon.className = "fas fa-user k";
}


// ולידציה שם
nameInput.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid1(event.key)) {
        alert('key not valid: ' + 'הכנס שם ');
        event.preventDefault();
    }
}
fnameInput.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid1(event.key)) {
        alert('key not valid: ' + 'הכנס שם מלא');
        event.preventDefault();
    }
}

// ולידציה סיסמא
pwInput.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid2(event.key)) {
        alert('סיסמא שגויה: ' + 'הכנס סיסמא');
        event.preventDefault();
    }

}

// ולידציה כתובת
adressInput.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid3(event.key)) {
        alert('key not valid: ' + 'הכנס רחוב ומספר בנין');
        event.preventDefault();
    }
}

// ולידציה פלאפון
pInput.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid2(event.key)) {
        alert('key not valid: ' + 'הכנס מספר פלאפון תקין');
        event.preventDefault();
    }
}

// ולידציה שם בעל כרטיס
cNInput.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid1(event.key)) {
        alert('key not valid: ' + 'הכנס את שם בעל הכרטיס');
        event.preventDefault();
    }
}
// ולידציה מספר כרטיס
numCInput.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid2(event.key)) {
        alert('key not valid: ' + 'בכנס מספר אשראי');
        event.preventDefault();
    }
}

// וליציה cvc
cvcInput.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid2(event.key)) {
        alert('key not valid: ' + 'הכנס שלוש ספרות שבגב הכרטיס');
        event.preventDefault();
    }
}

// ולידציה תוקף
dateInput.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid2(event.key)) {
        alert('key not valid: ' + 'הכנס תוקף');
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




