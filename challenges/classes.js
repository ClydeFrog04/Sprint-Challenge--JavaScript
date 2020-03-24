// 1. Copy and paste your prototype in here and refactor into class syntax.

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    };

}

class CubeMaker extends CuboidMaker{
    //This is for the stretch problem, it says to find out the formulas for volume and surface area but isn't that what we already wrote for the
    //main question? Maybe I am missing something but I think that is already done. SO I am just re-using them. But this demonstrates class
    //inheritance at least.
    constructor(length, width, height) {
        super(length, width, height);
    }
}


// Test your volume and surfaceArea methods by uncommenting the logs below:
const cuboid = new CuboidMaker(4,5,5);
const anotherCuboid = new CubeMaker(3,5,8);
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(anotherCuboid.volume());//120
console.log(anotherCuboid.surfaceArea());//158

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.