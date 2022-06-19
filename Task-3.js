let price = 100;
let sale = parseFloat(prompt("Sale: "));

function newPrice(price,sale)
{
    return price - ((price * sale)/100);
}
if(!isNaN(sale))
{
    console.log(`Яблоки украинские.\n Цена: ${newPrice(price,sale).toFixed(2)} грн.`);
}
