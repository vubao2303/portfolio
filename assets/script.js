// Functions
// //
// function displayPOne {

// <a href="https://github.com/vubao2303">link</a>

function dislayMe(){
  $(".about-me-page").append(`
  <div class= "b-info">
  <img src ="./assets/pictures/IMG_1552.jpeg/>
  <h2> B Vu </h2>
  <p> tomorrow is a beautiful day </p>
  `)

};
$(".about-me").on("click", function(event){
  event.preventDefault();
  dislayMe()
})