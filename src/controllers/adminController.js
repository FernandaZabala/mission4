const adminControllers = {
    admin:(req, res) => res.send('Route for Admin View'),
    getcreate:(req, res) => res.send('Route for create view'),
    postcreate:(req, res) => res.send('Route for got to ... page'),
    getedit:(req, res) => res.send('Route for find and retrieve .... from an ID'),
    putedit:(req, res) => res.send('Route for .... from an ID'),
    admindelete:(req, res) => res.send('Route for delete .... from an ID'),

}
module.exports = adminControllers;