// Live demo URLs for each SaaS product. Add the real link here and every
// "Live Demo" button on the site updates. Empty = falls back to the contact page.
const SAAS_LINKS = {
    hms: "https://hms-carepoint.vercel.app",
    restaurant: "https://restaurant-website-eight-lime.vercel.app",
    ecommerce: "https://ecommerce-website-hazel-iota.vercel.app",
    gym: "",
    logistics: "https://ahtech-logistics.vercel.app/track/BWL-2026-000146"
};

document.querySelectorAll("[data-demo]").forEach(function (link) {
    const url = SAAS_LINKS[link.dataset.demo];
    if (url) {
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener";
    } else {
        link.href = "contact.html?product=" + link.dataset.demo;
    }
});

// Monthly / yearly pricing toggle
document.querySelectorAll(".billing_toggle").forEach(function (toggle) {
    const scope = toggle.closest("section") || document;
    toggle.querySelectorAll("button").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const cycle = btn.dataset.cycle;
            toggle.querySelectorAll("button").forEach(function (b) {
                b.classList.toggle("active", b === btn);
                b.setAttribute("aria-pressed", b === btn);
            });
            scope.querySelectorAll("[data-monthly]").forEach(function (el) {
                el.textContent = el.dataset[cycle];
            });
            scope.querySelectorAll("[data-note-monthly]").forEach(function (el) {
                el.textContent = cycle === "yearly" ? el.dataset.noteYearly : el.dataset.noteMonthly;
            });
        });
    });
});
