//  This file contains all the JavaScript for the web page

// ****************************************************************************************************************

//  Log "Hello World" to console because this is important

// console.log("Hello World")

// ****************************************************************************************************************

//  This section is for defining the data model used for the calculator

const propertyDetails = {
    state: "",
    propertyPrice: 0
}

const funding = {
    deposit: 0,
    depositRemaining: 0
}

const purchaseCosts = {
    stampDuty: 0,
    landTransferFee: 0,
    mortgageRegistrationFee: 0,
    mortgageDischargeFee: 0,
    conveyancingFee: 0,
    buildingInspection: 0,
    pestInspection: 0,
    homeBuildingContentsInsurance: 0,
    councilWaterUtilityRates: 0,
    removalist: 0,
    refurnishing: 0,
    total: 0
}

const bankFees = {
    applicationFee: 0,
    valuationFee: 0,
    settlementFee: 0,
    packageFee: 0,
    lendersMortgageInsurance: 0,
    total: 0
}

const loanSummary = {
    totalTransactionAmount: 0,
    totalLoanAmount: 0,
    LoanToValueRatio: 0
}

const LMI = {
    isLMIRequired: "",
    additionalSavingsRequired: 0,
    lmiPercent: 0,
    lmiCost: 0,
    lmiStampDuty: 0,
    lmiStampDutyCost: 0
}

// ****************************************************************************************************************

//  This function updates the values in the data model after changes to the dropdowns

function updatePropertyDetails() {
    const stateDropdown = document.getElementById("stateDropdown");
    // console.log(stateDropdown)
    const state = stateDropdown.value;
    // console.log(state)
    propertyDetails.state = state
    // console.log("propertyDetails.state = " + propertyDetails.state)

    const propertyPriceElement = document.getElementById("propertyPrice");
    const propertyPrice = Number(propertyPriceElement.value);
    propertyDetails.propertyPrice = propertyPrice

    const depositElement = document.getElementById("deposit");
    const deposit = Number(depositElement.value);
    funding.deposit = deposit
}

// ****************************************************************************************************************

//  This function calculates the stamp duty based on the state and property value
//  Source: https://conveyancing.com.au/tools/stamp-duty-calculator-vic

function stampDutyCalculator() {

    // Get the State of the property from the data model propertyDetails object
    const state = propertyDetails.state;
    // console.log(state)

    // Get the Property Price of the property from the data model propertyDetails object
    const propertyPrice = propertyDetails.propertyPrice;
    // console.log(propertyPrice)
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
    purchaseCosts.stampDuty = stampDuty
    // console.log(purchaseCosts.stampDuty)
}

// ****************************************************************************************************************

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

// ****************************************************************************************************************

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

// ****************************************************************************************************************

//  This function calculates the stamp duty for an owner occupied property in NT

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

// ****************************************************************************************************************

//  This function calculates the stamp duty for an owner occupied property in QLD

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

// ****************************************************************************************************************

//  This function calculates the stamp duty for an owner occupied property in SA

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

// ****************************************************************************************************************

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

// ****************************************************************************************************************

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

// ****************************************************************************************************************

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

// ****************************************************************************************************************

//  This function calculates the land transfer fee based on the state and property value
//  Source: https://conveyancing.com.au/tools/stamp-duty-calculator-vic

