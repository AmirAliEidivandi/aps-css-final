$(document).ready(function () {
    var owl = $("#owl-product");

    owl.owlCarousel({
        items: 1,
        responsive: {
            480: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
            1200: { items: 4 },
        },
    });
});
