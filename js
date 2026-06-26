document.addEventListener("DOMContentLoaded", () => {
    
    const biomedIcon = document.querySelector("#card-biomedicina .main-icon");
    const cbjrIcon = document.querySelector("#card-cbjr .main-icon");
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("biomed-img");
    const closeModal = document.querySelector(".close-modal");

    // 1. CORREÇÃO DA BIOMEDICINA: Garantir abertura da imagem
    if (biomedIcon) {
        biomedIcon.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = "https://images.pexels.com/photos/6285356/pexels-photo-6285356.jpeg";
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // 2. CORREÇÃO DO CHARLIE BROWN JR: Abrir o vídeo de forma garantida
    // Como os navegadores bloqueiam som "fantasma" rodando em background por segurança,
    // a melhor prática atual que funciona em qualquer navegador é abrir o link oficial em uma nova aba ao clicar.
    if (cbjrIcon) {
        cbjrIcon.addEventListener("click", () => {
            // Abre o link exato enviado por você em uma nova aba do navegador
            window.open("https://youtu.be/0dLX40UMUKo?si=8CxnA4Xn2j5llPT-", "_blank");
        });
    }
});