function landTransferFeeCalculator() {

    const state = propertyDetails.state;
    const propertyPrice = propertyDetails.propertyPrice;

    //  Start with Land Transfer Fee at 0
    let landTransferFee = 0;

    // Perform Land Transfer Fee calculation for each state. This switch allows for different calculations for each case.
    // The value following 'case' is the value of the dropdown, which triggers the following function.
    switch (state) {
        case "ACT":
            //  This sets the landTransferFee value from 0 to the result of the landTransferFeeACT function
            //  The propertyPrice is brackets allows for the propertyPrice from this function to be passed to the next function
            landTransferFee = landTransferFeeACT(propertyPrice);
            break;
        case "NSW":
            landTransferFee = landTransferFeeNSW(propertyPrice);
            break;
        case "NT":
            landTransferFee = landTransferFeeNT(propertyPrice);
            break;
        case "QLD":
            landTransferFee = landTransferFeeQLD(propertyPrice);
            break;
        case "SA":
            landTransferFee = landTransferFeeSA(propertyPrice);
            break;
        case "TAS":
            landTransferFee = landTransferFeeTAS(propertyPrice);
            break;
        case "VIC":
            landTransferFee = landTransferFeeVIC(propertyPrice);
            break;
        case "WA":
            landTransferFee = landTransferFeeWA(propertyPrice);
            break;
        default:
            landTransferFee = 0;
            break;
    }

    // Output the Land Transfer Fee result in the HTML and to 2 decimal places with a '$' symbol in front
    const landTransferFeeResultElement = document.getElementById("landTransferFeeResult");
    landTransferFeeResultElement.innerHTML = `$${landTransferFee.toFixed(2)}`;
    purchaseCosts.landTransferFee = landTransferFee
}

// ****************************************************************************************************************

//  This function calculates the land transfer fee for an owner occupied property in ACT
//  Function is called from landTransferFeeCalculator() and is passed the propertyPrice variable when called

function landTransferFeeACT(propertyPrice) {
    landTransferFee = 429

    return landTransferFee
}

// ****************************************************************************************************************

//  This function calculates the land transfer fee for an owner occupied property in NSW

function landTransferFeeNSW(propertyPrice) {
    landTransferFee = 154.20

    return landTransferFee
}

// ****************************************************************************************************************

//  This function calculates the land transfer fee for an owner occupied property in NT

function landTransferFeeNT(propertyPrice) {
    landTransferFee = 156.00

    return landTransferFee
}

// ****************************************************************************************************************

//  This function calculates the land transfer fee for an owner occupied property in QLD

function landTransferFeeQLD(propertyPrice) {

    if (propertyPrice <= 180000) {
        landTransferFee = 208.83
    } else {
        landTransferFee = 208.83 + (20 * ((propertyPrice - 180000) / 100));
    }
    //  Returns the landTransferFee value to the function that initiated this function
    return landTransferFee
}

// ****************************************************************************************************************

//  This function calculates the land transfer fee for an owner occupied property in SA

function landTransferFeeSA(propertyPrice) {
    if (propertyPrice <= 5000) {
        landTransferFee = 179.00
    } else if (propertyPrice <= 20000) {
        landTransferFee = 200.00
    } else if (propertyPrice <= 40000) {
        landTransferFee = 220.00
    } else if (propertyPrice <= 50000) {
        landTransferFee = 309.00
    } else {
        landTransferFee = 309.00 + (91.50 * ((propertyPrice - 50000) / 10000));
    }
    //  Returns the landTransferFee value to the function that initiated this function
    return landTransferFee
}

// ****************************************************************************************************************

//  This function calculates the land transfer fee for an owner occupied property in TAS

function landTransferFeeTAS(propertyPrice) {
    landTransferFee = 222.70

    return landTransferFee
}

// ****************************************************************************************************************

//  This function calculates the land transfer fee for an owner occupied property in VIC

function landTransferFeeVIC(propertyPrice) {
    let landTransferFee = 92.40 + (2.34 * (propertyPrice / 1000))

    if (landTransferFee > 3603) {
        return 3603
    }

    return landTransferFee
}

// ****************************************************************************************************************

//  This function calculates the land transfer fee for an owner occupied property in WA

