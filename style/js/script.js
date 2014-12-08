$(document).ready(function(){
    $(document).scroll(function() {
        $("section").each(function(){
            $this = $(this);
            if (isScrolledIntoView($this) === true) {
                console.log($this.attr("id"));
            }
        });
    });
});



function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}