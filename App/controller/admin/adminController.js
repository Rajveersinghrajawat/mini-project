let userCreate = (req, res) =>{

    let {userName, userPassword} = req.body;

    res.status(200).json({
        _status : 1,
        _massage : "Data Save",
        userName,
        userPassword
    })

}


let userView = (req, res) =>{
    res.status(200).json({
        _status : 1,
        _massage:"Data view",
    })
}



module.exports = {userCreate, userView};