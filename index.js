/**
 * @type LilithConfig
 */
module.exports = {
    general: {
        apiKey: '',
        bypass: {
            enabled: false,
            lunar: {
                disabled: false,
                cheats: false,
                hitreg: false
            },
            badlion: false,
            forge: true
        },
        quicklobby: {
            enabled: false,
            duels: true,
            bedwars: false,
            skywars: false
        },
        proxy: {
            remoteIp: 'mc.hypixel.net',
            remotePort: 25565,
            localIp: '127.0.0.1',
            localPort: 25565,
            localMotd: `Lilith 1.0 Alpha`,
            logChatMessages: false
        },
        ranks: {
            enabled: true,
            generalChat: true,
            directMessages: true,
            statChecking: false,
            partyChat: true,
            guildChat: true,
            friendJoin: true,
            guildJoin: true,
            friendsList: true,
            partyList: true,
            guildList: true,
            lobbyJoin: true,
            lobbyTablist: true,
            lobbyLeaderboards: true,
            gameEnd: true
        }
    },
    autogg: {
        enabled: false,
        first: {
            enabled: false,
            message: `gg`,
            delay: 1000
        },
        second: {
            enabled: false,
            message: `gf <3`,
            delay: 2000
        },
        requeue: {
            enabled: false,
            delay: 3000
        }
    },
    lunar: {
        spoof: false
    },
    queuestats: {
        gamemodes: {
            duels: {
                enabled: true,
                overall: false,
                modesOverall: true,
                showOwnStats: false,
                showPartyStats: false,
                deobfuscation: {
                    chat: true,
                    nametags: true,
                    ranks: true
                }
            },
            bedwars: {
                enabled: false,
                overall: true,
                showOwnStats: false,
                showPartyStats: false,
                autoWho: false,
                spaceBeforeStar: false,
                showStatsIngame: false
            },
            skywars: {
                enabled: false,
                overall: true,
                autoWho: false,
                spaceBeforeStar: false,
                showStatsIngame: false
            },
            wool: {
                enabled: false,
                chatEnabled: false,
                showOwnStats: false,
                showPartyStats: false,
                spaceBeforeStar: false,
                autoWho: false,
                showStatsIngame: true
            }
        }
    },
    autododge: {
        duels: {
            enabled: false,
            requeue: false,
            noStats: false,
            warpParty: true,
            level: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'level == 10'
            },
            wins: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'wins == 10'
            },
            losses: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'losses == 10'
            },
            wlr: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'wlr == 10'
            },
            kdr: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'kdr == 10'
            },
            melee: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'melee == 10'
            },
            ranged: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'ranged == 10'
            },
            ws: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'ws == 10'
            },
            bws: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'bws == 10'
            },
            maps: [],
            mapsNew: {
                whitelist: {
                    enabled: false,
                    maps: ""
                },
                blacklist: {
                    enabled: false,
                    maps: ""
                }
            },
            players: {
                whitelist: {
                    enabled: false,
                    players: ""
                },
                blacklist: {
                    enabled: false,
                    players: ""
                }
            }
        },
        bedwars: {
            enabled: false,
            requeue: false,
            noStats: false,
            level: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'level == 10'
            },
            star: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'star == 10'
            },
            wins: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'wins == 10'
            },
            losses: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'losses == 10'
            },
            wlr: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'wlr == 10'
            },
            fkdr: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'kdr == 10'
            },
            ws: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'ws == 10'
            },
            bws: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'bws == 10'
            },
            maps: [],
            mapsNew: {
                whitelist: {
                    enabled: false,
                    maps: []
                },
                blacklist: {
                    enabled: false,
                    maps: []
                }
            },
            players: {
                whitelist: {
                    enabled: false,
                    players: []
                },
                blacklist: {
                    enabled: false,
                    players: []
                }
            }
        },
        skywars: {
            enabled: false,
            requeue: false,
            noStats: false,
            warpParty: true,
            level: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'level == 10'
            },
            star: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'star == 10'
            },
            wins: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'wins == 10'
            },
            losses: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'losses == 10'
            },
            wlr: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'wlr == 10'
            },
            kdr: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'kdr == 10'
            },
            melee: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'melee == 10'
            },
            ranged: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'ranged == 10'
            },
            ws: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'ws == 10'
            },
            bws: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'bws == 10'
            },
            maps: [],
            mapsNew: {
                whitelist: {
                    enabled: false,
                    maps: []
                },
                blacklist: {
                    enabled: false,
                    maps: []
                }
            },
            players: {
                whitelist: {
                    enabled: false,
                    players: []
                },
                blacklist: {
                    enabled: false,
                    players: []
                }
            }
        },
        wool: {
            enabled: false,
            requeue: false,
            noStats: false,
            level: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'level == 10'
            },
            star: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'star == 10'
            },
            wins: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'wins == 10'
            },
            losses: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'losses == 10'
            },
            wlr: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'wlr == 10'
            },
            kdr: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'kdr == 10'
            },
            games: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'games == 10'
            },
            assists: {
                enabled: false, lowestEnabled: false, lowest: 0, highestEnabled: false, highest: 0, conditionEnabled: false, condition: 'assists == 10'
            },
            mapsNew: {
                whitelist: {
                    enabled: false,
                    maps: []
                },
                blacklist: {
                    enabled: false,
                    maps: []
                }
            },
            players: {
                whitelist: {
                    enabled: false,
                    players: []
                },
                blacklist: {
                    enabled: false,
                    players: []
                }
            }
        },
    },
    profiles: {}
}
