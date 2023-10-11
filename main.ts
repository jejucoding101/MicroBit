// 숫자모드
input.onButtonPressed(Button.A, function () {
    디스플레이_모드 = 0
})
// 점 모드
input.onButtonPressed(Button.B, function () {
    디스플레이_모드 = 1
})
function 점_주사의_출력 (number: number) {
    if (number == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (number == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
    } else if (number == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    } else if (number == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (number == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
}
let 디스플레이_모드 = 0
let 랜덤넘버 = randint(1, 6)
디스플레이_모드 = 1
점_주사의_출력(랜덤넘버)
