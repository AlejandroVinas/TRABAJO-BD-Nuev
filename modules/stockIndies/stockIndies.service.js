(function () {
    'use strict';
    
    module.exports = {
        createStockIndies: createStockIndies,
        fetchStockIndies: fetchStockIndies,
        fetchStockIndiesById: fetchStockIndiesById,
        updateStockIndies: updateStockIndies,
        deleteStockIndies: deleteStockIndies
    };

    var StockIndiesModel = require('./stockIndies.module')().StockIndiesModel;

    function createStockIndies(stockIndies) {
        return StockIndiesModel.create(stockIndies);
    }

    function fetchStockIndies() {
        return StockIndiesModel.find({})
            .populate('Desarrollador')
            .populate('Genero')
            .exec();
    }

    function fetchStockIndiesById(stockIndiesId) {
        return StockIndiesModel.findById(stockIndiesId)
            .populate('Desarrollador')
            .populate('Genero')
            .exec();
    }

    function updateStockIndies(stockIndiesId, stockIndies) {
        return StockIndiesModel
            .findByIdAndUpdate(stockIndiesId, stockIndies, {new: true})
            .exec();
    }

    function deleteStockIndies(stockIndiesId) {
        return StockIndiesModel
            .findByIdAndRemove(stockIndiesId)
            .exec();
    }
})();
