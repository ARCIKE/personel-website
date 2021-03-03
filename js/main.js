new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-me', 'contact'],
    navigationTooltips: ['Home', 'About me', 'Contact'],
    showActiveTooltip: true,
    parallax: true,
    scrollingSpeed: 3000,
    controlArrows: false,
    slidesNavigation: true,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
});