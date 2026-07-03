const db = require("../config/db");

const register = (req, res) => {

    const { fullname, email, password, role } = req.body;

    const sql =
        "INSERT INTO users(fullname,email,password,role) VALUES(?,?,?,?)";

    db.query(
        sql,
        [fullname, email, password, role],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Registration Successful"
            }); 
        }
    );
};

const login = (req, res) => {

    const { email, password } = req.body;

    const sql =
        "SELECT * FROM users WHERE email=? AND password=?";

    db.query(
        sql,
        [email, password],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (result.length > 0) {

                res.json({
                    success: true,
                    role: result[0].role,
                    user: result[0]
                });

            } else {

                res.json({
                    success: false,
                    message: "Invalid Email or Password"
                });
            }
        }
    );
};

module.exports = {
    register,
    login
};