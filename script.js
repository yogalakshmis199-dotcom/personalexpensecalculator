let expenses = [];

function addExpense() {

    let income = Number(document.getElementById("income").value);
    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("expenseAmount").value);
    let category = document.getElementById("category").value;

    if (income <= 0 || name === "" || amount <= 0) {
        alert("Please enter valid details");
        return;
    }

    let expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    displayExpenses();
    calculateSummary();

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}

function displayExpenses() {

    let table = document.getElementById("expenseTable");

    table.innerHTML = "";

    for (let expense of expenses) {

        let row = `
            <tr>
                <td>${expense.name}</td>
                <td>₹${expense.amount}</td>
                <td>${expense.category}</td>
            </tr>
        `;

        table.innerHTML += row;
    }
}

function calculateSummary() {

    let income = Number(document.getElementById("income").value);

    let totalExpense = 0;

    for (let expense of expenses) {
        totalExpense += expense.amount;
    }

    let savings = income - totalExpense;

    document.getElementById("totalIncome").textContent = income;
    document.getElementById("totalExpense").textContent = totalExpense;
    document.getElementById("savings").textContent = savings;
}