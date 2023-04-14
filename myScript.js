//  This file contains all the JavaScript for the web page

//  Log "Hello World" to console because this is important

console.log("Hello World")

// ****************

//  This function calculates the stamp duty based on the state and property value
function stampDutyCalculator() {

    // Get the State of the property
    const stateDropdown = document.getElementById("stateDropdown");
    const state = stateDropdown.value;

    // Get the Property Price amount
    const propertyPriceElement = document.getElementById("propertyPrice");
    const propertyPrice = Number(propertyPriceElement.value);

    //  Start with Stamp Duty at 0
    let stampDuty = 0;

    // Perform Stamp Duty calculation for each state
    switch (state) {
        case "ACT":
            stampDuty = propertyPrice + 1
            break;
        case "NSW":
            if (propertyPrice <= 15000) {
                stampDuty = 1.25 * (propertyPrice / 100)
            } else if (propertyPrice <= 32000) {
                stampDuty = 187 + (1.50 * ((propertyPrice - 15000) / 100))
            } else if (propertyPrice <= 87000) {
                stampDuty = 442 + (1.75 * ((propertyPrice - 32000) / 100))
            } else if (propertyPrice <= 327000) {
                stampDuty = 1405 + (3.5 * ((propertyPrice - 87000) / 100))
            } else if (propertyPrice <= 1089000) {
                stampDuty = 9805 + (4.5 * ((propertyPrice - 327000) / 100))
            } else if (propertyPrice <= 3268000) {
                stampDuty = 44095 + (5.5 * ((propertyPrice - 1089000) / 100))
            } else {
                stampDuty = 163940 + (7.0 * ((propertyPrice - 3268000) / 100));
            }
            break;
        case "NT":
            stampDuty = propertyPrice + 3
            break;
        case "QLD":
            stampDuty = propertyPrice + 4
            break;
        case "SA":
            stampDuty = propertyPrice + 5
            break;
        case "TAS":
            stampDuty = propertyPrice + 6
            break;
        case "VIC":
            if (propertyPrice <= 25000) {
                stampDuty = 0.014 * propertyPrice
            } else if (propertyPrice <= 130000) {
                stampDuty = 350 + 0.024 * (propertyPrice - 25000)
            } else if (propertyPrice <= 440000) {
                stampDuty = 2870 + 0.05 * (propertyPrice - 130000)
            } else if (propertyPrice <= 550000) {
                stampDuty = 18370 + 0.06 * (propertyPrice - 440000)
            } else if (propertyPrice <= 960000) {
                stampDuty = 28070 + 0.06 * (propertyPrice - 550000)
            } else {
                stampDuty = 0.055 * propertyPrice;
            }
            break;
        case "WA":
            stampDuty = propertyPrice + 8
            break;
        case "ACT":
            stampDuty = propertyPrice + 9
            break;
        default:
            stampDuty = 0;
            break;
    }

    // Output the Stamp Duty result in the HTML
    const stampDutyResultElement = document.getElementById("stampDutyResult");
    stampDutyResultElement.innerHTML = `$${stampDuty.toFixed(2)}`;
}




// ****************

//  This function sums all of the fields with the id of 'purchase-costs-field'

function sumPropertyFees() {
    // Get all elements with the "purchase-costs-field" class
    const feeFields = document.querySelectorAll('.purchase-costs-field');

    // Calculate the sum of all fee fields
    let sum = 0;
    feeFields.forEach((field) => {
        const fieldValue = parseFloat(field.value);
        if (!isNaN(fieldValue)) {
            sum += fieldValue;
        }
    });

    // Format the sum as a currency value
    const formattedSum = new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD'
    }).format(sum);

    // Output the sum as a currency value
    const sumPropertyFees = document.querySelector('#sum-output');
    sumPropertyFees.textContent = formattedSum;
}





// ****************

//  This function sums all of the fields with the id of 'bank-fees-field'

function sumBankFees() {
    // Get all elements with the "bank-fees-field" class
    const feeFields = document.querySelectorAll('.bank-fees-field');

    // Calculate the sum of all fee fields
    let sum = 0;
    feeFields.forEach((field) => {
        const fieldValue = parseFloat(field.value);
        if (!isNaN(fieldValue)) {
            sum += fieldValue;
        }
    });

    // Format the sum as a currency value
    const formattedSum = new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD'
    }).format(sum);

    // Output the sum as a currency value
    const sumBankFees = document.querySelector('#sum-bank-fees');
    sumBankFees.textContent = formattedSum;
}





// ****************

//  Function to calculate the LVR (0.8 x Property Price)

// function calculate80LoanAmount() {
//     const propertyPrice = document.getElementById("propertyPrice");
//     const LVR80 = document.getElementById("LVR80");

//     const inputValue = Number(propertyPrice.value);
//     const calculation = inputValue * 0.8;

//     // Format the calculation as a currency and set the amount of decimal places to 0
//     const currencyFormat = calculation.toLocaleString('en-AU', {
//         style: 'currency',
//         currency: 'AUD',
//         minimumFractionDigits: 0
//     });

//     LVR80.textContent = currencyFormat;
// }

