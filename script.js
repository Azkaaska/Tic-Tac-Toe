const kotak = document.querySelectorAll("td")
let isi = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]
let gilir = 1
function update(n) {
    kotak[n].onclick = null
    if (gilir == 1) {
        kotak[n].innerHTML = "X"
        isi[Math.floor(n/3)][n%3] = "X"
        gilir = 2
    } else {
        kotak[n].innerHTML = "O"
        isi[Math.floor(n/3)][n%3] = "O"
        gilir = 1
    }
    check()
}
function check() {
    for (let i = 0; i < 3; i++) { 
        if (isi[i].join("") == "XXX") { reset(1) }
        if (isi[i].join("") == "OOO") { reset(0) }
        if (isi[0][i] == isi[1][i] && isi[1][i] == isi[2][i]) {
            if (isi[0][i] == "X") { reset(1) }
            if (isi[0][i] == "O") { reset(0) }
        }
    }
    if (isi[0][0] == isi[1][1] && isi[1][1] == isi[2][2]) {
        if (isi[0][0] == "X") { reset(1) }
        if (isi[0][0] == "O") { reset(0) }
    }
    if (isi[0][2] == isi[1][1] && isi[1][1] == isi[2][0]) {
        if (isi[0][2] == "X") { reset(1) }
        if (isi[0][2] == "O") { reset(0) }
    }
    (() => {
        for (let i = 0; i < 9; i++) {
            if (isi[Math.floor(i/3)][i%3] == " ") { return }
        } reset(2)
    })()
}
function reset(n) {
    if (n == 2) { alert("Seri, Tidak Ada yang Menang") }
    else { alert("Player " + (Number(!n)+1) + " Menang") }
    isi = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]
    for (let i = 0; i < 9; i++) {
        kotak[i].innerHTML = " "
        kotak[i].onclick = function onclick(event) { update(i) }
    }
}