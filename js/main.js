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

  if ($(".linkFancyBox").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
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

  if ($(".copy-right").length > 0) {
    moveBlockFooter();
  }

  if ($(".slider-service").length > 0) {
    const swiper = new Swiper(".slider-service", {
      slidesPerView: 3,
      spaceBetween: 30,
      watchSlidesProgress: true,
      grid: {
        rows: 2,
        fill: "row",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
          grid: {
            rows: 1,
            fill: "row",
          },
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 19,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1620: {
          slidesPerView: 3,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
      },
    });
  }

  if ($(".slider-objects").length > 0) {
    const sliders = document.querySelectorAll(".slider-objects");

    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 19,
            watchSlidesProgress: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            on: {
              init: function (swiper) {},
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 19,
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

  if ($(".slider-docs").length > 0) {
    const swiper = new Swiper(".slider-docs", {
      slidesPerView: 4,
      spaceBetween: 19,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 19,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 19,
        },
      },
    });
  }

  if ($(".slider-reviews").length > 0) {
    const swiper = new Swiper(".slider-reviews", {
      slidesPerView: 2,
      spaceBetween: 20,
      autoHeight: true,
      loop: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
  }

  if ($(".slider-partners").length > 0) {
    const swiper = new Swiper(".slider-partners", {
      slidesPerView: 7,
      slidesPerGroup: 7,
      // spaceBetween: 20,
      autoHeight: true,
      loop: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        640: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1024: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        1200: {
          slidesPerView: 7,
          slidesPerGroup: 7,
        },
      },
    });
  }

  if ($(".slider-team").length > 0) {
    const swiper = new Swiper(".slider-team", {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
      autoHeight: true,
      loop: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".slider-images").length > 0) {
    const sliders = document.querySelectorAll(".slider-images");

    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 20,
            watchSlidesProgress: true,
            grid: {
              rows: 2,
              fill: "row",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
                grid: {
                  rows: 1,
                  fill: "row",
                },
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 19,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
              1620: {
                slidesPerView: 3,
                spaceBetween: 30,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
            },
            on: {
              init: function (swiper) {},
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".slider-images-full").length > 0) {
    const sliders = document.querySelectorAll(".slider-images-full");

    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 2,
            spaceBetween: 30,
            watchSlidesProgress: true,

            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
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
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            },
            on: {
              init: function (swiper) {},
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
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

  if ($(".faq-item").length > 0) {
    $(".faq-item__quest").on("click", function () {
      $(this).parents(".faq-item").toggleClass("opened");
      $(this)
        .parents(".faq-item")
        .find(".faq-item__content")
        .stop()
        .slideToggle();
    });
  }

  if ($(".slider-other-article").length > 0) {
    const swiper = new Swiper(".slider-other-article", {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
      autoHeight: true,
      loop: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".slider-team-small").length > 0) {
    const swiper = new Swiper(".slider-team-small", {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      autoHeight: true,
      loop: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".grettings-section").length > 0) {
    if ($(window).width() < 1024) {
      observer();
      $(".swiper-slide-content").on("click", function () {
        if (!$(this).hasClass("opened")) {
          $(".swiper-slide-content").removeClass("opened");
          $(this).addClass("opened");
        }
      });
      return false;
    }

    const swiper = new Swiper(".slider-grettings", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
      initialSlide: 1,
      speed: 700,
      loop: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".grettings-section__content .swiper-button-next",
        prevEl: ".grettings-section__content .swiper-button-prev",
      },
      pagination: {
        el: ".grettings-section__content .swiper-pagination",
        clickable: true,
      },
      on: {
        init: function (swiper) {
          $(".slider-grettings").addClass("init");

          $(".swiper-slide-content").on("click", function () {
            let pos = $(this).parents(".swiper-slide").index();
            swiper.slideTo(pos);
          });

          setTimeout(function () {
            $(".slider-grettings").addClass("load");
          }, 500);
        },
      },
    });

    function destroy() {
      $(".swiper-slide-content").off("click");
      swiper.destroy(true, true);
    }

    observer = destroy;
  }
});

$(window).on("resize", function () {
  if ($(".copy-right").length > 0) {
    moveBlockFooter();
  }

  if ($(window).width() < 1024) {
    observer();
    $(".swiper-slide-content").on("click", function () {
      if (!$(this).hasClass("opened")) {
        $(".swiper-slide-content").removeClass("opened");
        $(this).addClass("opened");
      }
    });
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

function moveBlockFooter() {
  if ($(window).width() < 1023) {
    $(".footer__row").append($(".copy-right"));
  } else {
    $(".footer__left").append($(".copy-right"));
  }
}
