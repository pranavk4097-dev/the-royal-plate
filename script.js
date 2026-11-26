
const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const guests = document.getElementById("guests").value;

    document.getElementById("message").textContent =
        "Thank you " + name +
        "! Your booking request for " +
        guests + " guests has been received.";

    form.reset();

});
