// Initial Game Properties

// Ball
export const ballVariables = {
    radius: 5,
    color: 'red'
}

export const paddleVariables = {
    distFromEdge: 35
}

export const scoreboardVariables = {
    color: 'white;'
}

export const gameVariables = {
    pointsToWin: 10
}

export const boardVariables = {
    backgrounds: [
        'assets/images/background-1.png',
        'assets/images/background-2.jpg',
        'assets/images/background-3.gif',
        'assets/images/background-4.png'
    ]
}

export const characterVariables = {
    pongku: {
        kiColor: 'blue',
        ballSpeedMultiplier: 1,
        moveSpeedMultiplier: 1,
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