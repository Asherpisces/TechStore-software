require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const User = require('./models/user.model');
const Product = require('./models/product.model')
const Session = require('./models/session.model')
const userRouter = require('./routers/user.router');
const productRouter = require('./routers/product.router');
const cartRouter = require('./routers/cart.router');

<<<<<<< HEAD
mongoose.connect('mongodb://127.0.0.1:27017/test');

var Scheme = mongoose.Schema;

var userData = new Scheme({
	title: String,
	content: String,
	author: String,
});

var UserData = mongoose.model('UserData', userData, 'user');

async function run() {
	const user = await User.create({ name: 'hiep', pass: 'dasddq'});
	console.log(user);
}
run()
=======
// const authRouter = require('./routers/auth.router');
const multer = require('multer');
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
>>>>>>> nguyen_thai_hiep


<<<<<<< HEAD
user.save().then(() => {
	console.log(user);
})
=======
>>>>>>> nguyen_thai_hiep

mongoose.connect('mongodb://127.0.0.1:27017/test');

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/cart', cartRouter);


// để sử dụng statis css file
app.use(express.static('public'));

app.get('/', async (req, res) => {
	if (!req.cookies.userId) {
		res.render('home.pug');
	}
	else {
		const this_user = {
			username: req.cookies.userId
		}
		db_user = await User.findOne(this_user)
		
		res.render('home.pug', {
			user: db_user
		})
	}
});

app.get('/deleteCookie', (req, res) => {
	res.clearCookie('userId');
	res.redirect('/');
})

// lưu trạng thái người dùng


app.listen(PORT, () => {
	// khởi chạy server.
	console.log(`Server running on ${PORT}`);
})



