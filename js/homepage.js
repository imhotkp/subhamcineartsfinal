function openModal(service) {
    document.getElementById(service + "-modal").style.display = "block";
  }

  function closeModal(service) {
    document.getElementById(service + "-modal").style.display = "none";
  }

  window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target === modal) modal.style.display = "none";
    });
  }