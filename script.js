document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (hamburger && mobileMenu) {
        const closeMenu = () => {
            hamburger.classList.remove("active");
            mobileMenu.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
            document.body.classList.remove("menu-open");
        };

        hamburger.addEventListener("click", () => {
            const isActive = hamburger.classList.toggle("active");
            mobileMenu.classList.toggle("active", isActive);
            hamburger.setAttribute("aria-expanded", String(isActive));
            document.body.classList.toggle("menu-open", isActive);
        });

        mobileMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
    }

    const swiperElement = document.querySelector(".mySwiper");
    if (swiperElement && typeof Swiper !== "undefined") {
        new Swiper(".mySwiper", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });
    }
});
