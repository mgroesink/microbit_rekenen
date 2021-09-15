input.onButtonPressed(Button.A, function () {
    totaal = 0
    for (let waarde of list) {
        totaal += waarde
        basic.showString("Totaal: " + totaal)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let waarde of list) {
        if (waarde > hoogste) {
            hoogste = waarde
        }
    }
    basic.showString("Hoogste: " + hoogste)
})
let totaal = 0
let list: number[] = []
let hoogste = 0
hoogste = 0
let lijst: number[] = []
for (let index = 0; index < 10; index++) {
    list.push(randint(1, 100))
}
