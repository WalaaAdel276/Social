
const nodemailer = require("nodemailer");

const sendEmail = async (from,pFrom,to,subject,html)=>{

    try {

        let Transport = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            service: 'gmail',
            auth: {
                user:from,
                pass:pFrom,
            }
        });
        // send mail with defined transport object
        let info = await Transport.sendMail({
            from: `"👻" <${from}>`,// sender address
            to:`${to.join(",")}`, // list of receivers
            subject:`${subject}` , // Subject line
            text: "Hello world?", // plain text body
            html:`${html}`, // html body
        });
        console.log(info);
        return info;
    } catch (error) {
       return error

    }

}  
module.exports = sendEmail;