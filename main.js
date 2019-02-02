$(".makeBold").click(function(){
    $("#paragraph").css("font-weight","bold");
});
$(".makeItalic").click(function(){
    $("#paragraph").css("font-style","italic");
});
$(".makeUnderlined").click(function(){
    $("#paragraph").css("text-decoration","underline");
});
$("#fontFamily").change(function(){
	var font = $("#fontFamily")[0].value;
	$("#paragraph").css("font-family",font);
});
$("#fontSize").change(function(){
	var size= $("#fontSize")[0].value;
	$("#paragraph").css("font-size",size);
});
