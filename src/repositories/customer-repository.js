const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async() => {
    const res = await Customer.find({}, 'name email roles')
    return res;
}

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}

exports.authenticate = async(data) => {
    var res = await Customer.findOne({
        email: data.email,
        password: data.password,
        roles: data.roles
    });
    return res;
}

exports.getById = async(id) => {
    var res = await Customer.findById(id);
    return res;
}