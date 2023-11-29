const authControllers = {
    getlogin:(req, res) => res.send('Route for login view'),
    postlogin:(req, res) => res.send('Route for ....'),
    getregister:(req, res) => res.send('Route for register view'),
    postregister:(req, res) => res.send('Route for ....'),
    getlogout:(req, res) => res.send('Route for logout'),
}
module.exports = authControllers;