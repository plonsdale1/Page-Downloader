const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ ASSERTION PASSED! ✅✅✅");
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 ASSERTION FAILED! 🛑🛑🛑");
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);