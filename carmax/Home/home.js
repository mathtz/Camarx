// modais

window.onclick = (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

document.querySelectorAll(".close").forEach((btn) => {
    btn.onclick = () => {
      const modalId = btn.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "none";
    };
  });

// Inicio Modais Romance
document.getElementById("bntR01").onclick = () => {
    document.getElementById("modalR01").style.display = "block";
  };

  document.getElementById("bntR02").onclick = () => {
    document.getElementById("modalR02").style.display = "block";
  };

  document.getElementById("bntR03").onclick = () => {
    document.getElementById("modalR03").style.display = "block";
  };

  document.getElementById("bntR04").onclick = () => {
    document.getElementById("modalR04").style.display = "block";
  };

  document.getElementById("bntR05").onclick = () => {
    document.getElementById("modalR05").style.display = "block";
  };

  document.getElementById("bntR06").onclick = () => {
    document.getElementById("modalR06").style.display = "block";
  };

  document.getElementById("bntR07").onclick = () => {
    document.getElementById("modalR07").style.display = "block";
  };

  document.getElementById("bntR08").onclick = () => {
    document.getElementById("modalR08").style.display = "block";
  };

  document.getElementById("bntR09").onclick = () => {
    document.getElementById("modalR09").style.display = "block";
  };

  document.getElementById("bntR10").onclick = () => {
    document.getElementById("modalR10").style.display = "block";
  };

// Fim Modais Romance