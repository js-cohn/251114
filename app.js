document.addEventListener("DOMContentLoaded", () => {
    
    // Get all the navigation items
    const navItems = document.querySelectorAll(".nav-item");
    
    // Get all the content panels
    const panels = document.querySelectorAll(".panel");

    // Add a click event listener to each nav item
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            // Use 'currentTarget' to get the nav-item div
            const clickedItem = e.currentTarget; 
            const targetId = clickedItem.getAttribute("data-target");

            // 1. Remove 'active' class from all items and panels
            navItems.forEach(nav => nav.classList.remove("active"));
            panels.forEach(panel => panel.classList.remove("active"));

            // 2. Add 'active' class to the clicked item
            clickedItem.classList.add("active");

            // 3. Add 'active' class to the corresponding panel
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });
});