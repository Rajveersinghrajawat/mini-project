let userCreate = (req, res) => {

    let { userName, userPassword } = req.body;

    res.status(200).json({
        _status: 1,
        _massage: "Data Save",
        userName,
        userPassword
    })

}


let userView = (req, res) => {

    let Data = [
        {
            id: 1,
            title: "India Launches New AI Initiative",
            description: "The government announced a new AI program to boost innovation and startups.",
            slug: "india-launches-new-ai-initiative"
        },

        {
            id: 2,
            title: "Stock Market Hits Record High",
            description: "Sensex and Nifty reached all-time highs driven by IT and banking stocks.",
            slug: "stock-market-hits-record-high"
        }
    ]

    if (!Data) {
        return res.status(404).json({
            _status: 0,
            _massage: "Data not Fetch"
        })
    }

    res.status(200).json({
        _status: 1,
        _massage: "Data Fetch",
        _data: Data
    })
}



module.exports = { userCreate, userView };