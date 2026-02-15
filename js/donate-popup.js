
$(document).ready(function () {
    console.log("Initializing Donate Popup...");
    $('.donate-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom donate-popup-content',
        gallery: {
            enabled: false
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });
    console.log("Donate Popup Initialized.");
});
