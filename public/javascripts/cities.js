const svg = d3.select("svg")

svg
  .attr("width", 960)
  .attr("height", 720)

const placeCities = function() {
  let valueX = "singlePerson"
  let valueY = "apartment"

  const cities = svg
    .selectAll("g.city")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "city")
    .attr("transform", (d, i) => {
      const x = d.singlePerson
      const y = d.apartment
      return `translate(${x}, ${y})`
    })

  cities
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 15)
}

// Run on load
placeCities()

const selectTags = document.querySelectorAll("select")

selectTags.forEach((tag) => {
  tag.addEventListener("change", function() {
    placeCities()
  })
})