const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    online: {
        type: Boolean,
        default: false
    },
    facebook: {
        type: Boolean,
        default: false
    },
    google: {
        type: Boolean,
        default: false
    },

});

UsuarioSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})



module.exports = model('Usuario', UsuarioSchema );