//  hamburger responsive 

// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.querySelector('.hamburger');
//     const links = document.querySelector('.links');
//     const productsLink = document.querySelector('.menu-item > a'); 
//     const nestedLinks = document.querySelector('.nested-links'); 

//     hamburger.addEventListener('click', function() {
//         links.classList.toggle('active'); 
//     });

//     productsLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         nestedLinks.classList.toggle('active'); 
//     });
// });


// ================================= 

// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.querySelector('.hamburger');
//     const links = document.querySelector('.links');
//     const menuItems = document.querySelectorAll('.menu-item > a'); 

//     hamburger.addEventListener('click', function() {
//         links.classList.toggle('active');
//     });

//     menuItems.forEach(item => {
//         item.addEventListener('click', function(event) {
//             event.preventDefault();
//             const nestedLinks = this.nextElementSibling;
//             if (nestedLinks) {
//                 nestedLinks.classList.toggle('active');
//             }
//         });
//     });
// });



// ========================================= 

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    const dropdownToggles = document.querySelectorAll(".menu-item > a");

    // ✅ Toggle Mobile Menu
    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        nav.classList.toggle("show");
    });

    // ✅ Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove("show");
            closeAllDropdowns();
        }
    });

    // ✅ Toggle Dropdowns (Fix: Close when clicked again)
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const submenu = toggle.nextElementSibling;

            // ✅ Toggle the clicked dropdown
            submenu.classList.toggle("show");

            // ✅ Close other dropdowns when one is opened
            document.querySelectorAll(".nested-links").forEach(otherMenu => {
                if (otherMenu !== submenu) {
                    otherMenu.classList.remove("show");
                }
            });
        });
    });

    // ✅ Function to close all dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll(".nested-links").forEach(menu => menu.classList.remove("show"));
    }
});



// ===================================================== 

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const links = document.querySelector('.links');
    const menuItems = document.querySelectorAll('.menu-item > a');

    // Toggle main menu visibility
    hamburger.addEventListener('click', function() {
        links.classList.toggle('active'); // Open/Close menu
    });

    // Handle dropdown menu toggle for nested links
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const nestedLinks = this.nextElementSibling;
            
            if (nestedLinks && nestedLinks.classList.contains('nested-links')) {
                nestedLinks.classList.toggle('active'); // Toggle submenu
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

            // Close all open items
            accordionItems.forEach((el) => el.classList.remove("active"));

            // Toggle the clicked item
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});
