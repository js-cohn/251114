// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // Get all the navigation links
    const navLinks = document.querySelectorAll(".nav-link");
    
    // Get all the content panels
    const panels = document.querySelectorAll(".panel");

    // Add a click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Stop the link from navigating (e.g., jumping to '#')
            e.preventDefault(); 

            const targetId = link.getAttribute("data-target");

            // 1. Remove 'active' class from all links and panels
            navLinks.forEach(nav => nav.classList.remove("active"));
            panels.forEach(panel => panel.classList.remove("active"));

            // 2. Add 'active' class to the clicked link
            link.classList.add("active");

            // 3. Add 'active' class to the corresponding panel
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });
});
