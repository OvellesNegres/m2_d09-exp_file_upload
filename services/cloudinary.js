const cloudinary = require("cloudinary")

const { CloudinaryStorage } = require("multer-storage-cloudinary") 

cloudinary.config({
    cloud_name: "",
    api_key: "",
    api_secret: ""
})

const cloudStore = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "ovellesnegres",
        allowed_formats: ["png", "jpg", "svg", "tiff", "bmp", "jpeg", "gif", "pdf"]
    }
})

module.exports = cloudStore