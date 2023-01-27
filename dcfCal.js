 function calculateIntrinsicValue() {
      var revenue = document.getElementById("revenue").value;
      var growth = document.getElementById("growth").value;
      var discount_rate = document.getElementById("discount_rate").value;
      var years = document.getElementById("years").value;
      var expenses = document.getElementById("expenses").value;
      var capEx = document.getElementById("capEx").value;
      var workingCapital = document.getElementById("workingCapital").value;
var intrinsic_value = dcf(revenue, growth, discount_rate, years, expenses, capEx, workingCapital);
document.getElementById("intrinsic_value").value = intrinsic_value;
}

// function to calculate the intrinsic value of a stock using the DCF model
function dcf(revenue, growth, discount_rate, years, expenses, capEx, workingCapital) {
    // initialize the intrinsic value
    var intrinsic_value = 0;
    // loop through the years to calculate the present value of future cash flows
    for (var i = 0; i < years; i++) {
        var netIncome = revenue - expenses - capEx - workingCapital;
        intrinsic_value += netIncome / Math.pow(1 + discount_rate, i);
        revenue *= (1 + growth);
        capEx *= (1 + growth);
    }
    // calculate the terminal value
    var terminal_value = revenue * (1 + growth) / (discount_rate - growth);
    // add the present value of the terminal value to the intrinsic value
    intrinsic_value += terminal_value / Math.pow(1 + discount_rate, years);
    // convert the intrinsic value to dollars
    intrinsic_value = "$" + intrinsic_value.toFixed(2);
    // return the intrinsic value
    return intrinsic_value;
}

function resetCalculator() {
    // reset form inputs
    document.getElementById("revenue").value = "";
    document.getElementById("growth").value = "";
    document.getElementById("discount_rate").value = "";
    document.getElementById("years").value = "";
    document.getElementById("expenses").value = "";
    document.getElementById("capEx").value = "";
    document.getElementById("workingCapital").value = "";
    // reset intrinsic value output
    document.getElementById("intrinsic_value").value = "";
  }
  

