// Inicio Intro

setTimeout(() => {
  // Descola o C e estiliza
  const c = document.getElementById("letter-c");
  const rest = document.getElementById("rest");

  rest.style.opacity = "0";
  rest.style.transform = "translateX(50px)";
  c.style.color = "blue";
  c.style.fontSize = "6em";
  c.style.transform = "translateY(-20px)";
}, 3000);

setTimeout(() => {
  // Faz o C desaparecer
  const c = document.getElementById("letter-c");
  c.style.opacity = "0";
}, 4000);

setTimeout(() => {
  // Mostra "Camarx" no canto
  const corner = document.getElementById("corner-logo");
  corner.style.display = "block";
  setTimeout(() => {
    corner.style.opacity = "1";
  }, 100); // pequena pausa para ativar transição
}, 4500);

setTimeout(() => {
  // Mostra conteúdo principal
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  document.body.style.overflow = "auto";
}, 6000);

// Fim Intro

// inicio Modal

document.getElementById("bnt1").onclick = () => {
  document.getElementById("modal1").style.display = "block";
};

document.getElementById("bnt2").onclick = () => {
  document.getElementById("modal2").style.display = "block";
};

document.querySelectorAll(".close").forEach((btn) => {
  btn.onclick = () => {
    const modalId = btn.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "none";
  };
});

// Fecha o modal se clicar fora da caixa
window.onclick = (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

// Fim Modal
