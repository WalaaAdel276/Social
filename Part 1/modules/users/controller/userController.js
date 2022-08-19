
const User = require("../model/userModel");





const getAllUsers = async (req, res, next) => {
    const { id } = req.params;
    const { searchKey, less, more, lessThan } = req.query;

    const { email, password } = req.body;
    try {
        if (id) {
            const data = await User.findById(id)
            if (data) {
                res.json({ "message": "Success", data })
            } else {
                res.json({ message: "Invalid ID" })

            }

        } else if (searchKey) {
            const data = await User.find({ name: { $regex: "^" + searchKey } })
            if (data) {
                res.json({ "message": "Success", data })
            } else {
                res.json({ message: "User Not Found" })

            }

        }
        else if (less && more) {
            const data = await User.find({ age: { $gte: more, $lt: less } })
            if (data) {
                res.json({ "message": "between", data })
            } else {
                res.json({ message: "User Not Found" })

            }

        }
        else if (lessThan) {
            const data = await User.find({ age: { $lt: lessThan } })
            if (data) {
                res.json({ "message": "Success", data })
            } else {
                res.json({ message: "User Not Found" })

            }

        }
        else if (email && password) {
            const data = await User.findOne({ 'email': email, 'password': password })
            if (data) {
                res.json({ "message": "Success", data })
            } else {
                res.json({ message: "Invalid" })

            }

        }
        else {
            const data = await User.find({})
            res.json({ "message": "Success", data })
        }
    } catch (error) {
        res.json({ "message": "Error", error })
    }


}

const addUsers = async (req, res, next) => {
    const { name, email, password, age } = req.body;
    try {
        const newUser = new User({ name, email, password, age })
        const data = await newUser.save()
        res.json({ "message": " Added Successfully", data })
    } catch (error) {
        res.json({ "message": "Error", error })
    }
}

const updateUsers = async (req, res, next) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const data = await User.findByIdAndUpdate(id, { name, email })
        if (data) {
            res.json({ message: "Updated Successfully", data })
        } else {
            res.json({ message: "User Not Found" })
        }
    } catch (error) {
        res.json({ "message": "Error", error })
    }

}
const deleteUsers = async (req, res, next) => {
    const { id } = req.params;
    try {
        const data = await User.findByIdAndDelete(id)
        if (data) {
            res.json({ message: "Deleted Successfully", data })
        } else {
            res.json({ message: "User Not Found" })
        }
    } catch (error) {
        res.json({ "message": "Error", error })
    }

}

const softDeleteUser = async (req, res, next) => {
    const options = { validateBeforeSave: false };
    const { id } = req.params
    try {
        const data = await User.softDelete({ _id: id }, options);
       // await User.updateOne({ _id: id }, { $set: { deletedAt: new Date(), deleted: number } })
            console.log(data)
        if (data.deleted) {
            res.json({ "message": "User Deleted", data })

        } else {
            res.json({ "message": "User Not Found", data })

        }
    } catch (error) {
        res.json({ "message": "Error", error })
    }

}
const RestoreUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const data = await User.restore({ _id: id });
        await User.updateOne({ _id: id }, { $unset: { deleted: true } },{$set:{deletedAt: null}})

if (data.restored) {
    res.json({ "message": "Restored", data })

} else {
    res.json({ "message": "User Not Found", data })

}
    } catch (error) {
    res.json({ "message": "Error", error })
}

}
   const  resALL = async (req, res, next) => {
       try {
        const deletedElements = await User.findDeleted(); 
        if(deletedElements.length){
            res.json({ "message": "Restored", deletedElements })   
        }else{
            res.json({ "message": "NO Users" })
        }
       
       } catch (error) {
        res.json({ "message": "Error", error })   
       }

  
   }



module.exports = {
    getAllUsers,
    addUsers,
    updateUsers,
    deleteUsers,
    softDeleteUser,
    RestoreUser,
    resALL

}