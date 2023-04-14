//  This file contains all the JavaScript for the web page

//  Log "Hello World" to console because this is important

console.log("Hello World")

// ****************

//  Function to have a dropdown for the different states in Australia. This will be used to drive stamp duty and title transfer calculations

function createDropdown(options, dropdownId) {
    const dropdown = document.createElement("select");
    dropdown.id = dropdownId;

    options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        dropdown.appendChild(optionElement);
    });

    return dropdown;
}

const states = ["", "New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania", "Australian Capital Territory", "Northern Territory"];

const dropdownContainer = document.getElementById("stateDropdown");
const stateDropdown = createDropdown(states, "state-dropdown");
dropdownContainer.appendChild(stateDropdown);


// ****************

//  This function calculates the stamp duty based on the state and property value
function stampDutyCalculator() {
    console.log('called stampDutyCalculator function')

    // Get the State of the property
    const stateDropdown = document.getElementById("stateDropdown").children;
        console.log(stateDropdown);   
    const state = stateDropdown.value;
        console.log(state);

    // Get the Property Price amount
    const propertyPriceElement = document.getElementById("propertyPrice");
    const propertyPrice = Number(propertyPriceElement.value);
    console.log(propertyPrice);

    //  Start with Stamp Duty at 0
    let stampDuty = 0;

    // Perform Stamp Duty calculation for each state
    switch (state) {
        case "New South Wales":
            // taxRate = 0.10;
            stampDuty = propertyPrice + 1
            // total = subtotal + (subtotal * taxRate);
            break;
        case "Queensland":
            // taxRate = 0.08;
            stampDuty = 120; // Queensland has an extra $20 surcharge
            // total = subtotal + (subtotal * taxRate);
            break;
        case "South Australia":
            // taxRate = 0.09;
            // total = subtotal + (subtotal * taxRate) + 10; // SA has a $10 handling fee
            break;
        case "Victoria":
            // Stamp duty calculation for Victoria
            // if (subtotal <= 250000) {
            //     stampDuty = 0.01 * subtotal;
            // } else if (subtotal <= 960000) {
            //     stampDuty = (0.02 * (subtotal - 250000)) + 2500;
            // } else if (subtotal <= 2000000) {
            //     stampDuty = (0.03 * (subtotal - 960000)) + 28700;
            // } else if (subtotal <= 3000000) {
            //     stampDuty = (0.04 * (subtotal - 2000000)) + 89900;
            // } else {
            //     stampDuty = (0.05 * (subtotal - 3000000)) + 169900;
            // }
            // total = subtotal + stampDuty;
            break;
        case "Western Australia":
            // taxRate = 0.06;
            stampDuty = 80; // WA has a $20 discount
            // total = subtotal + (subtotal * taxRate);
            break;
        default:
            stampDuty = 2;
            break;
    }

    // const stampDutyResult = stampDuty
    stampDuty.textContent = stampDuty.toFixed(2);
    console.log(stampDuty)
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