function landTransferFeeWA(propertyPrice) {
    if (propertyPrice <= 85000) {
        landTransferFee = 187.60
    } else if (propertyPrice <= 120000) {
        landTransferFee = 197.60
    } else if (propertyPrice <= 200000) {
        landTransferFee = 217.60
    } else if (propertyPrice <= 300000) {
        landTransferFee = 237.60
    } else if (propertyPrice <= 400000) {
        landTransferFee = 257.60
    } else if (propertyPrice <= 500000) {
        landTransferFee = 277.60
    } else if (propertyPrice <= 600000) {
        landTransferFee = 297.60
    } else if (propertyPrice <= 700000) {
        landTransferFee = 317.60
    } else if (propertyPrice <= 800000) {
        landTransferFee = 337.60
    } else if (propertyPrice <= 900000) {
        landTransferFee = 357.60
    } else if (propertyPrice <= 1000000) {
        landTransferFee = 377.60
    } else if (propertyPrice <= 1100000) {
        landTransferFee = 397.60
    } else if (propertyPrice <= 1200000) {
        landTransferFee = 417.60
    } else if (propertyPrice <= 1300000) {
        landTransferFee = 437.60
    } else if (propertyPrice <= 1400000) {
        landTransferFee = 457.60
    } else if (propertyPrice <= 1500000) {
        landTransferFee = 477.60
    } else if (propertyPrice <= 1600000) {
        landTransferFee = 497.60
    } else if (propertyPrice <= 1700000) {
        landTransferFee = 517.60
    } else if (propertyPrice <= 1800000) {
        landTransferFee = 537.60
    } else if (propertyPrice <= 1900000) {
        landTransferFee = 557.60
    } else if (propertyPrice <= 2000000) {
        landTransferFee = 577.60
    } else {
        landTransferFee = 577.60 + (20 * (propertyPrice / 100));

    }
    //  Returns the landTransferFee value to the function that initiated this function
    return landTransferFee
}

// ****************************************************************************************************************

//  This function calculates the mortgage registration fee depending on the property state

function mortgageRegistrationFeeCalculator() {

    const stateDropdown = document.getElementById("stateDropdown");
    const state = stateDropdown.value;

    let mortgageRegistrationFee = 0;

    switch (state) {
        case "ACT":
            mortgageRegistrationFee = 160.00;
            break;
        case "NSW":
            mortgageRegistrationFee = 154.20;
            break;
        case "NT":
            mortgageRegistrationFee = 156.00;
            break;
        case "QLD":
            mortgageRegistrationFee = 208.83;
            break;
        case "SA":
            mortgageRegistrationFee = 179.00;
            break;
        case "TAS":
            mortgageRegistrationFee = 145.35;
            break;
        case "VIC":
            mortgageRegistrationFee = 123.50;
            break;
        case "WA":
            mortgageRegistrationFee = 187.60;
            break;
        default:
            mortgageRegistrationFee = 0;
            break;
    }

    const mortgageRegistrationFeeResultElement = document.getElementById("mortgageRegistrationFeeResult");
    mortgageRegistrationFeeResultElement.innerHTML = `$${mortgageRegistrationFee.toFixed(2)}`;
    purchaseCosts.mortgageRegistrationFee = mortgageRegistrationFee
    // console.log("purchaseCosts.mortgageRegistrationFee = " + purchaseCosts.mortgageRegistrationFee)
}

// ****************************************************************************************************************

//  This function sums all of the fields with the id of 'purchase-costs-field'
//  This only works on input fields, need to figure out how to add calculated fields to the sum

function sumPurchaseCosts() {
    // console.log("sumPurchaseCosts() called")
    let sum = 0;
    const fields = document.querySelectorAll('.purchase-costs-field');
    const stampDuty = purchaseCosts.stampDuty;
    // console.log("stampDuty = " + stampDuty)
    const landTransferFee = purchaseCosts.landTransferFee;
    // console.log("landTransferFee = " + landTransferFee)
    const mortgageRegistrationFee = purchaseCosts.mortgageRegistrationFee;
    // console.log("mortgageRegistrationFee = " + mortgageRegistrationFee)

    fields.forEach((field) => {
        const fieldValue = parseFloat(field.value);
        if (!isNaN(fieldValue)) {
            sum += fieldValue;
        }
    });

    sum += stampDuty;
    sum += landTransferFee;
    sum += mortgageRegistrationFee;

    purchaseCosts.total = sum

    // Format the sum as a currency value
    const formattedSum = new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD'
    }).format(sum);


    // Output the sum as a currency value
    const sumPurchaseCosts = document.querySelector('#sum-purchase-costs');
    sumPurchaseCosts.textContent = formattedSum;
}

