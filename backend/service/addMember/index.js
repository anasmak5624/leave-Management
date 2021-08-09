// use leave_management;
// CREATE TABLE `employee` (
//   `id` varchar(340) NOT NULL,
//   `first_name` text NOT NULL,
//   `last_name` text NOT NULL,
//   `mob_no` varchar(10) NOT NULL,
//   `DOB` date NOT NULL,
//   `Salary` varchar(15) NOT NULL,
//   `Designation` varchar(15) NOT NULL,
//   PRIMARY KEY (`id`)
// ) ;

const uuid = require("uuid").v4;
module.exports = () => {
    let addMember = (
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
                let DOB = payload.dob
                let Salary = payload.salary
                let Designation= payload.designation
                let sql = "INSERT INTO `employee` VALUES ('" + id + "','" + firstName + "','" + lastName + "','" + mobile + "','" + DOB + "','" + Salary + "','" + Designation + "') "
                let a = await global.db.query(sql, (err, rows) => {
                    if (err) throw err;
                    console.log(rows);
                    resolve('add Member successful');
                });
                
                
               

            } catch (error) {
                reject(error);
            }
        });
    }
    let deleteMember = (
        req,
        res
    ) => {
        return new Promise(async (resolve, reject) => {
            try {
                let payload = req.body.payload;
                let id =payload.id
               // let sql = "SELECT * FROM `employee` WHERE '" + id + "'"
                // let a = await global.db.query(sql, (err, rows) => {
                //     if (err) throw err;
                //     console.log(rows);
                //     resolve(' Member Deleted successfully');
                // });
                let sql = "DELETE FROM `employee` WHERE id = '" + id + "'"
                let a = await global.db.query(sql, (err, rows) => {
                    if (err) throw err;
                    console.log(rows);
                    resolve(' Member Deleted successfully');
                });

            } catch (error) {
                reject(error);
            }
        });
    }
    let getMember = (
        req,
        res
    ) => {
        return new Promise(async (resolve, reject) => {
            try {
                
                let sql = "SELECT * FROM `employee`"
                 let a = await global.db.query(sql, (err, rows) => {
                     if (err) throw err;
                     console.log(rows);
                     resolve(rows);
                 });

            } catch (error) {
                reject(error);
            }
        });
    }
    return {
        addMember,
        getMember,
        deleteMember
    }

}
