input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 100; index++) {
        for (let index = 0; index < 1; index++) {
            for (let index = 0; index < 4; index++) {
                Enemy.change(LedSpriteProperty.X, 1)
                basic.pause(100)
            }
            if (Player.isTouching(Player)) {
                Enemy.delete()
                Points += 1
            }
        }
        for (let index = 0; index < 1; index++) {
            Enemy = game.createSprite(randint(0, 4), 1)
            if (Player.isTouching(Player)) {
                Enemy.delete()
                Points += 1
            }
        }
    }
})
let Enemy: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 0)
Enemy = game.createSprite(randint(0, 4), 2)
let Points = 0
basic.forever(function () {
	
})
