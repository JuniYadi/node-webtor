const WebTorrent = require('webtorrent')

const client = new WebTorrent()

const torrentId = process.env.FILE_TOR
const path = process.env.PATH_TOR

client.add(torrentId, { path: path }, (torrent) => {
    torrent.on('done', function () {
        console.log('torrent download finished')
    })
})