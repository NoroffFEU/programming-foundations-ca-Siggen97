coffeeMug = {
    brand: "Costa", 
    color: "white",
    capasity: 12,
    isInsulated: true,
    materials: ["ceramic", "silicone"],
    hasHandler: true,
};
// function
console.log (coffeeMug.brand); Output: "Costa"
console.log (coffeeMug.color); Output: "white"
console.log (coffeeMug.capasity); Output: 12
console.log (coffeeMug.isInsulated); Output: true
console.log (coffeeMug.materials); Output: ["ceramic", "silicone"]
console.log (coffeeMug.hasHandler); Output: true


smartphone = {
    brand: "Apple", 
    model: "iPhone 12",
    color: "white",
    screen: {
        size: 6.1,
        resolution: "2532x1170",
        isOLED: true
    },
    battery: {
        capasity: 311,
        isRemovable: true,
    },
    cameras: [
        {
            position: "rear",
            resolution: "12 MP",
            isWideAngle: true,
        },
        {
            position: "front",
            resolution: "12 MP",
            hasPortraitMode: true
        }
    ],
    hasFaceID: true
};