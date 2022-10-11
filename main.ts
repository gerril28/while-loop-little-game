input.onPinPressed(TouchPin.P0, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(Points)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.pause()
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 100; index++) {
        for (let index = 0; index < 1; index++) {
            for (let index = 0; index < 4; index++) {
                basic.pause(100)
                Enemy.change(LedSpriteProperty.Y, 1)
                basic.pause(100)
            }
            if (Player.isTouching(Enemy)) {
                Enemy.delete()
                Points = Points + 1
                basic.showNumber(Points)
                basic.clearScreen()
            }
        }
        for (let index = 0; index < 1; index++) {
            Player = game.createSprite(2, 0)
            Enemy = game.createSprite(randint(0, 4), 1)
            if (Player.isTouching(Player)) {
                Enemy.delete()
                Points = Points + 1
                basic.showNumber(Points)
                basic.clearScreen()
            }
        }
    }
})
let Points = 0
let Enemy: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
Enemy = game.createSprite(randint(0, 4), 0)
Points = 0
