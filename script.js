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

    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    if (tabButtons.length && tabContents.length) {
        tabButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const tabId = button.dataset.tab;

                tabButtons.forEach((item) => {
                    item.classList.remove("active");
                    item.setAttribute("aria-selected", "false");
                });

                tabContents.forEach((item) => item.classList.remove("active"));

                button.classList.add("active");
                button.setAttribute("aria-selected", "true");

                const activeTab = document.getElementById(tabId);
                if (activeTab) {
                    activeTab.classList.add("active");
                }
            });
        });
    }

    const modal = document.getElementById("my-modal");
    const openModalButton = document.getElementById("open-modal-btn");
    const closeModalButton = document.querySelector(".close-modal");

    if (modal && openModalButton && closeModalButton) {
        const closeModal = () => {
            modal.classList.remove("open");
            modal.setAttribute("aria-hidden", "true");
            document.body.classList.remove("modal-open");
        };

        openModalButton.addEventListener("click", () => {
            modal.classList.add("open");
            modal.setAttribute("aria-hidden", "false");
            document.body.classList.add("modal-open");
        });

        closeModalButton.addEventListener("click", closeModal);

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && modal.classList.contains("open")) {
                closeModal();
            }
        });
    }
});
