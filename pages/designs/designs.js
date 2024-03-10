const images = document.getElementById('allImages');
const allImages = document.querySelectorAll('.clickImg');
const Container = document.getElementById('imageContainer');
const ikonClose = document.getElementById('close');
let arrImges = [];

Container.style.display = 'none';
Container.style.position = 'absolute';
Container.style.width =' 40%';
Container.style.height =' 60%';
Container.style.zIndex = '999';
Container.style.marginRight = '30%';
Container.style.marginTop = '8%';
Container.style.border = '4px solid #D8AC5A';
Container.style.textAlign = 'center';
Container.style.backgroundColor = 'black';

allImages.forEach(img => {
    img.addEventListener('click', () => {
      images.style.opacity = '0.4';
      const imgId =JSON.stringify(`${img.id}`);
        
        Picture(imgId);
        
    });
});

  
let i=100;
  const g=(arr,id)=>{
        arr.forEach(item => {
           
           if( item.kategory === JSON.parse(id) ){
            arrImges.push(item.image);  
    
           }
        });
        function showImges(){
              Container.style.display = "block";
          for( let i = 0 ; i < arrImges.length ; i++){
             const img = document.createElement('img');
             img.src = `../../assets/pictures/${arrImges[i]}`;
             img.style.height = "80%";
             img.style.width = "90%";
             img.classList.add("hidden");
             Container.appendChild(img);

          }
          let index = 0;
          let interval = setInterval(function() {
            // הסתרת כל התמונות
            let allImagess = document.querySelectorAll("#imageContainer img");
            allImagess.forEach(function(img) {
              img.classList.add("hidden");
            });
        
            // הצגת התמונה הנוכחית
            let currentImage = document.querySelectorAll("#imageContainer img")[index];
            currentImage.classList.remove("hidden");
        
            // הגדלת האינדקס או איפוסו ל-0 אם הוא עובר את מספר התמונות
            index = (index + 1) % arrImges.length;
          }, 1500); // שינוי העיכוב כפי שרצוי
        }
        showImges();
        ikonClose.onclick = () =>{
          location.reload();
          Container.style.display = "none";
          
        }
    }

  

           



