// get the input values
const basicsalary = 50000;
const benefits = 10000;
function calculateNetSalary(basicsalary,benefits){
    // nhif rate 0.1%
    const NHIFrate = 0.1;
    // tax rate 0.2%
    const Taxrate = 0.2;
    // nssf rate 0.06%
    const NSSFrate = 0.06;
    //calculate grossSalary
    const grossSalary =basicsalary+benefits
    //calculate NHIF
    const NHIF = grossSalary + NHIFrate;
    //calcuale Tax
    const Tax = grossSalary + Taxrate;
    //calculate NSSF
    const NSSF = grossSalary + NSSFrate;
    //calculate NetSalary
    const NetSalary = grossSalary-(NHIF+Tax+NSSF);
    return{
        grossSalary,
        NHIF,
        Tax,
        NSSF,
        NetSalary,
    }
}
//shows the output of the calculated solution
const output = calculateNetSalary(basicsalary,benefits)
console.log("grossSalary:", output.grossSalary);
console.log("NHIF:", output.NHIF);
console.log("Tax:", output.Tax);
console.log("NSSF:", output.NSSF);
console.log("NetSalary:", output.NetSalary)
