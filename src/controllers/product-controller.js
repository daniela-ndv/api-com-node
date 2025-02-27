const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => { 
    Product
        .find({ 
            active: true 
        }, 'title price slug')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        }); 
}

exports.getBySlug = (req, res, next) => { 
    Product
        .findOne({ 
            slug: req.params.slug,
            active: true 
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        }); 
}

exports.getById = (req, res, next) => { 
    Product
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        }); 
}

exports.getByTag = (req, res, next) => { 
    Product
        .find({ 
            tags: req.params.tag,
            active: true 
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        }); 
}

exports.post = (req, res, next) => {
    var product = new Product();
    product.title = req.body.title;
    product.slug = req.body.slug;
    product.description = req.body.description;
    product.price = req.body.price;
    product.active = req.body.active;
    product.tags = req.body.tags;

    product
        .save()
        .then(x => {
            res.status(201).send({ 
                message: 'Produto cadastrado com sucesso!' 
            });
        }).catch(e => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar o produto.', 
                data: e 
            });
        });   
}

exports.put = (req, res, next) => {
    Product
        .findByIdAndUpdate(req.params.id, { 
            $set: {
                title: req.body.title,
                slug: req.body.slug,
                description: req.body.description,
                price: req.body.price,
                active: req.body.active,
                tags: req.body.tags
            }
        }).then(x => {
            res.status(201).send({
                message: 'Produto atualizado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.delete = (req, res, next) => {
    Product
    .findByIdAndDelete(req.body.id)
    .then(x => {
        res.status(200).send({
            message: 'Produto deletado com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao deletar o produto.',
            data: e
        });
    });
}
