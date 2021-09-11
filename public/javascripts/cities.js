const svg = d3.select("svg")

svg
  .attr("width", 960)
  .attr("height", 720)

const placeCities = function() {
  let valueX = "singlePerson"
  let valueY = "apartment"

  const scaleX = d3.scaleLinear()
    .domain([0, 1500])
    .range([100, 860])

  const scaleY = d3.scaleLinear()
    .domain([0, 4000])
    .range([620, 100])

  const cities = svg
    .selectAll("g.city")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "city")
    .attr("transform", (d, i) => {
      const x = scaleX(d.singlePerson)
      const y = scaleY(d.apartment)
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