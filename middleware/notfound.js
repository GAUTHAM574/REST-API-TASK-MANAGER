const notFound = (req,res) => {
    res.status(404).send('Page Does not exists');
}

module.exports = notFound