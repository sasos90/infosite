$(document).ready(function(){
    $(document).scroll(function() {
        $("section").each(function(){
            $this = $(this);
            if (isScrolledIntoView($this) === true) {
                if (saveLoadedSection($this.attr("id")) === true) {
                    // load content with ajax for next section
                    
                }
            }
        });
    });
});

var loadedViews = [];

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function saveLoadedSection(id)
{
    var sectionExists = false;
    loadedViews.forEach(function(el){
        if (el === id) {
            sectionExists = true;
        }
    });
    if (sectionExists === false) {
        loadedViews.push(id);
        return true;
    }
    return false;
}