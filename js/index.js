new AirDatepicker('#pickDate')
new AirDatepicker('#dropDate')

/////////////////////////////////////////////////////////////////////////////////////

AOS.init();



/////////////////////////////jquery///////////////////////////////////////////////

const body = $('body');
const menu = $('.menu');
const menuBtn = $('.menu__burger');
const menuList = $('.menu__list');
const menuItem = $('.menu__item');

let currentPaddingRight = '';

menuBtn.on('click', function() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    currentPaddingRight = body.css('padding-right');
    menu.toggleClass('open');
    body.toggleClass('open--menu');
    body.css('padding-right', paddingOffset);
});

// Закрытие меню при клике на ссылки
menuItem.on('click', function() {
    menu.removeClass('open');
    body.removeClass('open--menu');
    body.css('padding-right', currentPaddingRight);
});

// Закрытие меню при клике вне блока
$(document).on('click', function(e) {
    if (!$(e.target).closest('.menu').length) {
        menu.removeClass('open');
        body.removeClass('open--menu');
        body.css('padding-right', currentPaddingRight);
    }
});


////////////////////////////////////////////////////////////////////////////

let selectItems = $('.select-custom__item');
let selectItemMain = $('.select-custom__item-main');
let selectOpen = $('.select-custom__item-open')
selectItems.each(function(item){
    if($(this).hasClass('active')){
        let currentText = $(this).text()
        selectItemMain.text(currentText)
    }
})

selectItemMain.on('click',function(){
    selectOpen.toggleClass('open')
    selectItems.each(function(item){
        $(this).on('click',function(){
            let currentText = $(this).text()
            selectItemMain.text(currentText)
            selectOpen.removeClass('open');
        })
    })
})

$(document).on('click', function(e) {
    if (!$(e.target).closest('.select-custom__item-main').length) {
        selectOpen.removeClass('open');
    }
});



////////////////////////////////////////////////////////////////////////////

function reviewSlider() {
    if ($(window).width() <= 767) {
        $('.review__items').not('.slick-initialized').slick({
            slidesToShow: 1,
            prevArrow:'<button type="button" class="slick-prev"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M8.22657 23.8956L22.8099 9.31225C23.2118 8.92149 23.7917 8.77484 24.331 8.92753C24.8704 9.08023 25.2874 9.50908 25.4248 10.0525C25.5622 10.596 25.3993 11.1715 24.9974 11.5622L13.1016 23.4372H40.6641C41.527 23.4372 42.2266 24.1368 42.2266 24.9997C42.2266 25.8627 41.527 26.5622 40.6641 26.5622H13.1224L24.9974 38.4372C25.2952 38.7274 25.4632 39.1256 25.4632 39.5414C25.4632 39.9572 25.2952 40.3554 24.9974 40.6456C24.7102 40.9469 24.3094 41.1133 23.8932 41.1039C23.4785 41.1059 23.0805 40.9407 22.7891 40.6456L8.20573 26.0622C7.59645 25.4522 7.59645 24.464 8.20573 23.8539L8.22657 23.8956Z" fill="white"/></g></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.7734 23.8956L27.1901 9.31225C26.7882 8.92149 26.2083 8.77484 25.669 8.92753C25.1296 9.08023 24.7126 9.50908 24.5752 10.0525C24.4378 10.596 24.6007 11.1715 25.0026 11.5622L36.8984 23.4372H9.33594C8.47299 23.4372 7.77344 24.1368 7.77344 24.9997C7.77344 25.8627 8.47299 26.5622 9.33594 26.5622H36.8776L25.0026 38.4372C24.7048 38.7274 24.5368 39.1256 24.5368 39.5414C24.5368 39.9572 24.7048 40.3554 25.0026 40.6456C25.2898 40.9469 25.6906 41.1133 26.1068 41.1039C26.5215 41.1059 26.9195 40.9407 27.2109 40.6456L41.7943 26.0622C42.4035 25.4522 42.4035 24.464 41.7943 23.8539L41.7734 23.8956Z" fill="white"/></svg></button>'
        });
    } else {
        if ($('.review__items').hasClass('slick-initialized')) {
            $('.review__items').slick('unslick');
        }
    }
}

reviewSlider();

$(window).resize(function() {
    reviewSlider();
});


