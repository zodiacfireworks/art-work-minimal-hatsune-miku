(function ($) {
    $(document).ready(function () {
        $('#miku-carousel').carousel({
            fullWidth: true,
            padding: 0,
            indicators: true,
        });

        $('#next').click(function () {
            $('#miku-carousel').carousel('next');
        });

        $('#prev').click(function () {
            $('#miku-carousel').carousel('prev');
        });
    });
})(jQuery.noConflict());
