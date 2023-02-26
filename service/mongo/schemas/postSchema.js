const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    headline: String,
    byline: String,
    trigger_warnings: String,
    content_src: String,
    content_html: String,
    publication_date: Date,
    url_path: {
        type: String,
        default: function () {
            return this.headline
                .toLowerCase()
                .replaceAll(' ', '-')
                .replaceAll(/[^\w\-]/g, '')
        }
    },
}, {
    query: {
        public() {
            return this.where({ publication_date: { $lte: Date.now() } })
        }
    },
})

module.exports = PostSchema