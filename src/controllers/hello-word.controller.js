function testPlaint(req, res) {
    res.send('Hello word');
}

function testJson(req, res) {
    res.json({message: 'Hello word'});
}

module.exports = {
    testPlaint,
    testJson
}