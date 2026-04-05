const COST_PER_NIGHT = 60.00;
const OFFICE_COST = 15.00;

function formatCurrency(value) {
    return "$" + value.toFixed(2);
}

document.getElementById("myEnd").onchange("input", calcTotal);
document.getElementById("myTip").onchange("input", calcTotal);
document.getElementById("officeAccess").onchange("change", calcTotal);

function calcTotal() {
    let total = 0;

    let days = parseFloat(document.getElementById("myEnd").value) || 0;
    let tip = parseFloat(document.getElementById("myTip").value) || 0;
    let boughtOffice = document.getElementById("officeAccess").checked;

    let dayCost = COST_PER_NIGHT * days;

    total += dayCost;
    total += tip;
    total += boughtOffice ? OFFICE_COST : 0;

    document.getElementById("totalCost").innerHTML = formatCurrency(total);
}