// ****************************************************************************************************************

//  This function sums all of the fields with the id of 'bank-fees-field'

function sumBankFees() {
    // console.log("sumBankFees() called")
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

    bankFees.total = sum;
    // console.log("bankFees.total = sum = " + sum)

    // Format the sum as a currency value
    const formattedSum = new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD'
    }).format(sum);

    // Output the sum as a currency value
    const sumBankFees = document.querySelector('#sum-bank-fees');
    sumBankFees.textContent = formattedSum;
}

// ****************************************************************************************************************

//  This function sums the total transaction cost, including property price, purchase costs and bank fees

function sumTransactionAmount() {
    // console.log("sumTransactionAmount() called")
    const propertyPrice = propertyDetails.propertyPrice
    const purchaseCostTotal = purchaseCosts.total
    const bankFeesTotal = bankFees.total
    const sum = propertyPrice + purchaseCostTotal + bankFeesTotal

    loanSummary.totalTransactionAmount = sum

    const formattedSum = new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD'
    }).format(sum);

    // Output the sum as a currency value
    const transactionAmount = document.querySelector('#sum-transaction-amount');
    transactionAmount.textContent = formattedSum;
}

// ****************************************************************************************************************

//  This function returns the deposit amount

function depositAmount() {
    const sum = funding.deposit

    const formattedSum = new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD'
    }).format(sum);

    // Output the sum as a percentage value
    const depositAmount = document.querySelector('#deposit-amount');
    depositAmount.textContent = formattedSum;
}

// ****************************************************************************************************************

//  This function returns the deposit amount minus purchase costs

function depositAmountRemaining() {
    const deposit = funding.deposit
    const purchaseCostTotal = purchaseCosts.total
    const sum = deposit - purchaseCostTotal

    funding.depositRemaining = sum
    const formattedSum = new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD'
    }).format(sum);

    // Output the sum as a percentage value
    const depositRemaining = document.querySelector('#deposit-amount-minus-purchase-costs');
    depositRemaining.textContent = formattedSum;
}

// ****************************************************************************************************************

//  This function sums the total loan amount, including property price and bank fees

function sumTotalLoanAmount() {
    const propertyPrice = propertyDetails.propertyPrice
    const bankFeesTotal = bankFees.total
    const depositRemaining = funding.depositRemaining

    const sum = (propertyPrice + bankFeesTotal) - depositRemaining

    loanSummary.totalLoanAmount = sum

    const formattedSum = new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD'
    }).format(sum);

    // Output the sum as a currency value
    const totalLoanAmount = document.querySelector('#sum-total-loan-amount');
    totalLoanAmount.textContent = formattedSum;
}

// ****************************************************************************************************************

//  This function calculates the LVR based on the loan amount and the property price

function calculateLVR() {
    const propertyPrice = propertyDetails.propertyPrice
    const totalLoanAmount = loanSummary.totalLoanAmount
    const sum = totalLoanAmount / propertyPrice

    loanSummary.LoanToValueRatio = sum

    const formattedSum = new Intl.NumberFormat('en-AU', {
        style: 'percent',
        minimumFractionDigits: 2
    }).format(sum);

    // Output the sum as a percentage value
    const lvrAmount = document.querySelector('#loan-to-value-ratio');
    lvrAmount.textContent = formattedSum;
}

// ****************************************************************************************************************

//  This function calculates if LMI is required

function lmiRequired() {
    const LVR = loanSummary.LoanToValueRatio;

    let isLMIRequired;
    if (LVR >= 0.8) {
        isLMIRequired = "Yes";
    } else {
        isLMIRequired = "No";
    }

    LMI.isLMIRequired = isLMIRequired

    const isLMIRequiredResultElement = document.getElementById("lmi-required-result");
    isLMIRequiredResultElement.innerHTML = `${isLMIRequired}`;
}

// ****************************************************************************************************************

//  This function calculates how much more deposit is required to avoid LMI

