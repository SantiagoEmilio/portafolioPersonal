// Renderizar Stacks
const stacksContainer = document.getElementById("stacks-container");
stacks.forEach(stack => {
  const img = document.createElement("img");
  img.src = stack.icon;
  img.alt = stack.nombre;
  stacksContainer.appendChild(img);
});

// Renderizar Proyectos
const proyectosContainer = document.getElementById("proyectos-container");
proyectos.forEach(proyecto => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${proyecto.nombre}</td>
    <td>[ ${proyecto.stacks.join(", ")} ]</td>
    <td><a href="${proyecto.page}" target="_blank" class="page-btn">Ver página</a></td>
    <td><a href="${proyecto.repo}" target="_blank" class="repo-btn">GitHub</a></td>
  `;

  proyectosContainer.appendChild(tr);
});
