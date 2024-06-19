let menu = {};

function addItem() {
  let day = document.getElementById("day").value;
  let item = document.getElementById("menuItem").value;

  if (!menu[day]) {
    menu[day] = [];
  }

  menu[day].push({ item: item });
  renderMenu();
}

function deleteItem(day, index) {
  menu[day].splice(index, 1);
  renderMenu();
}

function editItem(day, index) {
  let newItem = prompt("Editar item:", menu[day][index].item);
  if (newItem !== null) {
    menu[day][index].item = newItem;
    renderMenu();
  }
}

function renderMenu() {
  let menuList = document.getElementById("menuList");
  menuList.innerHTML = "";

  const customOrder = ["domingo", "segunda-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado"];

  customOrder.forEach(day => {
    if (menu[day]) {
      menu[day].forEach((menuItem, index) => {
        let menuItemElement = document.createElement("div");
        menuItemElement.className = "menuItem";
        menuItemElement.innerHTML = `
          <span>${day}: ${menuItem.item}</span>
          <button onclick="editItem('${day}', ${index})">Editar</button>
          <button onclick="deleteItem('${day}', ${index})">Excluir</button>
        `;
        menuList.appendChild(menuItemElement);
      });
    }
  });
}

function calculateIMC() {
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight)) {
    document.getElementById("result").innerText = "Por favor, insira valores válidos.";
    return;
  }

  let imc = weight / ((height / 100) ** 2);
  document.getElementById("result").innerText = `Seu IMC é ${imc.toFixed(2)}`;
}
