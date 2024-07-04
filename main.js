// Create an engine
const engine = Matter.Engine.create();
const world = engine.world;

// Create a renderer
const render = Matter.Render.create({
    element: document.body,
    engine: engine,
    canvas: document.getElementById('world'),
    options: {
        width: 800,
        height: 600,
        wireframes: false
    }
});

// Create a ground
const ground = Matter.Bodies.rectangle(400, 580, 810, 60, { isStatic: true });
Matter.Composite.add(world, ground);

// Create a box
const box = Matter.Bodies.rectangle(400, 200, 80, 80);
Matter.Composite.add(world, box);

// Run the renderer
Matter.Render.run(render);

// Create a runner
const runner = Matter.Runner.create();
Matter.Runner.run(runner, engine);
