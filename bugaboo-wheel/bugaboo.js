let base = Cylinder(39 / 2, 8);

let main_shaft = Cylinder(16 / 2, 37);
main_shaft = FilletEdges(main_shaft, 1.5, Edges(main_shaft).indices());

let skirt = Cylinder(36 / 2, 13.5);

let base_hole = Cylinder(34 / 2, 6.75);
let main_shaft_hole = Cylinder(10.5 / 2, 38);

// Screw Holes
let screw_hole1 = Union([Cylinder(3.3 / 2, 13.5), Cylinder(6 / 2, 11)]);

let screw_hole2 = Union([Cylinder(3.3 / 2, 13.5), Cylinder(6 / 2, 11)]);

screw_hole1 = Translate([14, 0, 0], screw_hole1);
screw_hole2 = Translate([-14, 0, 0], screw_hole2);

// Notch

let notch = Intersection([
  Cylinder(39 / 2 + 3.5, 5.85),
  Translate([-7.5, 0, 0], Box(15, 200, 5.85)),
]);

let mass = Union([base, main_shaft, skirt, notch]);
mass = Difference(mass, [base_hole, main_shaft_hole, screw_hole1, screw_hole2]);
