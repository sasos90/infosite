$(document).ready(function(){
    $("section").each(function(){
        $this = $(this);
        var id = $this.attr("id");
        var sectionId = parseInt(id.replace("section", ""));
        if (sectionId > 1) {
            loadSection("section" + sectionId);
        }
    });

    /* smooth scrolling sections */
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            console.log(target);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
});

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