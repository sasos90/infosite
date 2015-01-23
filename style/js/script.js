$(document).ready(function(){
    $("section").each(function(){
        $this = $(this);
        var id = $this.attr("id");
        var nextSectionNr = parseInt(id.replace("section", "")) + 1;
        if ($("#section" + nextSectionNr).length > 0) {
            //because next section exists, we can load it into the page
            loadSection("section" + nextSectionNr);
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