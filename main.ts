input.onButtonPressed(Button.A, function () {
    totaal = 0
    for (let waarde of list) {
        totaal += waarde
    }
    basic.showNumber(totaal)
})
let totaal = 0
let list: number[] = []
let lijst: number[] = []
for (let index = 0; index < 10; index++) {
    list.push(randint(1, 100))
}
