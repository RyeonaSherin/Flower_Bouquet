document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('bouquetForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            // Stops the page from refreshing
            event.preventDefault(); 
            
            // Triggers the browser pop-up
            alert('Thank you! Your bouquet inquiry has been sent.');
            
            // Resets the input fields
            this.reset(); 
        });
    }
});
// Function to add a comment dynamically to the home page list
function addComment(event) {
    event.preventDefault(); // Prevents the webpage from reloading on submit

    // Fetch the data from the input elements
    var nameField = document.getElementById("commenterName");
    var textField = document.getElementById("commenterText");
    var listContainer = document.getElementById("commentsList");

    // Create a new div element to hold the fresh card structural elements
    var newCommentDiv = document.createElement("div");
    newCommentDiv.className = "individual-comment";

    // Build the inner HTML contents using the values from the form inputs
    newCommentDiv.innerHTML = 
        "<strong>" + nameField.value + "</strong> " +
        "<span class='comment-time'>(Just now)</span>" +
        "<p>" + textField.value + "</p>";

    // Add the new comment card directly to the top of the collection list
    listContainer.insertBefore(newCommentDiv, listContainer.firstChild);

    // Completely reset the inputs to let another guest fill it out
    document.getElementById("commentForm").reset();
}
