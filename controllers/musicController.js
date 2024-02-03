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
