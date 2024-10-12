// Lean Modal functionality
(function($) {
    // Extend jQuery with a new method named 'leanModal'
    $.fn.extend({
        leanModal: function(options) {
            // Default settings for the modal
            var defaults = {
                top: 100,          // Distance from the top of the viewport
                overlay: 0.5,      // Opacity of the overlay background
                closeButton: null  // Selector for the close button
            };

            // Create an overlay element and append it to the body
            var overlay = $("<div id='lean_overlay'></div>");
            $("body").append(overlay);

            // Merge default options with user-provided options
            options = $.extend(defaults, options);

            // For each element that triggers the modal
            return this.each(function() {
                var o = options; // Reference to the options
                $(this).click(function(e) {
                    // Get the modal ID from the clicked element's href attribute
                    var modal_id = $(this).attr("href");
                    
                    // Set up click event to close modal when overlay is clicked
                    $("#lean_overlay").click(function() {
                        close_modal(modal_id);
                    });

                    // Set up click event to close modal when close button is clicked
                    $(o.closeButton).click(function() {
                        close_modal(modal_id);
                    });

                    // Get the modal's dimensions
                    var modal_height = $(modal_id).outerHeight();
                    var modal_width = $(modal_id).outerWidth();

                    // Show the overlay with specified opacity
                    $("#lean_overlay").css({ "display": "block", opacity: 0 });
                    $("#lean_overlay").fadeTo(200, o.overlay);

                    // Position and show the modal
                    $(modal_id).css({
                        "display": "block",
                        "position": "fixed",
                        "opacity": 0,
                        "z-index": 11000, // Ensure modal appears above other content
                        "left": 50 + "%", // Center horizontally
                        "margin-left": -(modal_width / 2) + "px", // Adjust for width
                        "top": o.top + "px" // Set top position from options
                    });
                    $(modal_id).fadeTo(200, 1); // Fade in the modal
                    e.preventDefault(); // Prevent default link behavior
                });
            });

            // Function to close the modal
            function close_modal(modal_id) {
                $("#lean_overlay").fadeOut(200); // Fade out overlay
                $(modal_id).css({ "display": "none" }); // Hide modal
            }
        }
    });
})(jQuery);

// Ensure modal is hidden on page load
$(document).ready(function() {
    $("#modal").hide(); // Hide modal on page load
    $("#lean_overlay").hide(); // Hide overlay on page load

    // Close modal when clicking the close button
    $("#closeModal").on("click", function() {
        $("#lean_overlay").fadeOut(200); // Fade out overlay
        $("#modal").fadeOut(200); // Fade out modal
    });
     $("#modal_trigger_2").leanModal({
        closeButton: "#closeModal" // Pass the close button selector
    });
});