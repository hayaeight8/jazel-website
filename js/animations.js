document.addEventListener("DOMContentLoaded", () => {

    const selectors = [
        "section h1",
        "section h2",
        "section h3",
        "section p",
        ".about-image",
        ".news-card",
        ".client-logo",
        ".work-item",
        ".humanity-image",
        ".join-chair",
        ".contact-item"
    ];

    const elements = document.querySelectorAll(selectors.join(","));

    elements.forEach((element, index) => {
        element.classList.add("scroll-reveal");

        element.style.transitionDelay =
            `${Math.min((index % 4) * 0.08, 0.24)}s`;
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });

});
