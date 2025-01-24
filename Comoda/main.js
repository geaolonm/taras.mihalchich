
        // ПРИЛИПАНИЕ ШАПКИ 
$(document).ready(function () {
    var $nav = $('.toprow__nav__container');
    var navOffset = $nav.offset().top;
    var $searchContainer = $('#search'); 
  
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > navOffset) {
        $nav.addClass('sticky'); 
        $searchContainer
      } else {
        $nav.removeClass('sticky'); 
      }
    });
  });
  

            // ПОЛЕТ ТОВАРА В КОРЗИНУ

            $(document).ready(function () {
                $(".button").on("click", function (e) {
                    e.preventDefault();
            
                    // Найти изображение товара
                    const $image = $(this).closest(".image").find("img");
                    const $cart = $(".shopping__cart__position"); // Корзина
            
                    if ($image.length && $cart.length) {
                        // Создать клон изображения
                        const $clone = $image.clone().addClass("flying-item").appendTo("body");
            
                        // Координаты изображения и корзины
                        const startOffset = $image.offset(); // Начальная позиция товара
                        const cartOffset = $cart.offset(); // Позиция корзины
            
                        // Установить начальные стили для клона
                        $clone.css({
                            position: "absolute",
                            top: startOffset.top,
                            left: startOffset.left,
                            width: $image.width(),
                            height: $image.height(),
                            zIndex: 9999,
                            borderRadius: "50%", // Сразу круглое изображение
                            objectFit: "contain", // Обрезка изображения по кругу с сохранением пропорций
                            transition: "transform 0.3s ease", // Плавный переход
                        });
            
                        // Конечные координаты для анимации (центр корзины)
                        const finalTop = cartOffset.top + $cart.height() / 2 - 25; // Центр корзины по вертикали
                        const finalLeft = cartOffset.left + $cart.width() / 2 - 25; // Центр корзины по горизонтали
            
                        // Анимация полёта
                        $clone.animate(
                            {
                                top: finalTop,
                                left: finalLeft,
                                width: 50, // Размер в корзине
                                height: 50, // Размер в корзине
                            },
                            {
                                duration: 1000,
                                easing: "easeInOutQuad",
                                complete: function () {
                                    $clone.remove(); // Удалить клон после завершения
                                },
                            }
                        );
                    }
                });
            });            
            
            