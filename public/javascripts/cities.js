const svg = d3.select("svg")

svg
  .attr("width", 960)
  .attr("height", 720)

const placeCities = function() {

}

const selectTags = document.querySelectorAll("select")

selectTags.forEach((tag) => {
  tag.addEventListener("change", function() {
    placeCities()
  })
})