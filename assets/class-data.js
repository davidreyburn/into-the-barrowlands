const CLASS_DATA = {
  "sun-priest": {
    "alignments": {
      "Lawful": "Uphold a vow or tenet of Dorvos's teachings, even when it costs you.",
      "Good": "Use the lantern's light to protect or heal someone, expecting nothing.",
      "Neutral": "Make progress on your pilgrimage, regardless of who it helps or harms."
    },
    "bonds": [
      "_____ does not believe Dorvos will return. Their doubt troubles me.",
      "I have sworn to _____ that I will see this through, no matter the cost.",
      "I saved _____ with the lantern's light. They have walked with me since.",
      "_____ lost someone in the battle where Dorvos fell. I carry their grief."
    ],
    "gear": "Your Load is 10+STR.\n\nYou start with:\n- Lantern of Dorvos (1 weight, *close*, *forceful*, ever-burning, irreplaceable)\n- Dungeon rations (5 uses, 1 weight)\n- Pilgrim's robes (worn, 1 weight)\n\nChoose one armor:\n- Chainmail (1 armor, worn, 1 weight)\n- Leather armor (1 armor, worn, 1 weight) and a pilgrim's staff (*close*, *two-handed*, 1 weight)\n\nChoose one relic:\n- A tattered banner from the last battle (0 weight, reminds you why you walk)\n- A holy text, water-stained and burned (1 weight, contains prayers)\n- A hero's medal (0 weight, grants +1 forward when you invoke their memory)\n\nChoose one:\n- Sacred oil (3 uses, 0 weight, bless weapons or cleanse)\n- A map claiming to show \"the lowest place\" (0 weight, accuracy unknown)\n- A second chain for the lantern (1 weight, wear as flail or hang from pole)",
    "starting_moves": [
      "The Sacred Lantern",
      "The Pilgrimage",
      "The Price of Loss",
      "The Sacrifice",
      "Radiant Healing",
      "Holy Fire",
      "Turn the Darkness"
    ],
    "advanced_2_5": [
      "Dorvos's Wrath",
      "Keeper of the Flame",
      "Chain and Iron",
      "Burn the Corruption",
      "Martyr's Flame",
      "Steady Hand",
      "Beacon in Need"
    ],
    "advanced_6_10": [
      "Rekindled Faith",
      "Lantern Strike",
      "Beacon in the Dark",
      "The Sun Remembers",
      "Immolation",
      "Saint's Resolve",
      "Word of Dorvos",
      "Unquenchable"
    ],
    "hp": 8,
    "damage": "d8",
    "load": "10+STR",
    "name": "Sun Priest"
  },
  "murk-sage": {
    "alignments": {
      "Chaotic": "Use your illusions to sow confusion and turn enemies against each other.",
      "Neutral": "Reveal a hidden truth by showing someone their fear or desire.",
      "Evil": "Use darkness to harm an innocent or exploit their terror."
    },
    "bonds": [
      "_____ does not fear the dark, and that intrigues me.",
      "I have shown _____ a nightmare they cannot forget.",
      "_____ trusts me despite the shadows I command.",
      "I owe _____ a debt; they pulled me from the darkness when I was lost."
    ],
    "gear": "Your Load is 6+STR.\n\nYou start with:\n- Ragged cloak (worn, 0 weight)\n- Sage Thought talisman, a skull-shaped icon (0 weight, bound to you)\n- Moon Marker, a small carved stone (0 weight)\n- Ritual dagger (hand, 1 weight)\n- Dungeon rations (5 uses, ration, 1 weight)\n\nChoose your defense:\n- Leather armor (1 armor, worn, 1 weight)\n- Shadow-woven cloth (0 armor, ignore the *clumsy* tag in darkness, 0 weight)\n\nChoose one:\n- 3 vials of ink (useful for marking or obscuring, 0 weight)\n- A worn book of nightmares (describes common fears, +1 to Nightmare Projection when consulted, 1 weight)\n- Lantern and oil (when you need to create darkness by extinguishing it, 1 weight)",
    "starting_moves": [
      "Shadowcraft",
      "Nightmare Projection",
      "Eyes Adapt",
      "Darkness Lingers"
    ],
    "advanced_2_5": [
      "Cloak of Murk",
      "Shadow Step",
      "Whispers in the Dark",
      "Devouring Shade",
      "The Dark is My Ally",
      "Shade Walker"
    ],
    "advanced_6_10": [
      "Birth Terrors",
      "Umbral Form",
      "Consume the Light",
      "Sage's Thought",
      "Moon Marker",
      "Master of Shadows",
      "Living Nightmare"
    ],
    "hp": 6,
    "damage": "d6",
    "load": "6+STR",
    "name": "Murk Sage"
  },
  "stone-knight": {
    "alignments": {
      "Lawful": "Fulfill a duty or obligation despite great personal cost.",
      "Neutral": "Protect someone weaker than yourself from harm.",
      "Good": "Share your wealth or resources with those in need."
    },
    "bonds": [
      "_____ does not understand the weight I carry, but I protect them nonetheless.",
      "I have worked alongside _____ in the dark places; I trust them with my life.",
      "_____ seems fragile to me, but I know they have hidden strength.",
      "I owe _____ a debt from the deep places; I will repay it."
    ],
    "gear": "Your Load is 12+STR.\n\nYou start with:\n- Heavy plate armor (2 armor, worn, *clumsy* [ignored], 3 weight)\n- Miner's pickaxe (*close*, *forceful*, 2 weight)\n- Helmet with lantern affixed (provides light, 1 weight)\n- Dungeon rations (5 uses, ration, 1 weight)\n\nChoose one memento from the mines:\n- Uncut gemstone worth 50 coin (0 weight, reminds you of home)\n- Ancestor's shield (+1 armor when you Defend, 2 weight)\n- Map of the deep mines (useful for navigation underground, 0 weight)\n\nChoose one:\n- Coil of rope (100 feet, 1 weight)\n- Satchel of mining tools (1 weight, +1 when working with stone)\n- Second pickaxe to give to an ally (*close*, *forceful*, 2 weight)",
    "starting_moves": [
      "Stone-Born",
      "Bearer of Burdens",
      "Stoic Resolve",
      "Armored in Duty",
      "Pickaxe Mastery"
    ],
    "advanced_2_5": [
      "Tunnelborn Senses",
      "Iron Lungs",
      "Unshakeable",
      "Gemcutter's Eye",
      "Miner's Resilience",
      "Relentless"
    ],
    "advanced_6_10": [
      "Earthshaker",
      "Poison Blood",
      "Burden-Bearer's Strength",
      "Lightless Vigil",
      "Unyielding",
      "Stone's Endurance",
      "Living Fortress"
    ],
    "hp": 10,
    "damage": "d10",
    "load": "12+STR",
    "name": "Stone Knight"
  },
  "cursed-fool": {
    "alignments": {
      "Chaotic": "Pursue your Deepest Desire without regard for law or others' safety.",
      "Neutral": "Help someone achieve their desire, knowing it will cost them.",
      "Evil": "Use The Whisper's knowledge to manipulate or destroy someone."
    },
    "bonds": [
      "_____ does not know about The Whisper, and I intend to keep it that way.",
      "_____ has seen me at my worst, when The Whisper controlled me, and they stayed.",
      "I am trying to protect _____ from the fate I've chosen.",
      "The Whisper says _____ has a secret that could destroy them: I must decide what to do with this knowledge."
    ],
    "gear": "Your Load is 8+STR.\n\nYou start with:\n- The Whisper (bound to you, 0 weight, cannot be removed)\n- Smooth gauntlet (worn, 0 weight, bound to you)\n- Tattered traveler's cloak (hides your curse, 1 weight)\n- Dungeon rations (5 uses, ration, 1 weight)\n\nChoose your defense:\n- Leather armor (1 armor, worn, 1 weight)\n- Chainmail (1 armor, worn, 1 weight) and shield (+1 armor, 2 weight)\n\nChoose one weapon:\n- Sword (close, 1 weight)\n- Hammer (close, *forceful*, 1 weight)\n- Staff (close, *two-handed*, 1 weight)\n\nChoose one:\n- Journal documenting your curse (helps track Corruption and desires, 0 weight)\n- Holy symbol from your past life (might reduce Corruption in dire need, 0 weight)\n- Small mirror (useful for checking if the stone has spread, 0 weight)",
    "starting_moves": [
      "The Whisper",
      "Smooth Gauntlet",
      "Deepest Desire",
      "Marked by the Stone",
      "Corruption"
    ],
    "advanced_2_5": [
      "Stone's Counsel",
      "Iron Will",
      "Whispered Secrets",
      "Gauntlet's Fury",
      "Polished by Fools",
      "Burden Shared"
    ],
    "advanced_6_10": [
      "The Stone Spreads",
      "Whisper's Dominion",
      "Unbreakable",
      "Sins Made Manifest",
      "The Fool's Bargain",
      "Purge the Stone",
      "Whisper's Price"
    ],
    "hp": 8,
    "damage": "d8",
    "load": "8+STR",
    "name": "Cursed Fool"
  },
  "prophet": {
    "alignments": {
      "Lawful": "Deliver a prophecy that upholds order or prevents chaos, even if it brings suffering.",
      "Neutral": "Speak a hard truth that others need to hear, knowing it will change them.",
      "Evil": "Use your prophecies to manipulate someone into a doomed course of action."
    },
    "bonds": [
      "I have seen _____ die in my visions, but I have not told them.",
      "_____ does not believe in my prophecies, and I must prove myself.",
      "Marko speaks favorably of _____; they are important to the future.",
      "I am trying to prevent the doom I saw for _____, but I do not know if I can."
    ],
    "gear": "Your Load is 6+STR.\n\nYou start with:\n- Marko's mummified head (1 weight, bound to you, speaks prophecy)\n- Marko effigy, carved wood or stone (0 weight, marks you as a prophet)\n- Incense bag (3 uses, 0 weight, for rituals)\n- Ragged prophet's robes (worn, 0 weight)\n- Dungeon rations (5 uses, ration, 1 weight)\n\nChoose one weapon:\n- Gnarled staff (close, *two-handed*, 1 weight)\n- Ritual blade (hand, 1 weight)\n- Censer on a chain (close, 1 weight, can burn incense while fighting)\n\nChoose one:\n- Scroll of Marko's teachings (useful for converting others, 0 weight)\n- Vial of sacred oil (2 uses, anoint the dying for peaceful death, 0 weight)\n- Shroud (can wrap bodies for respectful burial, 1 weight)",
    "starting_moves": [
      "Marko's Head",
      "Divine Conduit",
      "Prophet's Burden",
      "Marko Effigy",
      "Incense Rituals"
    ],
    "advanced_2_5": [
      "Death's Herald",
      "Through Marko's Eyes",
      "Visions of Ruin",
      "Grim Counsel",
      "Deathless Servant",
      "Speaker for the Dead"
    ],
    "advanced_6_10": [
      "Marko's Blessing",
      "Avatar of Decay",
      "Hear the Unspoken Dead",
      "Prophet's Mantle",
      "The Last Vision",
      "Inevitable End"
    ],
    "hp": 6,
    "damage": "d6",
    "load": "6+STR",
    "name": "Prophet"
  },
  "blighted-scholar": {
    "alignments": {
      "Chaotic": "Give in to the corruption's alien urges despite knowing the consequences.",
      "Neutral": "Help someone else who is cursed, corrupted, or transforming.",
      "Evil": "Use your corruption to harm or control an innocent."
    },
    "bonds": [
      "I am searching for a cure, and I believe _____ can help me find it.",
      "_____ has seen me at my worst, when the corruption took over, and I fear what they think of me.",
      "I must protect _____ from becoming infected like me.",
      "_____ knows something about my condition, but they haven't told me everything."
    ],
    "gear": "Your Load is 8+STR.\n\nYou start with:\n- Scholar's journal (detailed notes on your infection and research, 1 weight)\n- Alchemical kit (vials, tools for brewing and analyzing, 1 weight)\n- Traveler's cloak (hides your changing features, worn, 1 weight)\n- Dungeon rations (5 uses, ration, 1 weight)\n\nChoose one weapon:\n- Staff (close, *two-handed*, 1 weight)\n- Two daggers (hand, 1 weight each)\n- Your bare hands (you've learned to rely on them)\n\nChoose one memento from before the infection:\n- Locket with a loved one's portrait (reminds you of who you were, 0 weight)\n- Your diploma or badge of scholarly rank (now stained and torn, 0 weight)\n- Vial of the substance that infected you (dangerous to carry, 0 weight)\n\nChoose one tool for the search:\n- Map of ancient sites where the cure might be found (0 weight)\n- Tome of eldritch lore (cataloging aberrations and otherworldly phenomena, 1 weight)\n- Set of restraints (in case you lose control, 1 weight)",
    "starting_moves": [
      "The Corruption",
      "Eldritch Transformation",
      "Alchemical Expertise",
      "The Search for a Cure",
      "Alien Insight"
    ],
    "advanced_2_5": [
      "Infect Others",
      "Aberrant Resilience",
      "Scholar's Notes",
      "Writhing Assault",
      "Alien Communion",
      "Studied Anatomy"
    ],
    "advanced_6_10": [
      "Controlled Transformation",
      "Corrupted Blood",
      "Share the Burden",
      "The Corruption Unleashed",
      "Grotesque Apotheosis",
      "The Cure"
    ],
    "hp": 6,
    "damage": "d6",
    "load": "8+STR",
    "name": "Blighted Scholar"
  },
  "cave-wretch": {
    "alignments": {
      "Chaotic": "Steal something valuable that you don't need, simply because you want it.",
      "Neutral": "Guide someone safely through dangerous underground terrain, even though you could have betrayed them.",
      "Evil": "Murder someone for their gold or weapon when you could have simply taken it."
    },
    "bonds": [
      "_____ does not know what I am, and I will keep it that way as long as I can.",
      "_____ saved me from being killed by surface-dwellers; I owe them my life.",
      "I covet something _____ owns, and I think about taking it constantly.",
      "_____ treats me like a person, not a creature, and I will protect them for it."
    ],
    "gear": "Your Load is 8+STR.\n\nYou start with:\n- Ragged, patched clothing (worn, 0 weight, barely holds together)\n- Rope and pitons scavenged from corpses (useful underground, 1 weight)\n- Dungeon rations (5 uses, ration, 1 weight), things others wouldn't eat\n- Sack for collecting treasure (0 weight when empty)\n\nChoose one weapon you've scavenged or stolen:\n- Rusted dagger (hand, 1 weight)\n- Sharpened pickaxe head on a stick (close, *awkward*, 1 weight)\n- Surface-made shortsword you treasure (close, 1 weight)\n\nChoose one prize from a past theft:\n- Gold coin you keep polished and shining (0 weight, your first treasure)\n- Surface-made knife with a jeweled handle (hand, 1 weight, worth 20 coin if sold, but could you?)\n- Steel helmet, too large for you but you wear it anyway (0 armor, 1 weight, makes you feel important)\n\nChoose one tool of your trade:\n- Thieves' tools (lockpicks, small pry bar, 1 weight)\n- Hooded lantern with oil (for showing surface folk where to go, 1 weight)\n- Crude map of tunnels you've explored (0 weight, useful leverage)",
    "starting_moves": [
      "Creature of the Depths",
      "Underdark Guide",
      "Scavenger's Eye",
      "Backstab",
      "Skulk and Creep"
    ],
    "advanced_2_5": [
      "Tunnel Rat",
      "Poison Tolerance",
      "Murder in the Dark",
      "Hoarder",
      "Trap Sense",
      "Shadowstep"
    ],
    "advanced_6_10": [
      "Ambush Predator",
      "Speaker of the Deeps",
      "Collector's Obsession",
      "From the Shadows",
      "Escape Artist",
      "Wretch's Revenge",
      "Tunnelborn"
    ],
    "hp": 8,
    "damage": "d8",
    "load": "8+STR",
    "name": "Cave Wretch"
  }
};
