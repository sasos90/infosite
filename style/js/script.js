$(document).ready(function(){
    loadSection("section2");
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

function loadSection(name)
{
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "Section/load",
        data: {
            controller: $("#controller").val(),
            method: $("#method").val(),
            section: name
        },
        success: function(result) {
            if (result.status === "success") {
                $("#" + name).html(result.data.sectionHtml);
            }
        }
    });
}