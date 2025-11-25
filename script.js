const malla = [
  {
    semestre: "Primer Semestre",
    ramos: [
      "Introducción al Derecho",
      "Historia del Derecho",
      "Teoría del Estado",
      "Expresión Oral y Escrita"
    ]
  },
  {
    semestre: "Segundo Semestre",
    ramos: [
      "Derecho Civil I",
      "Derecho Constitucional I",
      "Economía",
      "Metodología de la Investigación"
    ]
  }
];

const contenedor = document.getElementById("malla");

malla.forEach(s => {
  const div = document.createElement("div");
  div.className = "semestre";
  
  div.innerHTML = `
    <h2>${s.semestre}</h2>
    ${s.ramos.map(r => `<div class="ramo">${r}</div>`).join("")}
  `;

  contenedor.appendChild(div);
});

