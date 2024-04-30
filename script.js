document.addEventListener("DOMContentLoaded", function () {
    const petList = document.getElementById("petList");
    const petDetail = document.getElementById("petDetail");

    if (!petList || !petDetail) {
        console.error("Required elements are not found in the DOM.");
        return;
    }

    const batchSize = 20;
    let loadedCount = 0;

    const samplePets = [
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },   { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },{ name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
        { name: "Bella", type: "Cat", gender: "Female", age: 3, description: "Loves to cuddle", adoptionFee: 199 },
        { name: "Charlie", type: "Hamster", gender: "Male", age: 1, description: "Nocturnal and playful", adoptionFee: 199 },
        { name: "Max", type: "Dog", gender: "Male", age: 2, description: "Friendly and energetic", adoptionFee: 199 },
       
    ];

    function loadMorePets() {
        if (!petList) return; 
        const nextBatch = samplePets.slice(loadedCount, loadedCount + batchSize);
        nextBatch.forEach((pet) => {
            const petRow = document.createElement("div");
            petRow.className = "pet-row";
            petRow.innerHTML = `
                <img src="https://placekitten.com/50/50" alt="${pet.name}">
                <span>${pet.name} - ${pet.age} years</span>
            `;
            petRow.addEventListener("click", () => showPetDetail(pet));

           
            if (petList) {
                petList.appendChild(petRow);
            } else {
                console.error("petList is null, cannot append child.");
            }
        });

        loadedCount += batchSize;
    }

    function showPetDetail(pet) {
        if (petDetail) {
            petDetail.innerHTML = `
                <h2>${pet.name}</h2>
                <p>Type: ${pet.type}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Age: ${pet.age} years</p>
                <p>Description: ${pet.description}</p>
                <p>Adoption Fee: $${pet.adoptionFee}</p>
            `;
        } else {
            console.error("petDetail is null, cannot update details.");
        }
    }

    // Load initial pets
    loadMorePets();

    // Infinite scrolling with scroll events
    petList.addEventListener("scroll", function () {
        if (petList.scrollTop + petList.clientHeight >= petList.scrollHeight - 10) {
            loadMorePets();
        }
    });
});
