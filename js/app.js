document.getElementById("btn-calculate").addEventListener("click", function () {
    const foodInput = expenceInput("food-input");
    const rentInput = expenceInput("rent-input");
    const clothInput = expenceInput("cloth-input");

    const totalExpence = foodInput + rentInput + clothInput;
    if (isNaN(totalExpence)) {
        alert("please Enter Your Number");
        return;
    } else if (totalExpence < 0) {
        alert("Negative Number is Not Defiend");
        return;
    }
    setProperty("total-expence", totalExpence)

    const totalIncome = document.getElementById("total-income");
    const totalIncomeString = totalIncome.value;
    const totalIncomeNumber = parseInt(totalIncomeString);
    const incomeToExpence = totalIncomeNumber - totalExpence;
    setProperty("total-balance", incomeToExpence)
})

document.getElementById("calculator").addEventListener("click", function () {
    const saveInput = expenceInput("save-input");
    if (saveInput > 100) {
        alert("Your Percent Number Is Very Big")
        return;
    }
    const totalIncome = expenceInput("total-income");
    const saveAmount = (totalIncome * saveInput) / 100;
    if (isNaN(saveAmount)) {
        alert("please Enter Your Number");
        return;
    }
    setProperty("saving-amount", saveAmount)

    const totalBalance = expenceInputInnerText("total-balance")
    const savingAmounts = expenceInputInnerText("saving-amount")
    const reamainingBalence = totalBalance - savingAmounts;
    setProperty("remaining-balance", reamainingBalence)

})