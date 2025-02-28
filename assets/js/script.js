$(document).ready(function () {
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find('.accordion-icon').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find('.accordion-icon').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });
});
let faq = $('.faq');
if (faq) {
    $(function () {
        $(".faq .grid").masonry({ itemSelector: ".grid-item" });

        $(".filtering").on("click", "span", function () {
            var a = $(".gallery").isotope({});
            var e = $(this).attr("data-filter");
            a.isotope({ filter: e });
        });
        $(".filtering").on("click", "span", function () {
            $(this).addClass("active").siblings().removeClass("active");
        });

        let length = document.querySelectorAll('.gallery .grid-item').length;
        let i = length;
        $('.gallery .grid-item').each(function () {
            $(this).css({
                'z-index': i
            })
            i--;
        })
    })
}
$(document).ready(function () {
    var functionCalled = false;

    // Check if the div is in view on page load
    checkDivInView();

    $(window).scroll(function () {
        // Check if the div is in view on scroll
        checkDivInView();
    });

    function checkDivInView() {
        var divOffset = $('#scrolling-content').offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (!functionCalled && (scrollTop + windowHeight > divOffset)) {
            // The div is in view and function hasn't been called yet
            numbersAnimation();
            functionCalled = true;
        }
    }

    function numbersAnimation() {
        $(document).ready(function () {
            var div = $('#scrolling-content');
            var scrollHeight = div.prop('scrollHeight');
            var scrollDuration = 1500;

            div.animate({
                scrollTop: scrollHeight
            }, scrollDuration);

            $('.end-div').slideUp(2000);
            $('#scrolling-content').css({
                'overflow':'hidden'
            });
        });

    }
});
