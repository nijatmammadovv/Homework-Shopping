(function(){
    const card = document.getElementsByClassName(".card")
    const cardbody = document.getElementsByClassName(".card-body")

    cardbody.addEventListener('click', function(){
        card.classList.toggle('container');
});







// var total = 0;
//    $(".card").on('click', ".card-text", function() {        
//         $(this).appendTo(".basket");
//         getTotal()
//    });
//     $(".basket").on('click', ".card-text", function() {      
//       $(this).appendTo("#items");   
//       getTotal()
//    });


//   function getTotal(){
//      total = 0;
//      $(".basket").find('.card-text').each(function(i){
//         total += parseInt($(this).text().slice(0,-1));
//         if(i + 1 === $(".basket").find('.card-text').length){
//          $('.total_price').text(total+'$');
//        } 
//      });
//    } 