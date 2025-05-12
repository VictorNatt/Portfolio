function openModal(title, description, imageSrc) {
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalImage = document.getElementById("modalImage");

    modalTitle.textContent = title;
    modalDescription.innerHTML = description;
    modalImage.src = imageSrc;

    modal.style.display = "flex";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }