const projects = {
  "o-f-ck-beaver": { title:"O F*ck! Beaver!", hero:"assets/img/portfolio/bober1.png", tags:["Unreal Engine 5","C++","Blueprints","Multiplayer"], role:"Gameplay programmer", team:"Xbox Game Camp Belgium 2026 team", year:"2026", intro:"A fast-paced local multiplayer game created during a three-day game jam.", gallery:["bober1.png","bober2.png","bober3.png","bober4.png"], repositories:[{ label:"GitHub — O F*ck! Beaver!", url:"https://github.com/DamianZiolo/OFuckBeaver" }], trailer:"https://youtu.be/6L3iCD9D_PE?si=7ytVPufs7t-VQVvZ" },
  "ecosystem-simulation": { title:"Ecosystem Simulation", hero:"assets/img/portfolio/ecosystem1.png", tags:["Unreal Engine 5","C++","AI","Simulation"], role:"Solo developer", team:"Solo project", year:"2026", intro:"A research-driven ecosystem simulation created entirely in Unreal Engine 5.", gallery:["ecosystem1.png","ecosystem2.png","ecosystem3.png"], repositories:[{ label:"GitHub — Ecosystem Simulation", url:"https://github.com/DAE-GD-2025-2026/gameai-research-project-DamianZiolo" }] },
  "project-a-n-g-e-l-3d-roguelike": { title:"Project A.N.G.E.L", hero:"assets/img/portfolio/robotGame.png", tags:["Unity","C#","Roguelike"], role:"Gameplay programmer", team:"Student team", year:"2025", intro:"A 3D roguelike about a customizable robot exploring a hostile scrapyard.", gallery:["robotGame.png","robotGame2.png","robotGame3333.png"], repositories:[{ label:"GitHub — Project A.N.G.E.L", url:"https://github.com/Bartex890/Project-ANGEL" }], trailer:"https://youtu.be/BrYjREzPXGg?si=aUQgV29E5QF68lLw" },
  "they-all-hate-each-other-puzzle-strategy-prototype": { title:"They All Hate Each Other", hero:"assets/img/portfolio/theyAllHateEachOther.png", tags:["Unity","C#","Puzzle strategy"], role:"Developer", team:"Student team", year:"2025", intro:"A puzzle-strategy prototype based on dynamic factions, rivalries and decisions.", gallery:["theyAllHateEachOther.png","theyAllHateEachOther2.png","theyAllHateEachOther3.png","theyAllHateEachOther4.png"], repositories:[{ label:"GitHub — They All Hate Each Other", url:"https://github.com/DamianZiolo/GEFUnityProject" }], trailer:"https://youtu.be/l5L7edrN9es" },
  "hungry-frog-mobile-location-based-game": { title:"Hungry Frog", hero:"assets/img/portfolio/hungryFrog.png", tags:["Unity","C#","Mobile","Location based"], role:"Developer", team:"Student team", year:"2025", intro:"A mobile location-based game about gathering ingredients and feeding a very hungry frog.", gallery:["hungryFrog.png","hungryFrog2.png","hungryFrog3.png","hungryFrog4.png","hungryFrog5.png"], trailer:"https://youtu.be/LfNywIiPBsk?si=HTHqylxicuapulqi" },
  "game-ai-systems": { title:"Game AI Systems", hero:"assets/img/portfolio/GameAI.png", tags:["Unreal Engine 5","C++","AI"], role:"Solo developer", team:"Solo project", year:"2026", intro:"A collection of game-agent AI systems developed in Unreal Engine 5.", gallery:["GameAI.png","GameAI2.png","GameAI3.png"], repositories:[{ label:"GitHub — AI Systems", url:"https://github.com/DAE-GD-2025-2026/game-ai-project-DamianZiolo" }, { label:"GitHub — Zombie Survival", url:"https://github.com/DAE-GD-2025-2026/gameai-zombie-DamianZiolo" }] },
  "galaga-clone-custom-engine": { title:"Galaga Clone", hero:"assets/img/portfolio/Galaga.png", tags:["Custom engine","C++","Arcade"], role:"Engine & gameplay programmer", team:"Solo project", year:"2025", intro:"An arcade project built around a custom C++ engine and component-based architecture.", gallery:["Galaga.png","Galaga2.png","Galaga3.png"], repositories:[{ label:"GitHub — Galaga Clone / Custom Engine", url:"https://github.com/DamianZiolo/programming4" }] },
  "flameborn-gameplay-prototype": { title:"Flameborn", hero:"assets/img/portfolio/Flameborn1.png", tags:["Unreal Engine 5","C++","Blueprints","Co-op"], role:"Gameplay programmer", team:"Six-person team", year:"2026", intro:"A cooperative prototype where four fire warriors defend a central flame against enemy waves.", gallery:["Flameborn1.png","Flameborn2.png","Flameborn3.png","Flameborn4.png","Flameborn5.png","Flameborn6.png","Flameborn7.png","Flameborn8.png"], demo:"https://mariedem.itch.io/gp05flameborn", trailer:"https://youtu.be/B2tUlVWssBM?si=BV91R3izcLSSUIvp" },
  "moonlighter-clone": { title:"Moonlighter Clone", hero:"assets/img/portfolio/Moonlighter.png", tags:["SDL","C++","Combat"], role:"Solo developer", team:"Solo project", year:"2024", intro:"A C++/SDL study of 2D movement, combat, collisions and room transitions.", gallery:["Moonlighter.png","Moonlighter2.png","Moonlighter3.png"], repositories:[{ label:"GitHub — Moonlighter Clone", url:"https://github.com/DamianZiolo/Moonlighter-clone" }], trailer:"https://youtu.be/kaSeVxJUSeQ?si=cukdNnfoLLoHjacz" },
  "graphic-programming-basic-ray-tracing": { title:"Graphic Programming — Basic Ray Tracing", hero:"assets/img/portfolio/raytracer3.png", tags:["C++","SDL","Graphics","Ray tracing"], role:"Solo developer", team:"Solo course project", year:"2025", intro:"A basic C++ ray tracer supporting spheres, planes, triangles, OBJ models, lighting and shadows.", gallery:["raytracer3.png","raytracer2.png","raytracer.png"] }
};

