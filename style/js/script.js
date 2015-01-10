$(document).ready(function(){
    loadSection("section2");
    $(document).scroll(function() {
        $("section").each(function(){
            $this = $(this);
            // if section is visible and we are not at the top of the page
            if (isScrolledIntoView($this) === true && $(window).scrollTop() !== 0) {
                if (saveLoadedSection($this.attr("id")) === true) {
                    // load content with ajax for next section
                    var nextSectionNr = parseInt($this.attr("id").replace("section", "")) + 1;
                    if ($("#section" + nextSectionNr).length > 0) {
                        //because next section exists, we can load it into the page
                        loadSection("section" + nextSectionNr);
                    }
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
        async: false,
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