const Article = require("../src/Article");

function calculateTotalPrice(cart){
    if(!Array.isArray(cart)){
        throw new Error("There is no cart");
    }
    if(cart.some(element => !(element instanceof Article ))){
        throw new Error("Cart contains invalid items");
    }
    if(cart.some(element => element.price < 0)){
        throw new Error("Price of item must be positive");
    }
    if(cart.some(element => element.quantity <= 0)){
        throw new Error("Item quantity must be positive");
    }
    if(cart.length === 0){
        return 0;
    }
    return cart.map(element => {
        return calculateVAT(element) * element.quantity;
    }).reduce((total, current) => total += current);
}


function calculateVAT(element){
    const vat = VATs.find(vat => vat.name === element.categorie);
    if(vat){
        if (vat.percent < 0){
            throw new Error("VAT must be positive");
        }
        return element.price * (1 + vat.percent / 100);
    } else {
        throw new Error("Unknown category for VAT");
    }
}

module.exports = {calculateTotalPrice, calculateVAT}
