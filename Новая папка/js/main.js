jQuery(document).ready(function($) {

    // Добавляем маску для поля с номера телефона
    $('#phone').mask('+375 (99) 999-99-99');

    // Проверяет отмечен ли чекбокс согласия
    // с обработкой персональных данных
    $('#check').on('click', function() {
        if ($("#check").prop("checked")) {
            $('#button').attr('disabled', false);
        } else {
            $('#button').attr('disabled', true);
        }
    });

    // Отправляет данные из формы на сервер и получает ответ
    $('#contactForm').on('submit', function(event) {
        
        event.preventDefault();

        var form = $('#contactForm'),
            button = $('#button'),
            answer = $('#answer'),
            loader = $('#loader');

        $.ajax({
            url: 'handler.php',
            type: 'POST',
            data: form.serialize(),
            beforeSend: function() {
                answer.empty();
                button.attr('disabled', true).css('margin-bottom', '20px');
                loader.fadeIn();
            },
            success: function(result) {
                loader.fadeOut(300, function() {
                    answer.text(result);
                });
                form.find('.field').val('');
                button.attr('disabled', false);
            },
            error: function() {
                loader.fadeOut(300, function() {
                    answer.text('Произошла ошибка! Попробуйте позже.');
                });
                button.attr('disabled', false);
            }
        });
    
    });

});



// BURGER

function burgerRotate(event) {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu_aktive');
    const logo = document.querySelector('.header__logo__navigation');
    
    // burger.classList.add('aktive');  
    menu.classList.add('active');
    // console.log()  
}
document.querySelector('.burger').addEventListener('click', burgerRotate);


 function burgerRotateNone(event) {
    const menu = document.querySelector('.menu_aktive');
        
    menu.classList.remove('active');
}
document.querySelector('.burger-active').addEventListener('click', burgerRotateNone);


const menuNavigation = (event) => {
    const menu = document.querySelector('.menu_aktive');
    const navigationNav = document.querySelector('.navigation-nav');
    document.querySelectorAll('li').forEach(li => li.classList.remove('navigation-nav'));
    event.target.closest('li').classList.add('navigation-nav');
    if (event.target) {
        menu.classList.remove('active');
        return;
    }

    
}

document.querySelector('.menu__navigation').addEventListener('click', menuNavigation);
