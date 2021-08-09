const authservice = require("..//..//service/user/index")();
module.exports = {
    signup: async (req, res) => {
        try {
            console.log(req.body.payload);
            const result = await authservice.signup(req, res);
            res.type("application/json").status(200).send({
                status: "200",
                result: result
            });


        } catch (error) {
            console.log(error);
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            });
        }
    },
    login: async (req, res) => {
        try {
            
            const result = await authservice.login(req, res);
            res.type("application/json").status(200).send({
                status: "200",
                result: result
            });


        } catch (error) {
            console.log(error);
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            });
        }
    },

}



