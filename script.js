document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const paragraph = document.getElementById("output-paragraph");
    const toggleButton = document.getElementById("toggle-button");

    // Add click event listener to the button
    toggleButton.addEventListener("click", function () {
        // Toggle the color of the paragraph between black and blue
        if (paragraph.style.color === "black") {
            paragraph.style.color = "blue";
        } else {
            paragraph.style.color = "black";
        }
    });
});
