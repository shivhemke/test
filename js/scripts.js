$(document).ready(function(){
    alert("Hi Shiv");
    $("#mycarousel").carousel({interval:2000});
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')){
            $("#mycarousel").carousel("pause");
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    $("#loginBtn").click(function(){
        $("#loginModal").modal("toggle");
    });

    $("#closeLoginModalBtn").click(function(){
        $("#loginModal").modal("hide");
    });

    $("#cancelloginModalBtn").click(function(){
        $("#loginModal").modal("hide");
    });

    
    $("#reserveTableBtn").click(function(){
        $("#reservetableModal").modal("toggle");
    });

    $("#closeReserveTableBtn").click(function(){
        $("#reservetableModal").modal("hide");
    });

    $("#cancelReserveTableBtn").click(function(){
        $("#reservetableModal").modal("hide");
    });

    $('[data-toggle="tooltip"]').tooltip();

});
