document.addEventListener("DOMContentLoaded", function () {
    const incomeAmountInput = document.getElementById("incomeAmount");
    const addIncomeButton = document.getElementById("addIncome");
    const expenseAmountInput = document.getElementById("expenseAmount");
    const addExpenseButton = document.getElementById("addExpense");
    const totalIncomeSpan = document.getElementById("totalIncome");
    const totalExpensesSpan = document.getElementById("totalExpenses");
    const profitSpan = document.getElementById("profit");

    let totalIncome = 0;
    let totalExpenses = 0;

    addIncomeButton.addEventListener("click", function () {
        const incomeAmount = parseFloat(incomeAmountInput.value);
        if (!isNaN(incomeAmount) && incomeAmount > 0) {
            totalIncome += incomeAmount;
            totalIncomeSpan.textContent = totalIncome.toFixed(2);
            incomeAmountInput.value = "";
            calculateProfit();
        }
    });

    addExpenseButton.addEventListener("click", function () {
        const expenseAmount = parseFloat(expenseAmountInput.value);
        if (!isNaN(expenseAmount) && expenseAmount > 0) {
            totalExpenses += expenseAmount;
            totalExpensesSpan.textContent = totalExpenses.toFixed(2);
            expenseAmountInput.value = "";
            calculateProfit();
        }
    });

    function calculateProfit() {
        const profit = totalIncome - totalExpenses;
        profitSpan.textContent = profit.toFixed(2);
    }
});
