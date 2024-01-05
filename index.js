// document.querySelector("h1");  same as $("h1");

// $("h1").text("Bye");

// $("button").html("<em>hey</em>");   

// $("a").attr("href","https://www.yahoo.com");

// $("h1").click(function() {
//     $("h1").css("color", "green");
// });

// $("button").click(function(){
//     $("h1").css("color", "green");
// });


// $(document).keypress(function(event){
//     $("h1").text(event.key); 
// });


$("h1").on("mouseover", function() {
    $("h1").css("color", "green"); 
});

