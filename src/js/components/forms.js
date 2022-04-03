$(document).ready(function() {

    $(".validate-form button[type='submit']").click(function(e) {
        e.preventDefault()
        let agree = $(this).parents("form").find(".agree-check")

        if (!$(agree).prop("checked")) {
            $(agree).parents(".check").addClass("check--error")
            return
        }
        $(agree).parents(".check").removeClass("check--error")
        $(this).parents("form").find(".required").each(function(index, el) {
            if ($(el).val()) {
                $(el).parent(".form-group").removeClass("form-group--error")
            } else {
                $(el).parent(".form-group").addClass("form-group--error")

            }
        })

    })
})