const descriptions = {
  "o-f-ck-beaver": "<p>O F*ck! Beaver! is a fast-paced local multiplayer game developed during Xbox Game Camp Belgium 2026, a three-day game jam that brought students and professionals together to create original games.</p><p>I developed player movement, animation systems and combat mechanics, implemented simple AI for autonomous units, and helped shape engaging local multiplayer interactions.</p>",
  "ecosystem-simulation": "<p>This three-day solo research project explores how biological ecosystem principles can become interactive game systems and autonomous AI behaviours. Players configure the starting conditions, then observe a sandbox world evolve without direct control.</p><p>Plants, prey and predators act independently through hunger, movement, reproduction and environmental interactions. I researched and designed their relationships and survival conditions, then built the gameplay framework, AI, simulation logic and UI for real-time statistics.</p>",
  "project-a-n-g-e-l-3d-roguelike": "<p>A.N.G.E.L is a 3D roguelike in which players explore a scrapyard controlled by rogue AI, fight hostile machines, take control of enemy robots and upgrade their own systems with interchangeable parts.</p><p>During a 184-hour summer internship, I implemented the combat system and modular robot parts: boxing glove, flamethrower and nail gun weapons, plus tank, hovercraft and spider-leg movement types. The work focused on flexible gameplay systems and multidisciplinary teamwork.</p>",
  "they-all-hate-each-other-puzzle-strategy-prototype": "<p>This puzzle-strategy prototype is set in a harbour where groups from rival factions continually arrive. The player must place passengers on boats and transport them safely while keeping hostile factions apart.</p><p>New rivalries, rules and larger crowds make the logistics increasingly complex. I created the game design, programming, UI, balancing and gameplay systems, with a focus on emergent puzzle scenarios built from a small set of faction rules.</p>",
  "hungry-frog-mobile-location-based-game": "<p>Hungry Frog is a location-based mobile game in which players explore their neighbourhood, collect ingredients, prepare dishes and feed their frog to compete in weekly rankings.</p><p>I implemented the Mapbox integration and an AR system. The map responds to the player's movement and enables interaction with nearby ingredients, while the AR feature places the frog in the player's real-world surroundings through their mobile device.</p>",
  "game-ai-systems": "<p>This four-month solo project is a collection of Unreal Engine 5 AI exercises, with each subject developed in its own scene. It covers steering and combined steering, flocking, spatial partitioning, graph search, A*, NavMesh navigation and finite state machines.</p><p>The final part is a zombie-survival simulation. I built the survivor’s decision-making with Behaviour Trees: it finds houses, evaluates and collects items, heals when injured, equips weapons and reacts to approaching zombies.</p>",
  "galaga-clone-custom-engine": "<p>This Programming 4 project combines a Galaga-style arcade game with a custom C++ engine built from scratch on top of Minigin. The goal is to use reusable engine architecture to recreate a complete classic game.</p><p>The engine is component-based and applies patterns including Game Loop, Update Method, Command, Observer, Component, State, Singleton, Object Pool and Service Locator. It also includes external level data, high-score persistence and a threaded sound system.</p>",
  "flameborn-gameplay-prototype": "<p>Flameborn is a cooperative prototype where four fire warriors defend a central flame from waves of monsters. Defeated enemies drop Soul Crystals, which players bring back to heal the flame and keep the round alive.</p><p>As one of two programmers, I contributed to the initial game design and built the project from scratch. I specialised in the enemy side: the wave system, three enemy behaviours and the AI structure that lets each enemy type share a common base while following its own priorities.</p><p>Developed over twelve weeks—two days per week—the team followed a production-style pipeline of prototyping, production and polish. Unreal C++ powered the core systems, with Blueprints used for smaller VFX and audio work.</p>",
  "moonlighter-clone": "<p>For a study assignment to recreate part of an existing game, I chose Moonlighter and developed the project in C++ with SDL.</p><p>Built from scratch, it includes a 2D collision system, movement and combat mechanics, simple enemy AI, health and animation systems, item drops and room transitions.</p>",
  "graphic-programming-basic-ray-tracing": "<p>This C++ and SDL ray-tracing application was the first of three parts of a Graphic Programming assignment. It renders spheres, planes and triangles, loads OBJ models, and implements basic lighting and shadows.</p><p>The later stages extended the work into a rasterizer and then a DirectX 11 dual rasterizer, where I worked with cameras, textures, shading and transparency.</p>"
};

