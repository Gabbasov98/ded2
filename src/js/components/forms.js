$(document).ready(function() {

    $(".validate-form button[type='submit']").click(function(e) {
        e.preventDefault()

        $(this).parents("form").find(".required").each(function(index, el) {
            if ($(el).val()) {
                $(el).parent(".form-group").removeClass("form-group--error")
            } else {
                $(el).parent(".form-group").addClass("form-group--error")

            }
        })

    })
})