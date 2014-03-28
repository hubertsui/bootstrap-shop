$(function () {
    var header = new Headroom(document.querySelector("#header"), {
        tolerance: 5,
        offset: 205,
        classes: {
            initial: "animated",
            pinned: "flipInX",
            unpinned: "flipOutX"
        }
    });
    header.init();
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '', // Text for element
        activeOverlay: false  // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
});