const highlights = {
  "o-f-ck-beaver": [
    ["Game jam delivery", "My first game jam, built in three days as the only programmer on the team."],
    ["Group AI", "Implemented lightweight behaviour for groups of autonomous enemies under a very short production deadline."],
    ["Core systems", "Delivered movement, animation and combat systems for fast local multiplayer matches."]
  ],
  "ecosystem-simulation": [
    ["Sandbox simulation", "Players set the initial conditions, then observe the ecosystem develop without direct control."],
    ["Behaviour design", "Defined survival and reproduction conditions, including hunger thresholds, for plants, prey and predators."],
    ["Research-led", "The project is accompanied by research documentation in its GitHub repository, not only a playable prototype."]
  ],
  "project-a-n-g-e-l-3d-roguelike": [
    ["Modular robots", "Created interchangeable weapons and movement parts, including tank, hovercraft and spider-leg locomotion."],
    ["Combat", "Implemented the combat system for encounters with hostile machines in the scrapyard."],
    ["Professional workflow", "Developed during a 184-hour internship with industry mentors and a multidisciplinary team."]
  ],
  "they-all-hate-each-other-puzzle-strategy-prototype": [
    ["Emergent puzzles", "Small faction rules and rivalries create increasingly complex harbour-management scenarios."],
    ["Full ownership", "Designed and programmed the game, UI, balancing and gameplay systems as a solo developer."],
    ["Player decisions", "Passengers must be assigned to boats while hostile factions are kept apart to minimise casualties."]
  ],
  "hungry-frog-mobile-location-based-game": [
    ["Mapbox integration", "Built a map that reacts to player movement and makes nearby ingredients interactive."],
    ["Augmented reality", "Implemented the AR feature that brings the frog into the player’s physical surroundings."],
    ["New technology", "Mapbox and mobile AR were new tools for me, making this a focused integration and learning challenge."]
  ],
  "game-ai-systems": [
    ["Steering & flocking", "Implemented seek, evade, wander, arrive, combined steering and wolf-hunting patterns for boids."],
    ["Scalable neighbours", "Added optional cell-space partitioning to speed up neighbour searches in the flocking system."],
    ["Zombie survivor", "Built an autonomous survivor with a Behaviour Tree to search houses, prioritise items, heal and react to zombies."]
  ],
  "galaga-clone-custom-engine": [
    ["Component architecture", "Gameplay functionality is built from components attached to GameObjects, inspired by Unity’s approach."],
    ["Performance & tooling", "Uses object pooling for projectiles, external level files, persistent high scores and threaded sound playback."],
    ["Game modes", "Includes solo, cooperative duo and versus modes, where the second player controls Galaga bosses."]
  ],
  "flameborn-gameplay-prototype": [
    ["Gameplay loop", "Players defend a central flame, defeat monsters and use their dropped Soul Crystals to heal the objective."],
    ["Enemy architecture", "Created the wave system and distinct behaviours for three enemy types, each with its own target priorities."],
    ["Crowd control", "Solved navigation congestion by making enemies avoid one another while still moving purposefully towards their target."]
  ],
  "moonlighter-clone": [
    ["Built from scratch", "Implemented collision, movement, combat, health, animation, drops and room transitions in C++ with SDL."],
    ["Combat AI", "Created simple enemy behaviour to support the project’s 2D combat encounters."],
    ["Study project", "A focused recreation of part of Moonlighter, created to practise building game systems without an engine."]
  ],
  "graphic-programming-basic-ray-tracing": [
    ["Three rendering stages", "The ray tracer was one part of a graphics assignment followed by a rasterizer and a DirectX 11 dual rasterizer."],
    ["Ray tracing", "Supports spheres, planes, triangles, OBJ models, simple lighting and shadows."],
    ["Graphics foundations", "Later stages explored cameras, textures, shading and transparency."]
  ]
};

const slug = new URLSearchParams(window.location.search).get("project");
const project = projects[slug] || projects["flameborn-gameplay-prototype"];
document.title = `${project.title} | Damian Zioło`;
const image = (file) => `assets/img/portfolio/${file}`;
const tagClasses = {
  "Unreal Engine 5": "tag-unreal", Unity: "tag-unity", "Custom engine": "tag-custom", SDL: "tag-sdl",
  "C++": "tag-cpp", "C#": "tag-csharp", Blueprints: "tag-blueprints", AI: "tag-ai",
  Multiplayer: "tag-multiplayer", "Co-op": "tag-multiplayer", Roguelike: "tag-roguelike",
  Graphics: "tag-graphics", "Ray tracing": "tag-graphics", Combat: "tag-combat", Arcade: "tag-combat",
  "Puzzle strategy": "tag-prototype", Simulation: "tag-prototype", Mobile: "tag-prototype", "Location based": "tag-prototype"
};
const tags = project.tags.map((tag) => `<span class="tag ${tagClasses[tag] || ""}">${tag}</span>`).join("");
const gallery = project.gallery.map((file) => `<img src="${image(file)}" alt="${project.title} screenshot" loading="lazy">`).join("");
const projectHighlights = (highlights[slug] || highlights["flameborn-gameplay-prototype"])
  .map(([title, copy], index) => `<article class="feature"><i class="bi ${["bi-lightbulb", "bi-diagram-3", "bi-code-slash"][index]}"></i><h3>${title}</h3><p>${copy}</p></article>`)
  .join("");
const repositories = project.repositories?.length
  ? `<section class="content-section"><p class="section-label">Source code</p><h2>Repositories.</h2><div class="tag-list">${project.repositories.map(({ label, url }) => `<a class="tag" href="${url}" target="_blank" rel="noopener"><i class="bi bi-github"></i> ${label}</a>`).join("")}</div></section>`
  : "";
const playLinks = [
  project.demo && `<a href="${project.demo}" target="_blank" rel="noopener"><i class="bi bi-controller"></i> Play demo</a>`,
  project.trailer && `<a href="${project.trailer}" target="_blank" rel="noopener"><i class="bi bi-play-fill"></i> Watch trailer</a>`
].filter(Boolean).join("");
const playSection = playLinks ? `<section class="content-section"><p class="section-label">Play it</p><h2>Demo or trailer.</h2><div class="trailer"><img src="${project.hero}" alt=""><div>${playLinks}</div></div></section>` : "";
document.querySelector("#project-page").innerHTML = `
  <section class="project-hero"><img src="${project.hero}" alt="${project.title}"><div><p class="project-kicker">Selected project · ${project.year}</p><h1>${project.title}</h1><p class="project-lead">${project.intro}</p><div class="tag-list">${tags}</div></div></section>
  <div class="project-content"><section class="project-meta"><div class="meta-item"><span>My role</span><strong>${project.role}</strong></div><div class="meta-item"><span>Team</span><strong>${project.team}</strong></div><div class="meta-item"><span>Year</span><strong>${project.year}</strong></div></section>
  <section class="content-section"><p class="section-label">Overview</p><h2>What the project is about.</h2><div class="copy">${descriptions[slug] || descriptions["flameborn-gameplay-prototype"]}</div></section>
  <section class="content-section"><p class="section-label">Highlights & challenges</p><h2>What made the project interesting.</h2><div class="feature-grid">${projectHighlights}</div></section>
  <section class="content-section"><p class="section-label">Visual diary</p><h2>Screens from the project.</h2><div class="gallery">${gallery}</div></section>
  ${repositories}
  ${playSection}</div>`;
