const mongoose = require('../config/db')
const bcrypt = require('bcrypt')

const opts = { toJSON: { virtuals: true } }

const UserSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    hash: String,
    salt: String,
    email: {
        type: String,
        required: true,
        minlength: 7,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 11,
        unique: true
    },
    currentRank: {
        type: String,
        required: true,
        enum: [
            'Newbie',
            'Animal Lover', 
            'Finder of the Losts', 
            'Animal Detective',
        ]
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'developer', 'animalControl', 'dbModerator'],
        required: true
    },
    adress: {
        type: String,
        required: false,
        trim: true,
        minlength: 1,
        maxlength: 2,
    },
    numberOfFindings: {
        type: Number, 
        required: true,
    },
    profilePhoto: {
        data: Buffer,
        contentType: String
    },
    details: 
        {
        age: {
            type: Number,
            trim: true
        },
        pronons: {
            type: String,
            enum: ['he/him', 'she/her', 'others']
        },
        nationality: {
            type: String,
            trim: true
        }
},
    reports: [{type: mongoose.Schema.Types.ObjectId, ref: 'Report'}]
}, {
    timestamps: true,
})

UserSchema.virtual('fullName').
  get(function() { return `${this.firstName} ${this.lastName}`; }).
  set(function(v) {
    const firstName = v.substring(0, v.indexOf(' '));
    const lastName = v.substring(v.indexOf(' ') + 1);
    this.set({ firstName, lastName });
  })

UserSchema.pre('save', function(next){
    if(!this.isModified('password')) return next()
    bcrypt.genSalt(10, (err, salt) => {
        if(err) return next(err)
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) return next(err)
            user.password = hash
            next()
        })
    })
})

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      cb(err, isMatch);
    });
};

module.export = User = mongoose.model('User', UserSchema)