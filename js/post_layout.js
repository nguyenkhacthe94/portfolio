document.addEventListener("DOMContentLoaded", function () {
    fetch("layout.html")
        .then(response => {
            if (!response.ok) {
                // Fallback for when script is running from a different relative path context if needed,
                // but for posts/ directory, simple "layout.html" should work if the html file is in posts/ 
                // and layout.html is also in posts/.
                // However, typical serverless static sites might need consistent pathing.
                // Given the structure, valid fetch might be "./layout.html" or just "layout.html".
                throw new Error("Failed to load layout");
            }
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            // Inject Navigation
            const nav = doc.querySelector("nav");
            const navPlaceholder = document.getElementById("nav-placeholder");
            if (nav && navPlaceholder) {
                navPlaceholder.replaceWith(nav);
            }

            // Inject Footer
            const footer = doc.querySelector("footer");
            const footerPlaceholder = document.getElementById("footer-placeholder");
            if (footer && footerPlaceholder) {
                footerPlaceholder.replaceWith(footer);
            }

            // Inject Scroll to Top Button
            const btn = doc.querySelector(".scroll-to-top");
            if (btn) {
                document.body.appendChild(btn);
                initScrollToTop(btn);
            }
        })
        .catch(err => console.error("Error loading layout:", err));
});

function initScrollToTop(btn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    // Scroll to top when button is clicked
    btn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
