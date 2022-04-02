//A function that changes the color of the heart-icon using javascript style property.
function colorChange(elm){
        if(elm.style.color=="black"){
        return elm.style.color="red";
        }
        else{
            return elm.style.color="black";
        }
};

//Manipulating an achor tag attribute in html using 'setAttribute' method.
let carValuatorLink=document.getElementById("scriptOne");
carValuatorLink.setAttribute("href","https://www.autotrader.co.za/car-valuation");
carValuatorLink.setAttribute("target","_blank");

let financeCalculatorLink=document.getElementById("scriptTwo");
financeCalculatorLink.setAttribute("href","https://www.wesbank.co.za/home/calculate");
financeCalculatorLink.setAttribute("target","_blank");

let carFinanceLink=document.getElementById("scriptThree");
carFinanceLink.setAttribute("href","https://www.nedbank.co.za/content/nedbank/desktop/gt/en/personal/loans/vehicle-finance-mfc.html");
carFinanceLink.setAttribute("target","_blank");

let carInsuranceLink=document.getElementById("scriptFour");
carInsuranceLink.setAttribute("href","https://www.oldmutualinsurance.co.za/products/car-insurance?UCID=OMSTIPERFMAX0001&gclid=CjwKCAjwopWSBhB6EiwAjxmqDTfXzUVD1uXL4vE5RSMv2YiK4BoTlaHGwOiXgJ0x6OteMi7hlzc8bRoCM04QAvD_BwE");
carInsuranceLink.setAttribute("target","_blank");

let carVehicleCheckLink=document.getElementById("scriptFive");
carVehicleCheckLink.setAttribute("href","https://www.vehiclecheck.co.za/");
carVehicleCheckLink.setAttribute("target","_blank");
