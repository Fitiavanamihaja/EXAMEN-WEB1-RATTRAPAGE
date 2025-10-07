const expenseName = document.getElementById("name");
const amount = document.getElementById("amount");
const categorie = document.getElementById("categories");
const submitButton = document.getElementById("validate-btn");
const tableContent = document.getElementById("table-content");
const form = document.getElementById("form");
const error = document.getElementById("error");
const colorButton = document.getElementById("color-btn");
const colors = ["red", "green", "yellow", "blue", "purple", "grey", "marron"];

function createExpenseRow(name, amount, categorie) {
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdAmount = document.createElement("td");
  const tdCategorie = document.createElement("td");

  tdName.textContent = name;
  tdAmount.textContent = amount;
  tdCategorie.textContent = categorie;

  tr.appendChild(tdName);
  tr.appendChild(tdAmount);
  tr.appendChild(tdCategorie);

  return tr;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const expenseNameValue = expenseName.value.trim();
  const expenseAmount = amount.value.trim();
  const chooseCategorie = categorie.value;

  if (expenseNameValue && expenseAmount && chooseCategorie) {
    error.textContent = "";
    const row = createExpenseRow(
      expenseNameValue,
      expenseAmount,
      chooseCategorie
    );
    tableContent.appendChild(row);
    form.reset();
  } else {
    error.textContent = "Tous les champs sont requis !";
  }
});

colorButton.addEventListener("click", () => {
  const rows = tableContent.querySelectorAll("tr");
  rows.forEach((row) => {
    console.log(row)
    const categorieCell = row.children[2];
    if (categorieCell.textContent === "Nourriture") {
      row.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    } else {
      row.style.backgroundColor = "";
    }
  });
});
