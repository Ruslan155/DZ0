let firstValue = "string";
let secondValue = 2;

if(isFinite(firstValue) && isFinite(secondValue))
{
    console.log(parseInt(firstValue) + parseInt(secondValue));
}
else
{
    console.log(NaN);
}
