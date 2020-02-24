const WebTorrent = require('webtorrent')

const client = new WebTorrent()

const torrentId = 'magnet:?xt=urn:btih:44YQRS6WFD7OLTZAHLG7M2GFX5C5A6AQ&dn=ubuntu-18.04.4-live-server-amd64.iso&xl=912261120&tr=https%3A%2F%2Ftorrent.ubuntu.com%2Fannounce'

client.add(torrentId, { path: '/home/yadi/gd-dl' }, (torrent) => {
    torrent.on('done', function () {
        console.log('torrent download finished')
    })
})