function additionalSavingsRequired() {

    const LVR = loanSummary.LoanToValueRatio;
    const propertyPrice = propertyDetails.propertyPrice
    const depositRemaining = funding.depositRemaining

    let additionalSavingsRequired;

    if (LVR >= 0.8) {
        additionalSavingsRequired = (propertyPrice * .2) - depositRemaining;
    } else {
        additionalSavingsRequired = 0;
    }

    LMI.additionalSavingsRequired = additionalSavingsRequired

    const additionalSavingsRequiredResultElement = document.getElementById("additional-savings-required");
    additionalSavingsRequiredResultElement.innerHTML = `$${additionalSavingsRequired}`;
}

// ****************************************************************************************************************

//  Function to calculate the Lenders Mortgage Insurance Rate (%)

function calculateLMIRate() {

    //  This is my first array, fun times

    const LVR = loanSummary.LoanToValueRatio;
    //  Retrieve the LVR from the loanSummary data model
    const LVRRoundDown = Math.floor(LVR * 100);
    //  Turn the LVR from a decimal to a full number and round down. e.g. from 0.8149 to 81
    //  This is done to help with the logic when looking up the array table. See const lmiPercent...
    const totalLoanAmount = loanSummary.totalLoanAmount;
    //  Retrieve the total loan amount from the loanSummary data model

    const rateTable = [

        //  Define the rate table for the LMI percent, based on LVR and total loan amount
        //  Pulled from: https://www.homeloanexperts.com.au/lenders-mortgage-insurance/lmi-premium-rates/

        // LVR 80%
        [0.475, 0.568, 0.904, 0.904, 0.913], // LoanAmount: up to 300k, 300,001-500,000, 500,001-600,000, 600,001-750,000, 750,000 plus
        // LVR 81%
        [0.485, 0.568, 0.904, 0.904, 0.913],
        // LVR 82%
        [0.596, 0.699, 0.932, 1.090, 1.109],
        // LVR 83%
        [0.662, 0.829, 0.960, 1.090, 1.146],
        // LVR 84%
        [0.727, 0.969, 1.165, 1.333, 1.407],
        // LVR 85%
        [0.876, 1.081, 1.258, 1.407, 1.463],
        // LVR 86%
        [0.932, 1.146, 1.407, 1.631, 1.733],
        // LVR 87%
        [1.062, 1.305, 1.463, 1.631, 1.752],
        // LVR 88%
        [1.295, 1.621, 1.948, 2.218, 2.395],
        // LVR 89%
        [1.463, 1.873, 2.180, 2.367, 2.516],
        // LVR 90%
        [2.013, 2.618, 3.513, 3.783, 3.820],
        // LVR 91%
        [2.013, 2.674, 3.569, 3.867, 3.932],
        // LVR 92%
        [2.330, 3.028, 3.802, 4.081, 4.156],
        // LVR 93%
        [2.376, 3.028, 3.802, 4.286, 4.324],
        // LVR 94%
        [2.609, 3.345, 3.998, 4.613, 4.603],
    ];

    if (LVRRoundDown >= 80 && LVRRoundDown <= 94) {
        let columnIndex = 0;
        if (totalLoanAmount <= 300000) {
            columnIndex = 0;
        } else if (totalLoanAmount >= 300001 && totalLoanAmount <= 500000) {
            columnIndex = 1;
        } else if (totalLoanAmount >= 500001 && totalLoanAmount <= 600000) {
            columnIndex = 2;
        } else if (totalLoanAmount >= 600001 && totalLoanAmount <= 750000) {
            columnIndex = 3;
        } else if (totalLoanAmount > 750000) {
            columnIndex = 4;
        }

        const lmiPercent = rateTable[LVRRoundDown - 80][columnIndex];
        LMI.lmiPercent = lmiPercent;

        const lmiPercentRateResultElement = document.getElementById("lmi-percent-rate");
        lmiPercentRateResultElement.innerHTML = `${lmiPercent}%`;
    }
}



// ****************************************************************************************************************

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

