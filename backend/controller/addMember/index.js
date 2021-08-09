const authservice = require("..//..//service/addMember/index")();
module.exports = {
    addMember: async (req, res) => {
        try {
            console.log(req.body.payload);
            const result = await authservice.addMember(req, res);
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
    getMember: async (req, res) => {
        try {
            
            const result = await authservice.getMember(req, res);
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
    deleteMember: async (req, res) => {
        try {
            
            const result = await authservice.deleteMember(req, res);
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



