game.splash("Qué escoges?", "1 o 2")
if (game.ask(controller.A.isPressed())) {
    game.splash("ganaste")
} else if (game.ask(controller.B.isPressed())) {
    game.splash("perdiste")
}
