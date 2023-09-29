import multer from "multer";




const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'public/images/products')
    },
    filename : (req, file , cb) => {
        cb(null, file.originalname)
    }
})




export const productsPhotoMultere = multer({storage}).single('productPhoto');
