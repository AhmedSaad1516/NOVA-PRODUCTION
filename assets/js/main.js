$('.owl-carousel').owlCarousel({
    rtl: true,
    margin: 10,
    navElement: "test",
    nav: true,
    dots: false,
    loop: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 5
        }
    }
}).on('changed.owl.carousel', function(event) {
    var currentItem = $('.owl-carousel .owl-item.active').eq(0).find('img').attr('src');
   
    var $mainImage = $('#main-image');
    $mainImage.addClass('fade-in');
    setTimeout(function() {
        $mainImage.attr('src', currentItem);
        $mainImage.removeClass('fade-in');
    }, 500); 
});



document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counters");

    counters.forEach(counterElement => {
        const targetNumber = parseInt(counterElement.innerText, 10);
        let currentNumber = 1;

        counterElement.innerText = currentNumber;

        const interval = setInterval(() => {
            currentNumber++;
            counterElement.innerText = currentNumber;

            if (currentNumber >= targetNumber) {
                clearInterval(interval);
            }
        }, 50); 
    });
});



function setActiveTab(index) {
    const tabs = document.querySelectorAll('.list-nav-tabs-links');
    tabs.forEach((tab, i) => {
        tab.classList.toggle('list-nav-tabs-links-active', i === index);
    });
    const tabPanels = document.querySelectorAll('.tab-pane');
    tabPanels.forEach((panel, i) => {
        panel.classList.toggle('show', i === index);
        panel.classList.toggle('active', i === index);
    });
}


