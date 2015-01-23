$(document).ready(function(){
    $("section").each(function(){
        $this = $(this);
        var id = $this.attr("id");
        var sectionId = parseInt(id.replace("section", ""));
        if (sectionId > 1) {
            loadSection("section" + sectionId);
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