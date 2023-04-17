//  This file contains all the JavaScript for the web page

//  Log "Hello World" to console because this is important

console.log("Hello World")

// ****************

//  This function calculates the stamp duty based on the state and property value
function stampDutyCalculator() {

    // Get the State of the property from the dropdown. Getting the dropdown first, then the value of the dropdown
    const stateDropdown = document.getElementById("stateDropdown");
    const state = stateDropdown.value;

    // Get the Property Price amount. Getting the field first, then getting the value of the field as a Number.
    const propertyPriceElement = document.getElementById("propertyPrice");
    const propertyPrice = Number(propertyPriceElement.value);

    //  Start with Stamp Duty at 0
    let stampDuty = 0;

    // Perform Stamp Duty calculation for each state. This switch allows for different calculations for each case.
    // The value following 'case' is the value of the dropdown, which triggers the following function.
    switch (state) {
        case "ACT":
            //  This sets the stampDuty value from 0 to the result of the stampDutyCalculatorACT function
            //  The propertyPrice is brackets allows for the propertyPrice from this function to be passed to the next function
            stampDuty = stampDutyCalculatorACT(propertyPrice);
            break;
        case "NSW":
            stampDuty = stampDutyCalculatorNSW(propertyPrice);
            break;
        case "NT":
            stampDuty = stampDutyCalculatorNT(propertyPrice);
            break;
        case "QLD":
            stampDuty = stampDutyCalculatorQLD(propertyPrice);
            break;
        case "SA":
            stampDuty = stampDutyCalculatorSA(propertyPrice);
            break;
        case "TAS":
            stampDuty = stampDutyCalculatorTAS(propertyPrice);
            break;
        case "VIC":
            stampDuty = stampDutyCalculatorVIC(propertyPrice);
            break;
        case "WA":
            stampDuty = stampDutyCalculatorWA(propertyPrice);
            break;
        default:
            stampDuty = 0;
            break;
    }

    // Output the Stamp Duty result in the HTML and to 2 decimal places with a '$' symbol in front
    const stampDutyResultElement = document.getElementById("stampDutyResult");
    stampDutyResultElement.innerHTML = `$${stampDuty.toFixed(2)}`;
}

// ****************

//  This function calculates the stamp duty for an owner occupied property in ACT
//  Function is called from stampDutyCalculator() and is passed the propertyPrice variable when called

function stampDutyCalculatorACT(propertyPrice) {
    //  if propertyPrice is less than or equal to $260,000 then stamp duty calculation is 0.6 x (propertyPrice / 100)
    if (propertyPrice <= 260000) {
        stampDuty = 0.6 * (propertyPrice / 100)
    } else if (propertyPrice <= 300000) {
        stampDuty = 1560 + (2.2 * ((propertyPrice - 260000) / 100))
    } else if (propertyPrice <= 500000) {
        stampDuty = 2440 + (3.4 * ((propertyPrice - 300000) / 100))
    } else if (propertyPrice <= 750000) {
        stampDuty = 9240 + (4.32 * ((propertyPrice - 500000) / 100))
    } else if (propertyPrice <= 1000000) {
        stampDuty = 20040 + (5.9 * ((propertyPrice - 750000) / 100))
    } else if (propertyPrice <= 1455000) {
        stampDuty = 34790 + (5.5 * ((propertyPrice - 1000000) / 100))
    } else {
        stampDuty = 4.54 * ((propertyPrice - 3268000) / 100);
    }
    //  Returns the stampDuty value to the function that initiated this function
    return stampDuty
}

// ****************

//  This function calculates the stamp duty for an owner occupied property in NSW

function stampDutyCalculatorNSW(propertyPrice) {
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
    return stampDuty
}

// ****************

//  This function calculates the stamp duty for an owner occupied property in NT

//  Source: https://www.homeloanexperts.com.au/mortgage-calculators/stamp-duty-calculator-nt/

function stampDutyCalculatorNT(propertyPrice) {
    if (propertyPrice <= 525000) {
        stampDuty = (0.06571441 * Math.pow((propertyPrice / 1000), 2)) + (15 * (propertyPrice / 1000))
    } else if (propertyPrice <= 2999999) {
        stampDuty = 0.0495 * propertyPrice
    } else if (propertyPrice <= 4999999) {
        stampDuty = 0.0575 * propertyPrice
    } else {
        stampDuty = 0.0595 * propertyPrice;
    }
    return stampDuty
}

