const mongoose = require('mongoose');

const schema = mongoose.Schema({
    createdAt: String,
    LaptopName: Number,
    LaptopImage: String,
    LaptopPrice: Number,
    LaptopCompany: String,
    LaptopRamSize: Number,
    LaptopSSDSize: Number,
    id: Number,
});

module.exports = mongoose.model("products",schema);