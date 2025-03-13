document.addEventListener("DOMContentLoaded", function () {
    const payButton = document.querySelector("#paymentModal .btn-primary");
    
    if (payButton) {
        payButton.addEventListener("click", function () {
            let paymentModalEl = document.getElementById("paymentModal");
            let paymentModal = bootstrap.Modal.getInstance(paymentModalEl);
            if (paymentModal) {
                paymentModal.hide();
            }

            let completeModalEl = document.getElementById("paymentCompleteModal");
            let completeModal = new bootstrap.Modal(completeModalEl);
            completeModal.show();
        });
    }
});