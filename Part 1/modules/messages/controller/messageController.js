const Massage = require("../model/messageModel")


const getAllMessages = async (req, res, next) => {
    const { id } = req.params
    try {
        if (id) {
            const data = await Massage.findOne({"sendTo": id }).populate("sendTo", "name").populate("sendBy", "name")
            if (data) {
                res.json({ "message": "Success", data })
            } else {
                res.json({ message: "No Message" })

            }
        } else {
            const data = await Massage.find({})

            res.json({ "message": "Success", data })
        }

        res.json({ "message": "Success", data })
    } catch (error) {
        res.json({ "message": "Error", error })
    }

}


const addMessage = async (req, res, next) => {
    const { message, sendTo, sendBy } = req.body;
    try {
        const newMassage = new Massage({ message, sendTo, sendBy })
        const data = await newMassage.save()
        res.json({ "message": " Added Successfully", data })
    } catch (error) {
        res.json({ "message": "Error", error })
    }
}

module.exports = {
    getAllMessages,
    addMessage

}