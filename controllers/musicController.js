const Music = require('../models/Music');


exports.list = async (req, res) => {
    const musicList = await Music.find();
    res.render('index', { musicList });
};

exports.newForm = (req, res) => {
    res.render('new');
};

exports.getById = async (req, res) => {
    const music = await Music.findById(req.params.id);
    res.render('detail', { music });
};

exports.create = async (req, res) => {
    const newMusic = new Music(req.body);
    await newMusic.save();
    res.redirect('/');
};

exports.setHeader = (req, res) => {
    res.set({
        'Content-Type': 'text/plain',
        [req.query.header]: req.query.value
    })
    res.send('Headers set from query parameters');
};

exports.getHeader = (req, res) => {
    const headerValue = req.get(req.params.headerName) || 'HEADER NOT SET';
    res.send(`Custom Header Value: ${headerValue}`);
};

exports.setCookie = (req, res) => {
    res.cookie(req.query.cookie, req.query.val, { httpOnly: true, maxAge: 9000000 });
    res.send(req.query.cookie);
};

exports.getCookie = (req, res) => {
    const cookieName = req.params.cookie;

    if (!cookieName) {
        return res.status(400).send('Cookie name is undefined');
    }
    const cookieValue = req.cookies[cookieName];
    console

    if (cookieValue) {
        res.send(`Cookie Value: ${cookieValue}`);
    } else {
        res.send('Cookie not found');
    }
};