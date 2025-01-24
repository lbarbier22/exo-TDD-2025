const Article = require("../src/Article");
const { calculateTotalPrice, calculateVAT } = require("../src/Cart");
const VAT = require("../src/VAT");

VATs = [
    new VAT("Fruit", 5),
    new VAT("Book", 10),
    new VAT("GPU", 20),
    new VAT("CPU", -5)
];

describe("When I try to calculate the total price of my cart", () => {
    test("with 3 items, then I should have the total price", () => {
        const item1 = new Article(1, "Strawberry", 2, "Fruit", 20);
        const item2 = new Article(2, "Kafka sur le rivage", 1, "Book", 5);
        const item3 = new Article(3, "RTX 5090",3000, "GPU", 1);
        let cart = [item1, item2, item3];
        const total = calculateTotalPrice(cart);
        expect(total).toBe(3647.5);
    });

    test('with no items, I should have a total of 0', () => {
        let cart = [];
        const total = calculateTotalPrice(cart);
        expect(total).toBe(0);
    });

    test("without a cart, then I should get an error", () => {
        expect(() => calculateTotalPrice(undefined)).toThrow("There is no cart");
    });

    test('with invalid items in the cart, then I should get an error', () => {
        let cart = ["hello", "hi"];
        expect(() => calculateTotalPrice(cart)).toThrow("Cart contains invalid items");
        let cart2 = [{ id: 1, price: 5, quantity: 2, stock: 3 }];
        expect(() => calculateTotalPrice(cart2)).toThrow("Cart contains invalid items");
    });

    test("with 1 items with a negative price, then I should get an error", () => {
        const item1 = new Article(1, "Strawberry", 2, "Fruit", 20);
        const item2 = new Article(2, "Pear", -1, "Fruit", 5);
        const item3 = new Article(3, "RTX 5090",3000, "GPU", 1);
        let cart = [item1, item2, item3];
        expect(() => calculateTotalPrice(cart)).toThrow("Price of item must be positive");
    });

    test("with an item having quantity 0 or negative, then I should get an error", () => {
        const item = new Article(3, "RTX 5090",3000, "GPU", 0);
        let cart = [item];
        expect(() => calculateTotalPrice(cart)).toThrow("Item quantity must be positive");
    });

    test("with an item having quantity 0 or negative, then I should get an error", () => {
        const item = new Article(3, "RTX 5090",3000, "GPU", 0);
        let cart = [item];
        expect(() => calculateTotalPrice(cart)).toThrow("Item quantity must be positive");
    });
});

describe("When I try to calculate the VAT price of my item", () => {

    test("with an item having a category, then I should have a result considered the VAT", () => {
        const item = new Article(3, "RTX 5090",3000, "GPU", 1);
        const total = calculateVAT(item);
        expect(total).toBe(3600);
    });

    test("with an item having a category, then I should have a result considered the VAT", () => {
        const item = new Article(3, "CORSAIR VENGEANCE CL30 32Go",100, "RAM", 1);
        expect(() => calculateVAT(item)).toThrow("Unknown category for VAT");
    });

    test("with an item having a category but the percent is negative or equals to 0, then I should get an error", () => {
        const item = new Article(3, "RX 7500F",150, "CPU", 1);
        expect(() => calculateVAT(item)).toThrow("VAT must be positive");
    });

});

describe("When I try to calculate the VAT price of my entire cart", () => {

    test("with items having a category, then I should have a total considered the VAT of each items", () => {
        const item1 = new Article(3, "RTX 5090",3000, "GPU", 1);
        const item2 = new Article(2, "Kafka sur le rivage", 1, "Book", 5);
        const item3 = new Article(3, "RTX 5090",3000, "GPU", 1);
        let cart = [item1, item2, item3];
        const total = calculateTotalPrice(cart);
        expect(total).toBe(7205.5);
    });

    test("with items having a category that's unknown or null, then I should get an error", () => {
        const item1 = new Article(3, "CORSAIR VENGEANCE CL30 32Go",100, "RAM", 1);
        const item2 = new Article(2, "Kafka sur le rivage", 1, "Book", 5);
        const item3 = new Article(3, "RTX 5090",3000, "GPU", 1);
        let cart = [item1, item2, item3];
        expect(() => calculateTotalPrice(cart)).toThrow("Unknown category for VAT");
    });

    test("with an item having a category but the percent is negative or equals to 0, then I should get an error", () => {
        const item1 = new Article(3, "RTX 5090",3000, "GPU", 1);
        const item2 = new Article(2, "Kafka sur le rivage", 1, "Book", 5);
        const item3 = new Article(3, "RX 7500F",150, "CPU", 1);
        let cart = [item1, item2, item3];
        expect(() => calculateTotalPrice(cart)).toThrow("VAT must be positive");
    });

});
