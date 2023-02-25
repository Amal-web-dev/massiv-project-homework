let guestList = ['refat', 'amal', 'jamshed']
let tab = prompt('write a name').toLowerCase().trim()

if ( tab > guestList.length -1 || tab < 0) {
    alert('we do not have this name')
} else {
    guestList.splice(guestList.indexOf(tab), 1)
}

console.log(guestList);