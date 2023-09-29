import fs from 'fs'
import { createProductSlug, generateRandomUserId } from '../helpers/productHelpers.js';



export const showAllProduct = (req, res) => {
    const allProduct = JSON.parse(fs.readFileSync('db/product.json').toString());

    res.send(allProduct)
}




export const deleteSingleProduct = (req, res) => {

    const {id} = req.params

    const oldProduct = JSON.parse(fs.readFileSync('db/product.json'));

    
    const isAxit = oldProduct.some((data) => data.id === id) 

    if( !isAxit){
        res.send('Product Id not match')
        return
    }


    const ubdateProduct = oldProduct.filter((data) => data.id !== id);  

   fs.writeFileSync('db/product.json', JSON.stringify(ubdateProduct));

   

   res.redirect('/')
   
}


export const singleProductview = (req, res) => {

    const {slug} = req.params

    const oldProduct = JSON.parse(fs.readFileSync('db/product.json'));

    const isAxit = oldProduct.some((data) => data.slug == slug) 

    if( !isAxit){
        res.send('Product slug not match')
        return
    }


    const singleproduct = oldProduct.find((data) => data.slug === slug);  

   

   res.send(singleproduct)
   
}





export const CreateProduct = (req, res) => {
   
    const {name , photo, regular_price, sell_price, stoct} = req.body;

    const product = req.body;
    const id = generateRandomUserId()
    const slug = createProductSlug(name);

    const oldProduct = JSON.parse(fs.readFileSync('db/product.json').toString());

    if(oldProduct.find((data) => data.name === name)){
        res.send('data ase');
        return
    }

    oldProduct.push({...product, id, slug, photo : req.file.filename  });

    fs.writeFileSync('db/product.json', JSON.stringify(oldProduct));

    res.redirect('/')
}




export const showHomePage = (req, res) => {

    const Products = JSON.parse(fs.readFileSync('db/product.json').toString());

    res.render('home', {
        Products
    })
}



export const createPage = (req, res) => {
   
    res.render('create')
}



export const singlepage = (req, res) => {
   
    const {slug} = req.params

    const Products = JSON.parse(fs.readFileSync('db/product.json').toString());

    const singleproduct = Products.find((data) => data.slug === slug);

    res.render('single', {
        singleproduct
    })
}


export const editpage = (req, res) => {
   
    const {slug} = req.params

    const Products = JSON.parse(fs.readFileSync('db/product.json').toString());

    const singleEdit = Products.find((data) => data.slug === slug);

    res.render('edit', {
        singleEdit
    })
   
}

export const ubdateproductdata = (req, res) => {
    
    const {name , regular_price, sell_price, stoct} = req.body
   
    const {id} = req.params

    const newData = req.body 

    const Products = JSON.parse(fs.readFileSync('db/product.json').toString());

    let photo_name =  Products[Products.findIndex((data) => data.id === id) ].photo

    if(req?.file?.filename){
        photo_name = req.file.filename
    }

   

    Products[Products.findIndex((data) => data.id === id) ] = {
        name,
        regular_price,
        sell_price, 
        stoct,
        slug : createProductSlug(name),
        id,
        photo : photo_name,
        ...newData,
       
    }
    
    fs.writeFileSync('db/product.json', JSON.stringify(Products) )

   res.redirect('/')
   
}
