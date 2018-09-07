//Check off a todo item when clicked
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

//Click on X to remove todo item
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
})

//Add new todo item from text box
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

$('.fa-plus').click(function(){
    $("input[type='text']").fadeToggle(100);    
})