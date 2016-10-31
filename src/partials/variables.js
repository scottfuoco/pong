// Initial Game Properties

// Ball
export const ballVariables = {
    radius: 5,
    kiRadius: 2,
    speed: 5,
    vx: 0,
    vy: 0,
    color: 'red'
}

export const paddleVariables = {
    distFromEdge: 20
}

export const player1Variables = {
    kiVX: 1,
    kiVY: 0
}

export const player2Variables = {
    kiVX: -1,
    kiVY: 0
}
export const scoreboardVariables = {
    color: 'white;'
}

export const gameVariables = {
    pointsToWin: 10
}

export const boardVariables = {
    backgrounds: [
        'assets/images/background-1.jpg',
        'assets/images/background-2.jpg',
    ]
}

export const characterVariables = {
    pongku: {
        kiColor: 'blue',
        ballSpeedMultiplier: 1,
        moveSpeedMultiplier: 1,
        kiAttacks: 3,
        skins: {
            normal: {
                hair: {
                    height: 7,
                    color: 'yellow',
                },

                face: {
                    height: 5,
                    color: 'LightSalmon'
                },

                body: {
                    height: 20,
                    color: 'DarkOrange',
                },

                pants: {
                    height: 20,
                    color: 'blue'
                },

                feet: {
                    height: 2,
                    color: 'black'
                }
            }
        }
    },


    pongolo: {
        kiColor: 'white',
        ballSpeedMultiplier: 1,
        moveSpeedMultiplier: 1,
        kiAttacks: 4,
        skins: {
            normal: {
                hair: {
                    height: 7,
                    color: 'white',
                },

                face: {
                    height: 5,
                    color: 'green'
                },

                body: {
                    height: 20,
                    color: 'white',
                },

                pants: {
                    height: 20,
                    color: 'purple'
                },

                feet: {
                    height: 2,
                    color: 'brown'
                }
            }
        }
    },

    majinPoong: {
        kiColor: 'darkPink',
        ballSpeedMultiplier: 1.1,
        moveSpeedMultiplier: 1,
        kiAttacks: 3,
        skins: {
            normal: {
                hair: {
                    height: 7,
                    color: 'pink',
                },

                face: {
                    height: 5,
                    color: 'pink'
                },

                body: {
                    height: 20,
                    color: 'pink',
                },

                pants: {
                    height: 20,
                    color: 'white'
                },

                feet: {
                    height: 2,
                    color: 'brown'
                }
            }
        }
    },

    pongza: {
        kiColor: 'red',
        ballSpeedMultiplier: 1,
        moveSpeedMultiplier: 1.1,
        kiAttacks: 3,
        skins: {
            normal: {
                hair: {
                    height: 7,
                    color: 'purple',
                },

                face: {
                    height: 5,
                    color: 'white'
                },

                body: {
                    height: 5,
                    color: 'purple',
                },

                pants: {
                    height: 20,
                    color: 'white'
                },

                feet: {
                    height: 2,
                    color: 'white'
                }
            }
        }
    }
}