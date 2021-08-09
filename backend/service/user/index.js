const uuid = require("uuid").v4;
const email = require('..//email/index')();

module.exports = () => {
    let signup = (
        req,
        res
    ) => {
        return new Promise(async (resolve, reject) => {
            try {
                let payload = req.body.payload;
                let id = uuid()
                let firstName = payload.firstName
                let lastName = payload.lastName
                let mobile = payload.mobile
                let userName = payload.userName
                let password = payload.password
                let sql = "INSERT INTO `users` VALUES ('" + id + "','" + firstName + "','" + lastName + "','" + mobile + "','" + userName + "','" + password + "') "
                const results = await db.query(sql)
                console.log(results.length)
                //    if (results.length >= 0) {
                const sendemail = await email.sendEmail(results);
                resolve(sendemail);
                //    }

            } catch (error) {
                reject(error);
            }
        });
    }
    let login = (
        req,
        res
    ) => {
        return new Promise(async (resolve, reject) => {
            try {
                let pay = req.body.payload;
                console.log(pay);
                let userName = pay.userName
                let password = pay.password
                let sql = `SELECT password FROM users WHERE user_name= "${userName}"`
                //     let results = await db.query(sql,[])
                //     // let statement = await db.preparePromisified(query)
                // 	// let results = await db.statementExecPromisified(statement, [])
                //    console.log(results)
                let a = await global.db.query(sql, (err, rows) => {
                    if (err) throw err;
                    console.log(rows[0].password);
                    // rows.forEach( (row) => {
                    //     console.log(`${row.username} lives in ${row.password}`);
                    //   });
                    });
                resolve("Not logged in")

            } catch (error) {
                reject(error);
            }
        });
    }
    return {
        signup,
        login
    }

}
