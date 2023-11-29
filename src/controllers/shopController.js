const shopControllers = {
    shop:(req, res) => res.send('Route for Shop View'),
    getitem:(req, res) => res.send('Route for find and retrieve a product from an ID'),
    postitem:(req, res) => res.send('Route for add the current item to the shop cart'),
    getcart:(req, res) => res.send('Route for cart view'),
    postcart: (req, res) => res.send('Route for got to checkout page'),
}
module.exports = shopControllers;