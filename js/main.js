(() => {
console.log("Welcome to my SVG project");
 let
svg1 = document.querySelector("#image_1"),
svg2 = document.querySelector("#image_2"),
svg3 = document.querySelector("#image_3"),
svg4 = document.querySelector("#image_4"),
svg5 = document.querySelector("#image_5"),
svg6 = document.querySelector("#image_6"),
svg7 = document.querySelector("#image_7"),
svg8 = document.querySelector("#image_8"),
svg9 = document.querySelector("#image_9"),
svg10 = document.querySelector("#image_10");
function logSvg() {

console.log(this.id);

}
svg1.addEventListener("mouseover", logSvg);
svg2.addEventListener("mouseover", logSvg);
svg3.addEventListener("mouseover", logSvg);
svg3.addEventListener("mouseover", logSvg);
svg4.addEventListener("mouseover", logSvg);
svg5.addEventListener("mouseover", logSvg);
svg6.addEventListener("mouseover", logSvg);
svg7.addEventListener("mouseover", logSvg);
svg8.addEventListener("mouseover", logSvg);
svg9.addEventListener("mouseover", logSvg);
svg10.addEventListener("mouseover", logSvg);

})();
