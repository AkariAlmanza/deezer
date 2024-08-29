// Variables Globales
const bntSearch = document. getElementById
cont inputSearch = document.getElementById ('Search')
let playlist = null

bntSearch.addEventListener('click', () => {
    const artist = inputSearch.value 
    if (artist.trim().length > 0) {
        searchArtist(artist)
    }
})

document.addEventListener('DOMContentLoaded', () => {
    loadPlayist()

})

const loadPlayist = async () => {

}

try {
    const response = 
}