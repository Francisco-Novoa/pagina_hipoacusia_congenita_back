const config = require("./config")

const mailjet = require ('node-mailjet')
.connect(`${config.MAILJET0}`, `${config.MAILJET1}`)



function SendEmail (sender,subject,body){
  const request = mailjet
  .post("send", {'version': 'v3.1'}, )
  
  .request({
    "Messages":[
      {
        "From": {
          "Email": "fj.novoap@gmail.com",
          "Name": "Francisco"
        },
        "To": [
          {
            "Email": "fj.novoap@gmail.com",
            "Name": "Francisco"
          }
        ],
        "Subject": `messaje in the Portfolio Page from ${sender}`,
        "TextPart": `New Message at the portfolio`,
        "HTMLPart": `<div><h1>${sender}</h1><p>${subject}</p><p>${body}</p></div>`,
        "CustomID": "AppGettingStartedTest"
      }
    ]
  })
  request
    .then((result) => {
      console.log(result.body)
    })
    .catch((err) => {
      console.dir
      
      (err)
    })
}

module.exports=SendEmail