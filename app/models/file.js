var db = require("./mongoose")
var Schema = db.Schema

var filesSchema =new Schema({
    //原文件名称
    name:{ 
        type:String,
        required:true
    },
    // 分类 （自定义分类）
    fileType:{  
        type:String,
        required:true
    },
    // 文件类型 Mime-Type
    mimeType:{  
        type:String,
        required:true
    },
    // 0 ： 全部人可见 ； 
    // 1 ： 登入可见 ；
    // 2 ： 仅自己可见 ；
    limit:{ 
        type:Number,
        default:0
    },
    // 文件路径
    path:{ 
        type:String,
        required:true
    },
    // 创建时间
    createTime:{
        type:Number,
        required:true
    }, 
    //创建人
    creator :{ 
        type:String,
        required:true
    },
    //创建人（blog userId）
    creatorId:{
        type:String,
        required:true
    }
})
module.exports = db.model('file',filesSchema);