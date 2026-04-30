let userCreate = (req, res) =>{

    let {userName, userPassword} = req.body;

    res.status(200).json({
        _status : 1,
        _massage : "Data Save",
        userName,
        userPassword
    })

}



module.exports = {userCreate};