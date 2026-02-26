document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Mensagem enviada com sucesso!");
            form.reset();
        });
    }
});