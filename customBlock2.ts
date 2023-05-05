//% weight=99 color=#078a1d icon="\uf045"

namespace Animation {
    //% block="animate all sprites of type [Enemy] on screen"
    export function balloonAnimation(): void {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)

        let list = [
            img`
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 . . . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . 9 9 9 9 9 d 9 9 9 . . . . 
    . . 9 9 9 9 9 9 1 d 9 9 . . . . 
    . . 9 9 9 9 9 9 9 1 d 9 9 . . . 
    . . 9 9 9 9 9 9 9 1 1 d 9 . . . 
    . . 9 9 9 9 9 9 9 9 1 d 9 . . . 
    . . 9 9 9 9 9 9 9 9 1 9 9 . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . . 8 9 9 9 9 . . . . . . 
    . . . . . . 8 9 9 . . . . . . . 
    . . . . . 8 9 9 9 9 . . . . . . 
    . . . . . 8 . 9 . 9 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
            img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 d 3 3 3 . . . . 
    . . 3 3 3 3 3 3 1 d 3 3 . . . . 
    . . 3 3 3 3 3 3 3 1 d 3 3 . . . 
    . . 3 3 3 3 3 3 3 1 1 d 3 . . . 
    . . 3 3 3 3 3 3 3 3 1 d 3 . . . 
    . . 3 3 3 3 3 3 3 3 1 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . b 3 3 3 3 . . . . . . 
    . . . . . . b 3 3 . . . . . . . 
    . . . . . b 3 3 3 3 . . . . . . 
    . . . . . b . 3 . 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
            img`
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 d 7 7 7 . . . . 
    . . 7 7 7 7 7 7 1 d 7 7 . . . . 
    . . 7 7 7 7 7 7 7 1 d 7 7 . . . 
    . . 7 7 7 7 7 7 7 1 1 d 7 . . . 
    . . 7 7 7 7 7 7 7 7 1 d 7 . . . 
    . . 7 7 7 7 7 7 7 7 1 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . . . 6 7 7 7 7 . . . . . . 
    . . . . . . 6 7 7 . . . . . . . 
    . . . . . 6 7 7 7 7 . . . . . . 
    . . . . . 6 . 7 . 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
            img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 d 5 5 5 . . . . 
    . . 5 5 5 5 5 5 1 d 5 5 . . . . 
    . . 5 5 5 5 5 5 5 1 d 5 5 . . . 
    . . 5 5 5 5 5 5 5 1 1 d 5 . . . 
    . . 5 5 5 5 5 5 5 5 1 d 5 . . . 
    . . 5 5 5 5 5 5 5 5 1 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . 4 5 5 5 5 . . . . . . 
    . . . . . . 4 5 5 . . . . . . . 
    . . . . . 4 5 5 5 5 . . . . . . 
    . . . . . 4 . 5 . 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
            img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 d 2 2 2 . . . . 
    . . 2 2 2 2 2 2 1 d 2 2 . . . . 
    . . 2 2 2 2 2 2 2 1 d 2 2 . . . 
    . . 2 2 2 2 2 2 2 1 1 d 2 . . . 
    . . 2 2 2 2 2 2 2 2 1 d 2 . . . 
    . . 2 2 2 2 2 2 2 2 1 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . e 2 2 2 2 . . . . . . 
    . . . . . . e 2 2 . . . . . . . 
    . . . . . e 2 2 2 2 . . . . . . 
    . . . . . e . 2 . 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
        ]




        let balloon = null
        for (let row = 0; row <= 4; row++) {
            for (let column = 0; column <= 9; column++) {
                balloon = sprites.create(list._pickRandom(), SpriteKind.Enemy)
                tiles.placeOnTile(balloon, tiles.getTileLocation(column, row))
                animation.runMovementAnimation(
                    balloon,
                    animation.animationPresets(animation.bobbing),
                    5000,
                    true
                )
            }
        }
    }
}