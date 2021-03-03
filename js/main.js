new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-me', 'works'],
    navigationTooltips: ['Home', 'About me', 'My Recent Works'],
    showActiveTooltip: true,
    parallax: true,
    scrollingSpeed: 3000,
    controlArrows: false,
    slidesNavigation: true,
    onLeave: function(origin, destination, direction){
        console.log("[ARCIKE] Leaving section" + origin.index);
    },
});