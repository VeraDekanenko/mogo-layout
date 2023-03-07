$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollofset = $(window).scrollTop();


    /*fixed header*/
    checkScroll(scrollofset)

    $(window).on("scroll", function(){
        scrollofset = $(this).scrollTop();

        checkScroll(scrollofset);

    });

    function checkScroll(scrollofset){

        if(scrollofset >= introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    }

    /*smooth scroll*/

$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    var $this= $(this)
        blockid = $this.data('scroll'),
        blockoffset = $(blockid).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
       scrollTop: blockoffset
    }, 500);
});

    /*menu nav toggle*/
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })


});
