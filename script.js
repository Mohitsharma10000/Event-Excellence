

document.addEventListener("DOMContentLoaded", () => {
  
    const eventCards = document.querySelectorAll(".event-card");

    eventCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });


    const bookingForm = document.querySelector(".booking-form");

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Thank you for booking with Event Excellence! We'll get in touch with you soon.");

        
        bookingForm.reset();
    });
});