// ****************

//  This function calculates the stamp duty for an owner occupied property in QLD

//  Source: https://conveyancing.com.au/tools/stamp-duty-calculator-vic

function stampDutyCalculatorQLD(propertyPrice) {
    if (propertyPrice <= 350000) {
        stampDuty = 1.0 * (propertyPrice / 100)
    } else if (propertyPrice <= 540000) {
        stampDuty = 3500 + (3.5 * ((propertyPrice - 350000) / 100))
    } else if (propertyPrice <= 1000000) {
        stampDuty = 10150 + (4.5 * ((propertyPrice - 540000) / 100))
    } else {
        stampDuty = 30850 + (5.75 * ((propertyPrice - 1000000) / 100));
    }
    return stampDuty
}

// ****************

//  This function calculates the stamp duty for an owner occupied property in SA

//  Source: https://conveyancing.com.au/tools/stamp-duty-calculator-vic

function stampDutyCalculatorSA(propertyPrice) {
    if (propertyPrice <= 12000) {
        stampDuty = propertyPrice / 100
    } else if (propertyPrice <= 30000) {
        stampDuty = 120 + (2.0 * ((propertyPrice - 12000) / 100))
    } else if (propertyPrice <= 50000) {
        stampDuty = 480 + (3.0 * ((propertyPrice - 30000) / 100))
    } else if (propertyPrice <= 100000) {
        stampDuty = 1080 + (3.5 * ((propertyPrice - 50000) / 100))
    } else if (propertyPrice <= 200000) {
        stampDuty = 2830 + (4.0 * ((propertyPrice - 100000) / 100))
    } else if (propertyPrice <= 250000) {
        stampDuty = 6830 + (4.25 * ((propertyPrice - 200000) / 100))
    } else if (propertyPrice <= 300000) {
        stampDuty = 8955 + (4.75 * ((propertyPrice - 250000) / 100))
    } else if (propertyPrice <= 500000) {
        stampDuty = 11330 + (5.0 * ((propertyPrice - 300000) / 100))
    } else {
        stampDuty = 21330 + (5.5 * ((propertyPrice - 500000) / 100));
    }
    return stampDuty
}

// ****************

//  This function calculates the stamp duty for an owner occupied property in TAS

function stampDutyCalculatorTAS(propertyPrice) {
    if (propertyPrice <= 3000) {
        stampDuty = 50
    } else if (propertyPrice <= 25000) {
        stampDuty = 50 + (1.75 * ((propertyPrice - 3000) / 100))
    } else if (propertyPrice <= 75000) {
        stampDuty = 435 + (2.25 * ((propertyPrice - 25000) / 100))
    } else if (propertyPrice <= 200000) {
        stampDuty = 1560 + (3.5 * ((propertyPrice - 75000) / 100))
    } else if (propertyPrice <= 375000) {
        stampDuty = 5935 + (4.0 * ((propertyPrice - 200000) / 100))
    } else if (propertyPrice <= 725000) {
        stampDuty = 12935 + (4.25 * ((propertyPrice - 375000) / 100))
    } else {
        stampDuty = 27810 + (4.5 * ((propertyPrice - 500000) / 100));
    }
    return stampDuty
}

// ****************

//  This function calculates the stamp duty for an owner occupied property in VIC

function stampDutyCalculatorVIC(propertyPrice) {
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
    return stampDuty
}

// ****************

//  This function calculates the stamp duty for an owner occupied property in WA

function stampDutyCalculatorWA(propertyPrice) {

    if (propertyPrice <= 80000) {
        stampDuty = 1.9 * (propertyPrice / 100)
    } else if (propertyPrice <= 100000) {
        stampDuty = 1520 + (2.85 * ((propertyPrice - 80000) / 100))
    } else if (propertyPrice <= 250000) {
        stampDuty = 2090 + (3.8 * ((propertyPrice - 100000) / 100))
    } else if (propertyPrice <= 500000) {
        stampDuty = 7790 + (4.75 * ((propertyPrice - 250000) / 100))
    } else {
        stampDuty = 19665 + (5.15 * ((propertyPrice - 500000) / 100));
    }
    return stampDuty
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

