let observer = () => {
  // функция для работы destroy Swiper
};

$(document).ready(function () {
  if ($(".burger").length > 0) {
    $(".burger").on("click", function () {
      $(this).toggleClass("opened");
      $("body").toggleClass("hidden");
      $(".header .menu").toggleClass("opened");
    });
  }

  if ($(".menu-link").length > 0) {
    $(".menu-link").map(function () {
      !$(this).next(".menu-sub").length > 0 && $(this).addClass("not-arrow");
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".problem-tabs").length > 0) {
    if ($(window).width() >= 1024) {
      problemBlockHandle();
    } else {
      initProblemSliders();
    }
  }

  if ($(".linkFancyBox").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        setTimeout(() => {
          $("body").removeClass("modal-open");
        }, 300);
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".selectric").length > 0) {
    $(".selectric").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {},
        onClose: function (element) {},
      });
    });
  }

  if ($(".slider-products").length > 0) {
    const swiper = new Swiper(".slider-products", {
      slidesPerView: 3,
      spaceBetween: 20,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".products-section .swiper-button-next",
        prevEl: ".products-section .swiper-button-prev",
      },
      pagination: {
        el: ".slider-products .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1620: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".slider-technologies").length > 0) {
    const swiper = new Swiper(".slider-technologies", {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 1,
      watchSlidesProgress: true,
    });
  }

  if ($(".reports-slider").length > 0) {
    const sliders = document.querySelectorAll(".reports-slider");

    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 2,
            spaceBetween: 20,
            watchSlidesProgress: true,
            navigation: {
              nextEl: $($(slider).parents(".reports-section")[0]).find(
                ".swiper-button-next"
              )[0],
              prevEl: $($(slider).parents(".reports-section")[0]).find(
                ".swiper-button-prev"
              )[0],
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".advantages-slider").length > 0) {
    const swiper = new Swiper(".advantages-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      watchSlidesProgress: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: ["-120%", 0, -500],
        },
        next: {
          translate: ["120%", 0, -500],
        },
      },
      navigation: {
        nextEl: ".advantages-slider .swiper-button-next",
        prevEl: ".advantages-slider .swiper-button-prev",
      },
      pagination: {
        el: ".advantages-slider .swiper-pagination",
        clickable: true,
      },
    });
  }

  if ($(".review-slider").length > 0) {
    const swiper = new Swiper(".review-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      autoHeight: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".reviews-section .swiper-button-next",
        prevEl: ".reviews-section .swiper-button-prev",
      },
      pagination: {
        el: ".review-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".faq-item").length > 0) {
    $(".faq-item .quest").on("click", function () {
      $(this).parents(".faq-item").toggleClass("opened");
      $(this).parents(".faq-item").find(".answer").stop().slideToggle();
    });
  }
});

$(window).on("resize", function () {
  if ($(window).width() >= 1024) {
    observer();
    problemBlockHandle();
  } else {
    if ($(".problem-tabs__list").hasClass("initial-desktop")) {
      initProblemSliders();
    }
  }
});

function openModal(modal) {
  MicroModal.show(modal);
  $(".modal__close").on("click", function () {
    closeModal(modal);
  });
  $("body").addClass("modal-open");
}

function closeModal(modal) {
  MicroModal.close(modal);
  setTimeout(() => {
    $("body").removeClass("modal-open");
  }, 300);
}

// problems-section

function problemBlockHandle() {
  if (!$(".problem-tabs__list").hasClass("initial-desktop")) {
    $(".problem-tabs__list").addClass("initial-desktop");

    $(".problem-tabs__list a").hover(function (e) {
      handle(e, $(this));
    });

    $(".problem-tabs__list a").on("click", function (e) {
      handle(e, $(this));
    });

    function handle(event, self) {
      event.preventDefault();
      clearClassProblemBlock();

      let href = self.addClass("active").attr("href");

      $(".problem-content").find(href).addClass("active");
    }
  }
}

function initProblemSliders() {
  $(".problem-tabs__list").removeClass("initial-desktop");
  $(".problem-tabs__list").addClass("swiper");
  $(".problem-tabs__list ul").addClass("swiper-wrapper");
  $(".problem-tabs__list li").addClass("swiper-slide");
  $(".problem-tabs__list a").removeClass("active");

  $(".problem-content").wrapAll("<div class='slider-problem-content' />");
  $(".slider-problem-content").addClass("swiper");
  $(".problem-content").addClass("swiper-wrapper");
  $(".problem-item").addClass("swiper-slide");

  $(".problem-tabs__list a").off("click");
  $(".problem-tabs__list a").off("hover");

  const swiper2 = new Swiper(".problem-tabs__list", {
    spaceBetween: 10,
    slidesPerView: 2,
    autoHeight: true,
  });

  const swiper = new Swiper(".slider-problem-content", {
    spaceBetween: 10,
    slidesPerView: 1,
    autoHeight: true,
    watchSlidesProgress: true,
    thumbs: {
      swiper: swiper2,
    },
    navigation: {
      nextEl: ".mobile-controls .swiper-button-next",
      prevEl: ".mobile-controls .swiper-button-prev",
    },
    pagination: {
      el: ".mobile-controls .swiper-pagination",
      clickable: true,
    },
  });

  function destroy() {
    $(".problem-tabs__list").removeClass("swiper");
    $(".problem-tabs__list ul").removeClass("swiper-wrapper");
    $(".problem-tabs__list li").removeClass("swiper-slide");

    $(".problem-content").removeClass("swiper-wrapper");
    $(".problem-item").removeClass("swiper-slide");

    swiper2.destroy(true, true);
    swiper.destroy(true, true);

    $(".mobile-controls").before($(".problem-content"));
    $(".slider-problem-content").remove();
  }

  observer = destroy;
}

function clearClassProblemBlock() {
  $(".problem-tabs__list a").removeClass("active");
  $(".problem-content .problem-item").removeClass("active");
}

// /problems-section
