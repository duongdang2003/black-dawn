namespace SpriteKind {
    export const Change_scene = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const Gun = SpriteKind.create()
    export const Teammate = SpriteKind.create()
    export const Documentation = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction_button) {
        direction = "up"
        Helix.setImage(assets.image`myImage3`)
        DE.setImage(assets.image`Laser DE 4`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Teammate, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (Helix.overlapsWith(Joseph)) {
            story.spriteSayText(Helix, "Hi bro")
            story.spriteSayText(Joseph, "Hi")
            story.spriteSayText(Helix, "Are you Joseph of the defensive team?")
            story.spriteSayText(Joseph, "Oh right. Why you know?")
            story.spriteSayText(Helix, "I see your image in the list of members of the defensive force before I come here")
            story.spriteSayText(Joseph, "Wow bro you have a good memory")
            story.spriteSayText(Helix, "Thanks :)")
            story.spriteSayText(Helix, "Hey, why do people call this place the Black Dawn?")
            game.showLongText("Well as you know radioactivity transforms all living things that drink the water here including plants. The radioactive plants became abnormally large. The leaves of the plant become black and thinner. The canopy covers most of the forest, allowing only a little light to pass through. And when you look at the sunrise in the forest you just see a bright circle with a black color inside that's why it's called the Black Dawn.", DialogLayout.Bottom)
        }
    }
})
function chords_G (time_loop: number, vollume: number, time_ring: number, time_rest: number) {
    for (let index = 0; index < time_loop; index++) {
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(392, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(587, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(784, time_ring)
        })
        music.setVolume(vollume)
        music.playTone(196, time_ring)
        music.rest(time_rest)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (progress == "introduction") {
        blockMenu.setColors(15, 9)
        blockMenu.showMenu(["Play", "How to play", "About us"], MenuStyle.List, MenuLocation.BottomHalf)
    }
})
function fire_gun_sound (can_fire: boolean) {
    timer.background(function () {
        music.setVolume(22)
        music.playTone(370, music.beat(BeatFraction.Quarter))
    })
    timer.background(function () {
        music.setVolume(22)
        music.playTone(440, music.beat(BeatFraction.Quarter))
    })
    timer.background(function () {
        timer.background(function () {
            music.setVolume(22)
            music.playTone(330, music.beat(BeatFraction.Quarter))
        })
        timer.background(function () {
            music.setVolume(22)
            music.playTone(440, music.beat(BeatFraction.Quarter))
        })
        timer.background(function () {
            music.setVolume(22)
            music.playTone(554, music.beat(BeatFraction.Quarter))
        })
        music.setVolume(22)
        music.playTone(220, music.beat(BeatFraction.Quarter))
    })
    music.setVolume(100)
    music.pewPew.playUntilDone()
}
function create_Boss () {
    Boss = sprites.create(assets.image`Snake`, SpriteKind.Boss)
    Boss.setPosition(1275, 60)
    isRunning = true
    Boss_Health = statusbars.create(20, 4, StatusBarKind.Health)
    Boss_Health.attachToSprite(Boss)
    isBossCreated = true
    Boss_Bullet_x = [
    0,
    50,
    50,
    50,
    0,
    -50,
    -50,
    -50
    ]
    Boss_Bullet_Y = [
    -50,
    -50,
    0,
    50,
    50,
    50,
    0,
    -50
    ]
}
function chords_A (time_loop: number, vollume: number, time_ring: number, time_rest: number) {
    for (let index = 0; index < time_loop; index++) {
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(440, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(554, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(659, time_ring)
        })
        music.setVolume(vollume)
        music.playTone(220, time_ring)
        music.rest(time_rest)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    blockMenu.setControlsEnabled(false)
    if (progress == "site 1") {
        shoot(direction)
    }
})
function chords_C2 (time_loop: number, vollume: number, time_ring: number, time_rest: number) {
    for (let index = 0; index < time_loop; index++) {
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(415, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(554, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(698, time_ring)
        })
        music.setVolume(vollume)
        music.playTone(277, time_ring)
        music.rest(time_rest)
    }
}
function pick_up_sound (can_pick_up: boolean) {
    if (can_pick_up) {
        timer.background(function () {
            music.playTone(880, music.beat(BeatFraction.Eighth))
            music.playTone(784, music.beat(BeatFraction.Sixteenth))
            music.playTone(698, music.beat(BeatFraction.Sixteenth))
            music.playTone(440, music.beat(BeatFraction.Eighth))
            music.playTone(494, music.beat(BeatFraction.Eighth))
            music.playTone(523, music.beat(BeatFraction.Half))
        })
        timer.background(function () {
            timer.after(120, function () {
                music.baDing.stop()
            })
        })
        music.baDing.play()
    }
}
function welcome_blackdawn () {
    banner2 = sprites.create(assets.image`welcome_darkdawn`, SpriteKind.Player)
    animation.runImageAnimation(
    banner2,
    assets.animation`Animation banner 2`,
    500,
    true
    )
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction_button) {
        direction = "left"
        Helix.setImage(assets.image`myImage1`)
        DE.setImage(assets.image`Laser DE 2`)
    }
})
function horror_music (can_run_music_horror: boolean, time_loop: number, vollume: number) {
    if (can_run_music_horror) {
        for (let index = 0; index < time_loop; index++) {
            timer.background(function () {
                chords_F2(7, vollume / 15, 2000, 0)
            })
            for (let index = 0; index < 2; index++) {
                for (let index = 0; index < 4; index++) {
                    music.setVolume(vollume)
                    music.playTone(370, music.beat(BeatFraction.Half))
                    music.playTone(440, music.beat(BeatFraction.Half))
                }
                for (let index = 0; index < 4; index++) {
                    music.setVolume(vollume)
                    music.playTone(370, music.beat(BeatFraction.Half))
                    music.playTone(415, music.beat(BeatFraction.Half))
                }
            }
            for (let index = 0; index < 4; index++) {
                music.setVolume(vollume)
                music.playTone(370, music.beat(BeatFraction.Half))
                music.playTone(523, music.beat(BeatFraction.Half))
            }
            for (let index = 0; index < 4; index++) {
                music.setVolume(vollume)
                music.playTone(370, music.beat(BeatFraction.Half))
                music.playTone(415, music.beat(BeatFraction.Half))
            }
            for (let index = 0; index < 4; index++) {
                music.setVolume(vollume)
                music.playTone(370, music.beat(BeatFraction.Half))
                music.playTone(554, music.beat(BeatFraction.Half))
            }
            for (let index = 0; index < 4; index++) {
                music.setVolume(vollume)
                music.playTone(370, music.beat(BeatFraction.Half))
                music.playTone(415, music.beat(BeatFraction.Half))
            }
            timer.background(function () {
                timer.background(function () {
                    music.setVolume(vollume / 2)
                    music.playTone(880, music.beat(BeatFraction.Double))
                    music.rest(music.beat(BeatFraction.Double))
                    music.setVolume(vollume / 2)
                    music.playTone(740, music.beat(BeatFraction.Double))
                    music.setVolume(vollume / 2)
                    music.playTone(554, music.beat(BeatFraction.Double))
                    music.setVolume(vollume / 2)
                    music.playTone(523, music.beat(BeatFraction.Breve))
                    music.rest(music.beat(BeatFraction.Breve))
                })
                chords_A(1, vollume / 5, 2000, 0)
                chords_F2(1, vollume / 5, 1000, 0)
                chords_C2(1, vollume / 5, 1000, 0)
                chords_C(2, vollume / 5, 2000, 0)
            })
            for (let index = 0; index < 8; index++) {
                music.setVolume(vollume / 2)
                music.playTone(370, music.beat(BeatFraction.Half))
                music.playTone(440, music.beat(BeatFraction.Half))
            }
            for (let index = 0; index < 8; index++) {
                music.setVolume(vollume / 2)
                music.playTone(370, music.beat(BeatFraction.Half))
                music.playTone(415, music.beat(BeatFraction.Half))
            }
        }
    }
}
function fade_out (time: number) {
    color.startFade(color.Black, color.originalPalette, time)
    color.pauseUntilFadeDone()
}
function fight_boss_music (can_run_fight_boss_music: boolean, time_loop: number, vollume: number, time_beat: number) {
    while (can_run_fight_boss_music) {
        for (let index = 0; index < time_loop; index++) {
            timer.background(function () {
                chords_C(1, vollume / 5, 2000, 50)
                chords_G(1, vollume / 5, 2000, 50)
                chords_C(1, vollume / 5, 2000, 50)
            })
            for (let index = 0; index < 4; index++) {
                music.setVolume(vollume)
                music.playMelody("G F E D C C D E ", time_beat)
            }
            music.setVolume(vollume)
            music.playMelody("C5 B G - B A G B ", time_beat)
            music.setVolume(vollume)
            music.playMelody("A G A - B - A B ", time_beat)
            music.setVolume(vollume)
            music.playMelody("C5 B G - B A G B ", time_beat)
            music.setVolume(vollume)
            music.playMelody("D E F G B G E F ", time_beat)
        }
    }
}
function chords_B (time_loop: number, vollume: number, time_ring: number, time_rest: number) {
    for (let index = 0; index < time_loop; index++) {
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(494, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(622, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(831, time_ring)
        })
        music.setVolume(vollume)
        music.playTone(247, time_ring)
        music.rest(time_rest)
    }
}
function save_site (site: string) {
    blockSettings.writeString("part", site)
    timer.after(4000, function () {
        timer.background(function () {
            Notification.waitForNotificationFinish()
            Notification.notify("Your progress have been save!", 1, assets.image`floppy_disc`)
        })
    })
}
function fade_in (time: number) {
    color.startFade(color.originalPalette, color.Black, time)
    color.pauseUntilFadeDone()
}
function Site_1 () {
    introduction_story_site_1()
    main_site_1()
}
function chords_F (time_loop: number, vollume: number, time_ring: number, time_rest: number) {
    for (let index = 0; index < time_loop; index++) {
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(440, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(523, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(698, time_ring)
        })
        music.setVolume(vollume)
        music.playTone(175, time_ring)
        music.rest(time_rest)
    }
}
function chords_E (time_loop: number, vollume: number, time_ring: number, time_rest: number) {
    for (let index = 0; index < time_loop; index++) {
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(392, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(494, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(659, time_ring)
        })
        music.setVolume(vollume)
        music.playTone(165, time_ring)
        music.rest(time_rest)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction_button) {
        direction = "right"
        Helix.setImage(assets.image`myImage2`)
        DE.setImage(assets.image`Laser DE 1`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    if (site1_stage1) {
        stage_1_site_1()
        site1_stage1 = false
    }
})
function shoot (direction: string) {
    if (canShoot) {
        fire_gun_sound(true)
        if (direction == "left") {
            Bullet = sprites.createProjectileFromSprite(assets.image`Laser bullet 2`, Helix, -100, 0)
        } else if (direction == "right") {
            Bullet = sprites.createProjectileFromSprite(assets.image`Laser bullet 1`, Helix, 100, 0)
        } else if (direction == "up") {
            Bullet = sprites.createProjectileFromSprite(assets.image`Laser bullet 4`, Helix, 0, -100)
        } else if (direction == "down") {
            Bullet = sprites.createProjectileFromSprite(assets.image`Laser bullet 3`, Helix, 0, 100)
        }
        Bullet.startEffect(effects.coolRadial)
        armor_number += 1
        canShoot = false
        if (armor_number < 7) {
            timer.after(300, function () {
                canShoot = true
            })
        } else {
            armor_number = 0
            story.spriteSayText(Helix, "Reloading")
            timer.after(1500, function () {
                canShoot = true
                story.spriteSayText(Helix, "Done")
            })
        }
    }
}
function main_site_1 () {
    Helix_infor()
    Joseph = sprites.create(assets.image`Joseph`, SpriteKind.Teammate)
    Joseph.setPosition(540, 30)
}
function change_size (size: number, kind: any[]) {
    Deager_gun = sprites.create(kind[0], SpriteKind.Gun)
    temp_gun = kind
    characterAnimations.loopFrames(
    Deager_gun,
    scale_animation_by(size),
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
}
function Introduction_story () {
    scene.setBackgroundImage(assets.image`Map`)
    fade_out(1500)
    timer.background(function () {
        horror_music(true, 12, 100)
    })
    game.showLongText("In Hallock, the region of Faris has the biggest event that shakes the world ever.", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`myImage6`)
    game.showLongText("In 2030, a radioactive plant local near the western edge of the country was thrown 2 barrels of radioactive waste into the nearby lake. After two years one of the two barrels was punctured and released radioactive material. It makes water heavily polluted which transforms most of the animals drink them. Almost all of them had become bigger, more brutal, and attacked all humans in their sight.", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`mosquito`)
    game.showLongText("But that's not the worst, radioactive was affecting the Aedes mosquito and transforming the Dengue virus inside them. Scientists call it the Super Dengue (SD) which can kill a man in only 6 hours and control their body attack things that emit heat. With a few experiments, scientists discovered that the disease was transmitted through the respiratory tract. The infected person will die of dengue fever and become undead right after. This undead will \"really dead\" after three weeks because of the decomposition of the brain where the SD virus locates.", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`myImage0`)
    game.showLongText("To prevent the epidemic from spreading, the government of Faris decided to establish the special forces against the undead (SFAU) with the participation of many elite soldiers from all over Faris.", DialogLayout.Bottom)
    fade_in(1000)
    scene.setBackgroundImage(img`
        eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
        222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
        222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
        222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
        e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
        eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
        2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
        2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
        2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
        eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
        eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
        eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
        eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
        eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
        eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
        eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
        eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
        eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
        eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
        eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
        eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
        eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
        eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
        eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
        eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
        eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
        eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
        eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
        eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
        ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
        ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
        eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
        eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
        eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
        eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
        eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
        eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
        eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
        ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
        ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
        e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
        e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
        eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
        eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
        ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
        ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
        e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
        e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
        22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
        22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
        222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
        2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
        2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
        222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
        222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
        222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
        22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
        22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
        22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
        2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
        2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
        2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
        2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
        ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
        ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
        eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
        eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
        2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
        222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
        22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
        222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
        eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
        222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
        222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
        222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
        222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
        222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
        222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
        222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
        222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
        222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
        222e222ee222efffffffbffffffffbbbfffffbbeeeeebeeeeeeee222eebeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeebeeeeebbfffffbbbffffffffbfffffe222ee222e222
        222e222ee222ebbfffbbbbbfffffbbbbbbbbbbbbbbbbbbeebbbbeeeeedddeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeebbbbeebbbbbbbbbbbbbbbbbbfffffbbbbbfffe222ee222e222
        222ee22ee222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222ee22ee222
        222ee22ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee22ee222
        2222e222e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e222e2222
        2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
        2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
        2222e222ee2222eebbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbee2222ee222e2222
        2222e2222e22e22ebbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbe22e22e2222e2222
        222222222e22e22eebbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbee22e22e222222222
        222222222e22e222ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe222e22e222222222
        2222222222e22e22eebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbee22e22e2222222222
        222222e222e22e222ebbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbe222e22e222e222222
        222222e222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e222222e222222
        222222e2222222e222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe222e2222222e222222
        222222ee222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e222222ee222222
        2222222e222222e2222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe2222e222222e2222222
        22222e2e2222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e2222222e2e22222
        22222e2e2222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e2222222e2e22222
        22222e2e22222222e22ebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbe22e22222222e2e22222
        22222e2ee2222222e22ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe22e2222222ee2e22222
        22222e2ee2222222eeeebbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbeeee2222222ee2e22222
        22222e22e2222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbeee2222222e22e22222
        22222ee2e2222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222222e2ee22222
        22222ee2e222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222222e2ee22222
        222222e2ee22222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222ee2e222222
        222222e22e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e22e222222
        222222e22e22eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee22e22e222222
        222222e2eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee2e222222
        222222e2ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2e222222
        222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee222222
        `)
    fade_out(1000)
    Helix = sprites.create(assets.image`Temp Helix`, SpriteKind.Player)
    Commander = sprites.create(assets.image`Commander`, SpriteKind.NPC)
    Commander.setPosition(60, 60)
    timer.after(500, function () {
        game.showLongText("Now the report is over. Hi Helix, welcome to SFAU. I am your commander and I will introduce your mission. In SFAU, there are two types of forces: vanguard force and defensive force. You are in the vanguard force. Your mission is to eliminate all undead and infected animals in the specified area for the defensive force to be stationed. You will be given a communication device and I will contact you all over the mission.", DialogLayout.Bottom)
        timer.after(1000, function () {
            story.spriteSayText(Commander, "Good luck, soldier.")
            fade_in(1000)
            Commander.destroy()
            progress = "site 1"
            Site_1()
        })
    })
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction_button) {
        direction = "down"
        Helix.setImage(assets.image`Helix_down`)
        DE.setImage(assets.image`Laser DE 3`)
    }
})
function chords_F2 (time_loop: number, vollume: number, time_ring: number, time_rest: number) {
    for (let index = 0; index < time_loop; index++) {
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(466, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(554, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(740, time_ring)
        })
        music.setVolume(vollume)
        music.playTone(185, time_ring)
        music.rest(time_rest)
    }
}
function is_beaten (beaten: boolean, vollume: number) {
    music.setVolume(vollume)
    timer.background(function () {
        chords_G(1, 15, 20, 0)
    })
    timer.background(function () {
        chords_E(1, 15, 20, 0)
    })
    timer.background(function () {
        chords_C(1, 20, 20, 0)
    })
    music.buzzer.playUntilDone()
}
function chords_Am (time_loop: number, vollume: number, time_ring: number, time_rest: number) {
    for (let index = 0; index < time_loop; index++) {
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(440, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(523, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(659, time_ring)
        })
        music.setVolume(vollume)
        music.playTone(220, time_ring)
        music.rest(time_rest)
    }
}
function Helix_infor () {
    info.setLife(10)
    spriteutils.setLifeImage(assets.image`Shield`)
    scene.cameraFollowSprite(Helix)
}
function banner_Animation () {
    banner = sprites.create(assets.image`Banner`, SpriteKind.Player)
    animation.runImageAnimation(
    banner,
    assets.animation`banner_animation`,
    200,
    false
    )
}
function storeMusic () {
    music.playMelody("A A A A A A A C5 ", 300)
    music.playMelody("C5 B A F F G A B ", 300)
    music.playMelody("A B C5 C D C C5 B ", 300)
    music.playMelody("C D E F G F E D ", 300)
    music.playMelody("F G A B C5 B A G ", 300)
}
function chords_C (time_loop: number, vollume: number, time_ring: number, time_rest: number) {
    for (let index = 0; index < time_loop; index++) {
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(392, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(523, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(659, time_ring)
        })
        music.setVolume(vollume)
        music.playTone(262, time_ring)
        music.rest(time_rest)
    }
}
function introduction_story_site_1 () {
    fade_out(1000)
    tiles.setCurrentTilemap(tilemap`level1`)
    Captain = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.NPC)
    Captain.setPosition(60, 60)
    story.spriteSayText(Captain, "Hi soldier welcome to SFAU base No.1. I am Mark Scott captain of this base. I'm sure you've heard about the mission of the vanguard, right?")
    story.spriteSayText(Helix, "Yes")
    story.spriteSayText(Captain, "Good, now I will tell you what happened in this place and about your mission.")
    game.showLongText("Our base is located near a forest that we call Black Dawn. This forest contains a radioactive lake that is the source of all disasters on Hallock. Scientists have succeeded in creating a machine that can completely absorb radioactive materials in water. So they just need to go to the lake and start the machine. Sounds simple right? but not. a few days ago scouts reported that there were a lot of monsters on the way to the lake especially there was a very large one near the lake. So your team's mission is to wipe out all the monsters on the way to make way for the scientists to reach the lake and begin the machine.", DialogLayout.Bottom)
    story.spriteSayText(Captain, "Do you have any question?")
    story.spriteSayText(Helix, "Do I have any equipment?")
    story.spriteSayText(Captain, "Absolutely, soldier.")
    story.spriteSayText(Captain, "we will give you a DE, a powerful gun that can kill a zombie in one shot")
    DE = sprites.create(assets.image`Laser DE 1`, SpriteKind.Gun)
    DE.follow(Helix, 200)
    story.spriteSayText(Captain, "Also we will give you an armor that can resist radiation and absorb damage")
    fade_in(200)
    Helix.setImage(assets.image`Helix_down`)
    fade_out(200)
    direction_button = true
    story.spriteSayText(Captain, "And that's all. Any other questions?")
    story.spriteSayText(Helix, "No, i got it")
    story.spriteSayText(Captain, "I believe that you and your team will save the Hallock")
    story.spriteSayText(Captain, "Break a leg, soldier")
    fade_in(700)
    controller.moveSprite(Helix, 80, 80)
    fade_out(700)
    progress = "site 1"
    site1_stage1 = true
    direction = "down"
    armor_number = 0
    canShoot = true
    canBeInjure = true
}
function scale_animation_by (size: number) {
    gun_size = []
    for (let value of temp_gun) {
        if (size == 0.5) {
            gun_size.push(scaling.scaleHalfX(value))
        } else if (size == 2) {
            gun_size.push(scaling.scale2x(value))
        } else if (size == 3) {
            gun_size.push(scaling.scale3x(value))
        }
    }
    return gun_size
}
function stage_1_site_1 () {
    count_Enemy_Die = 0
    random1 = 500
    random2 = 3000
    List_Y_Position = [15, 210]
    for (let index = 0; index < 10; index++) {
        Zombie = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        Zombie.setPosition(randint(900, 1375), List_Y_Position._pickRandom())
        Zombie.follow(Helix, randint(20, 30))
        Rat = sprites.create(assets.image`mouse`, SpriteKind.Enemy)
        Rat.setPosition(randint(900, 1375), List_Y_Position._pickRandom())
        Rat.follow(Helix, randint(30, 55))
        Snail = sprites.create(assets.image`Snail`, SpriteKind.Enemy)
        Snail.setPosition(randint(900, 1375), List_Y_Position._pickRandom())
        Snail.follow(Helix, randint(10, 25))
        random1 += 2500
        random2 += 2500
    }
}
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    count_Enemy_Die += 1
    if (count_Enemy_Die == 30) {
        game.splash("To be continue")
        game.over(true, effects.confetti)
    }
})
function chords_D (time_loop: number, vollume: number, time_ring: number, time_rest: number) {
    for (let index = 0; index < time_loop; index++) {
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(440, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(554, time_ring)
        })
        timer.background(function () {
            music.setVolume(vollume)
            music.playTone(740, time_ring)
        })
        music.setVolume(vollume)
        music.playTone(294, time_ring)
        music.rest(time_rest)
    }
}
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (Boss.overlapsWith(Bullet)) {
        if (Boss_Health.value == 0) {
            Boss.destroy(effects.fire, 500)
            otherSprite.destroy()
            isBossCreated = false
        } else {
            Boss_Health.value += -10
            otherSprite.destroy()
        }
    }
})
function intro_music (can_run_intro_music: boolean, time_loop: number, vollume: number, time_beat: number) {
    if (can_run_intro_music) {
        for (let index = 0; index < time_loop; index++) {
            chords_A(1, vollume, time_beat, 0)
            chords_F2(1, vollume, time_beat, 0)
            chords_C2(1, vollume, time_beat, 0)
            chords_C(1, vollume, time_beat, 0)
        }
    } else {
        chords_B(5, 50, 500, 250)
    }
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (blockMenu.selectedMenuOption() == "Play") {
        blockMenu.closeMenu()
        banner.destroy()
        banner2.destroy()
        fade_in(1500)
        Introduction_story()
    } else if (blockMenu.selectedMenuOption() == "How to play") {
        game.showLongText("Use the direction button to move the character \n A to shoot or interact \n B to change the weapond", DialogLayout.Full)
    } else {
        game.showLongText("- Black Dawn was created by Aury team.\n- Story: Duong Hai Dang\n- Music: Pham Duy Khoa\n- Animation: Vo Hoang Nhat Nam\n", DialogLayout.Full)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.ashes, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (canBeInjure) {
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
        canBeInjure = false
        timer.after(500, function () {
            canBeInjure = true
        })
    }
})
let Boss_bullet: Sprite = null
let Snail: Sprite = null
let Rat: Sprite = null
let Zombie: Sprite = null
let List_Y_Position: number[] = []
let random2 = 0
let random1 = 0
let count_Enemy_Die = 0
let gun_size: Image[] = []
let canBeInjure = false
let Captain: Sprite = null
let Commander: Sprite = null
let temp_gun: any[] = []
let Deager_gun: Sprite = null
let armor_number = 0
let Bullet: Sprite = null
let canShoot = false
let site1_stage1 = false
let banner2: Sprite = null
let Boss_Bullet_Y: number[] = []
let Boss_Bullet_x: number[] = []
let Boss_Health: StatusBarSprite = null
let isRunning = false
let Boss: Sprite = null
let Joseph: Sprite = null
let DE: Sprite = null
let Helix: Sprite = null
let direction = ""
let isBossCreated = false
let direction_button = false
let progress = ""
let banner: Sprite = null
blockMenu.setControlsEnabled(false)
scene.setBackgroundImage(assets.image`Banner`)
fade_out(1500)
timer.background(function () {
    intro_music(true, 4, 120, 1000)
})
banner_Animation()
timer.after(4000, function () {
    animation.stopAnimation(animation.AnimationTypes.All, banner)
    blockMenu.setControlsEnabled(true)
    fade_in(1500)
    welcome_blackdawn()
    fade_out(1500)
    progress = "introduction"
})
direction_button = false
isBossCreated = false
game.onUpdateInterval(3000, function () {
    if (isBossCreated) {
        Boss.follow(Helix, 30)
        timer.after(2000, function () {
            Boss.follow(Helix, 0)
            for (let index = 0; index <= 7; index++) {
                Boss_bullet = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c c . . . . . . 
                    . . . . . . a b a a . . . . . . 
                    . . . . . c b a f c a c . . . . 
                    . . . . c b b b f f a c c . . . 
                    . . . . b b f a b b a a c . . . 
                    . . . . c b f f b a f c a . . . 
                    . . . . . c a a c b b a . . . . 
                    . . . . . . c c c c . . . . . . 
                    . . . . . . . c . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Boss, Boss_Bullet_x[index], Boss_Bullet_Y[index])
            }
            timer.after(1000, function () {
                Boss.follow(Helix, 30)
            })
        })
    }
})
