//  hamburger responsive 

    document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    
    // Create Close Button (✖)
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.classList.add("close-btn");
    nav.prepend(closeBtn);
    
    // Open Navbar
    hamburger.addEventListener("click", () => {
        nav.classList.add("active");
    });

    // Close Navbar on Clicking ✖
    closeBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        nav.classList.remove("active");
    });

    // Close Navbar When Clicking Outside (Except Cross Button)
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            nav.classList.remove("active");
        }
    });

    // Toggle Dropdown Menu
    document.querySelectorAll(".menu-item > a").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const nestedMenu = item.nextElementSibling;

            if (nestedMenu.style.display === "block") {
                nestedMenu.style.display = "none";
            } else {
                document.querySelectorAll(".nested-links").forEach(menu => {
                    menu.style.display = "none";
                });
                nestedMenu.style.display = "block";
            }
        });
    });
});



// footer year update 
document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const links = document.querySelector('.links');
    const productsLink = document.querySelector('.menu-item > a'); 
    const nestedLinks = document.querySelector('.nested-links'); 

    hamburger.addEventListener('click', function() {
        links.classList.toggle('active'); 
    });

    productsLink.addEventListener('click', function(event) {
        event.preventDefault();
        nestedLinks.classList.toggle('active'); 
    });
});


// Accordian section 

document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
        const header = item.querySelector(".accordion-header");

        header.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            accordionItems.forEach((el) => el.classList.remove("active"));

            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});
