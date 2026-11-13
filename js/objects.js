// The Lake Museum: the objects on display.
// To change what the museum says, edit only this file. Each object has:
//   name, native    the name, and its name in the original language(s)
//   culture, found  which culture it comes from, and where in Toronto the capsule was sealed
//   box             the capsule box number it was found in (matches the Fortune Time Capsule wall, No. 001–040)
//   card            pastel colour of the card left in the box (same colours as the time capsule cards)
//   image           the illustration in assets/objects/
//   shape           "tall" or "wide": the size of its display case in the room
//   madeOf, usedFor short facts under the title
//   history         paragraphs about the object up to 2026
//   note            the card someone left in the capsule in 2026 (written by our group, imagined)
//   now             what the object means to the people of 2126
//   sources         where the history comes from. null = not added yet (the line is then hidden)
//
// TEAM: please check the history paragraphs and add sources before presenting.

const MUSEUM_OBJECTS = [
    {
        id: "red-envelope",
        name: "Red Envelope",
        native: "紅包 hóngbāo · 利是 lai see",
        culture: "Chinese",
        found: "Chinatown",
        box: "003",
        card: "#F2A58E",
        image: "assets/objects/red-envelope.png",   // from the Fortune Time Capsule (AdobeStock_2240451709)
        shape: "wide",
        madeOf: "Red paper, gold ink",
        usedFor: "Lunar New Year, weddings, birthdays",
        history: [
            "Long before paper envelopes, children in China were given coins tied with red string at the New Year. One folk story says the coins protected them from a demon called Sui, who came on New Year’s Eve.",
            "Red is the colour of luck and protection, and gold stands for wealth. By the 1900s, money was being given in small red paper envelopes, usually from married elders to children and unmarried relatives. The amount mattered less than the wish inside: an even number, often with an 8 for luck, and never a 4.",
            "In 2014 the envelopes went digital, and by 2026 millions were sent by phone. In Toronto, paper ones were still sold in every shop along Spadina Avenue before the New Year."
        ],
        note: { text: "My nai nai gave me one every year. I hope someone still gives you one.", from: "M., Spadina Ave" },
        now: "We still fold red envelopes. There is no money inside any more: you put in a promise of something you can give, like a meal, an hour of help or a mended coat, and you take one when you are in need. The red still means what it always meant: someone is wishing you well.",
        sources: "History.com (Feb 2026); Chinoy.tv (2020)"
    },
    {
        id: "money-toad",
        name: "Money Toad",
        native: "金蟾 Jīn Chán",
        culture: "Chinese",
        found: "Chinatown",
        box: "022",
        card: "#B5DCC4",
        image: "assets/objects/money-toad.png",     // from the Fortune Time Capsule (AdobeStock_1752732111)
        shape: "wide",
        madeOf: "Brass, resin or jade",
        usedFor: "Bringing wealth into the home",
        history: [
            "The money toad has three legs and usually sits on a pile of coins, often with one coin in its mouth. In Chinese stories the immortal Liu Haichan tamed the greedy toad with a string of gold coins, and from then on it brought wealth to people instead of taking it.",
            "In feng shui, the toad is placed near the front door, facing into the room, so that money comes into the home and does not leave it. Owners were told never to put it in a bathroom or kitchen.",
            "By 2026, money toads sat on shop counters and restaurant cash registers across Toronto, and many families kept one by the door."
        ],
        note: { text: "Put him by the door facing in. Mom says if he faces out, the money leaves.", from: "J., Dundas St W" },
        now: "Children in 2126 call it “the toad who keeps the coin in his mouth.” For a long time we did not know what to make of it. Then we read the old story again: the toad was tamed, and learned to bring wealth into the home. We keep ours by the door of the shared pantry, facing in.",
        sources: null
    },
    {
        id: "diya",
        name: "Diya",
        native: "दीया diyā",
        culture: "Indian",
        found: "Gerrard India Bazaar",
        box: "015",
        card: "#F0D58C",
        image: "assets/objects/diya.png",           // from the Fortune Time Capsule (AdobeStock_2099216432)
        shape: "tall",
        madeOf: "Clay, cotton wick, oil or ghee",
        usedFor: "Diwali, prayer, welcoming",
        history: [
            "A diya is a small clay lamp with a cotton wick in oil or ghee. It is lit for Diwali, the festival of lights, which marks the victory of light over darkness and good over evil.",
            "In the Ramayana, the people of Ayodhya lit rows of lamps to welcome Rama home. On Diwali night, diyas are also placed at doors and windows to welcome Lakshmi, the goddess of wealth and good fortune. Sikhs light lamps for Bandi Chhor Divas, and Jains for the nirvana of Mahavira.",
            "In 2026, families on Gerrard Street East lined their steps and balconies with diyas, and the street held its own Diwali festival."
        ],
        note: { text: "We light 21 diyas on our balcony every Diwali. Please keep the light going.", from: "P., Gerrard St E" },
        now: "Every autumn, diyas are lit along the whole lakeshore. One flame lights the next, and it loses nothing by sharing. Of everything in this room, we think the diya understood our way of life first.",
        sources: null
    },
    {
        id: "mithai",
        name: "Mithai",
        native: "मिठाई mithāī",
        culture: "Indian",
        found: "Gerrard India Bazaar",
        box: "027",
        card: "#F2B8B8",
        image: "assets/objects/mithai.png",         // from the Fortune Time Capsule (AdobeStock_2099216432)
        shape: "wide",
        madeOf: "Milk, sugar, flour, ghee, nuts",
        usedFor: "Festivals, good news, offerings",
        history: [
            "Mithai is the word for Indian sweets: laddoo, barfi, jalebi, gulab jamun and many more. The round laddoo shown here is linked to Ganesha, who is often pictured holding one.",
            "Sweets are offered to the gods as prasad and then shared with everyone. Good news, like a wedding, a new baby, a new job or exam results, was always marked by sweetening someone’s mouth (muh meetha karna). At Diwali, families carried boxes of mithai to neighbours, friends and colleagues.",
            "In 2026, the sweet shops of Gerrard India Bazaar had queues out of the door in the week before Diwali."
        ],
        note: { text: "Kaju katli is the best one. Share it, that’s the rule.", from: "A., Gerrard St E" },
        now: "Mithai came through the collapse almost unchanged, because it was always made to be given away. A box of sweets was never for one person. Ours are made in the shared kitchens and carried door to door, just as they were in 2026.",
        sources: null
    },
    {
        id: "vasilopita-coin",
        name: "Vasilopita Coin",
        native: "Βασιλόπιτα vasilópita",
        culture: "Greek",
        found: "Greektown, the Danforth",
        box: "034",
        card: "#C9BFE6",
        image: "assets/objects/vasilopita-coin.svg", // drawn for the museum
        shape: "tall",
        madeOf: "Coin, baked in a sweet bread or cake",
        usedFor: "New Year’s Day, the feast of St Basil",
        history: [
            "Vasilopita means “Basil’s bread.” It is baked for 1 January, the feast of Saint Basil of Caesarea, with one coin hidden inside.",
            "The story goes that Basil collected the town’s money and jewellery to pay an unfair tax, then had the valuables baked into loaves and handed out, and every family found what it needed. Families cut the cake together, with slices for Christ, for the house and for the poor, then for everyone from oldest to youngest. Whoever finds the coin has good luck for the year.",
            "In 2026, churches, schools and clubs along the Danforth cut their own vasilopita through the whole of January."
        ],
        note: { text: "I found the coin this year! Pappou says it means a lucky year. Did it work?", from: "E., Danforth Ave" },
        now: "Saint Basil’s story, where everyone receives what they need, is read aloud on the first day of our year. We still cut the cake and still hide the coin. Whoever finds it gives the first gift of the year.",
        sources: null
    },
    {
        id: "mati",
        name: "Mati",
        native: "Μάτι máti · the evil eye",
        culture: "Greek",
        found: "Greektown, the Danforth",
        box: "010",
        card: "#A9C7E8",
        image: "assets/objects/mati.svg",           // drawn for the museum
        shape: "tall",
        madeOf: "Blue glass",
        usedFor: "Protection from envy",
        history: [
            "The mati is a blue glass eye. It does not watch you; it protects you by looking back at the jealous stare of others (the evil eye, or matiasma), which was believed to bring bad luck and illness.",
            "Eyes painted on ancient Greek drinking cups and ships may have had the same protective purpose. In Greek families, a grandmother could remove the evil eye with a quiet prayer and drops of oil in water (xematiasma), and a mati was pinned to a new baby’s clothes or hung in a new home.",
            "By 2026, the mati was printed on phone cases, keychains and fashion. In Greektown, it hung in shop windows all along the Danforth."
        ],
        note: { text: "Yiayia pinned this to my baby blanket. It’s protection, not decoration!", from: "K., Danforth Ave" },
        now: "When there is no money to envy, what is the evil eye? We still give a mati to every newborn. For us, it means that someone is watching over you, not watching you.",
        sources: null
    }
];
