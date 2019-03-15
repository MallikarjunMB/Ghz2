$(function(){
    // Assume that your 'a' elements are in #MenuBar and #colOne
    $("#MenuBar a, #colOne a").bind("click", function(){
        // Remove all highlights
        $("#MenuBar a, #colOne a").removeClass("clicked");

        // Store the name attribute
        var name = $(this).attr("name");

        // Find all elements with given name and highlight them
        $("#MenuBar a[name='"+name+"'], #colOne a[name='"+name+"']").addClass("clicked");
    });
});
