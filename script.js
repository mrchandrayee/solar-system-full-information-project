const planets = {
  sun: {name:"Sun",type:"G-type star",diameter:"1,392,700 km",day:"About 27 Earth days",year:"—",moons:"0",distance:"Center of the system",description:"The star at the center of our solar system. Its gravity holds the planets in orbit and its energy makes life on Earth possible.",color:"sun-dot"},
  mercury: {name:"Mercury",type:"Terrestrial",diameter:"4,879 km",day:"58.6 Earth days",year:"88 Earth days",moons:"0",distance:"57.9 million km",description:"The smallest planet and the closest planet to the Sun. Its heavily cratered surface experiences extreme temperature changes.",color:"mercury-dot"},
  venus: {name:"Venus",type:"Terrestrial",diameter:"12,104 km",day:"243 Earth days",year:"225 Earth days",moons:"0",distance:"108.2 million km",description:"A rocky world with a dense carbon-dioxide atmosphere and intense greenhouse heating. Venus is the hottest planet in the solar system.",color:"venus-dot"},
  earth: {name:"Earth",type:"Terrestrial",diameter:"12,742 km",day:"24 hours",year:"365.25 days",moons:"1",distance:"149.6 million km",description:"Our home planet and the only world currently known to support life. Liquid water covers about 71% of its surface.",color:"earth-dot"},
  mars: {name:"Mars",type:"Terrestrial",diameter:"6,779 km",day:"24.6 hours",year:"687 Earth days",moons:"2",distance:"227.9 million km",description:"The Red Planet has a cold desert climate, giant volcanoes, ancient river features and two small moons: Phobos and Deimos.",color:"mars-dot"},
  jupiter: {name:"Jupiter",type:"Gas giant",diameter:"139,820 km",day:"9.9 hours",year:"11.86 Earth years",moons:"95 confirmed",distance:"778.6 million km",description:"The largest planet. Jupiter is a gas giant with powerful storms, including the long-lived Great Red Spot, and a large family of moons.",color:"jupiter-dot"},
  saturn: {name:"Saturn",type:"Gas giant",diameter:"116,460 km",day:"10.7 hours",year:"29.4 Earth years",moons:"146 confirmed",distance:"1.43 billion km",description:"Famous for its spectacular ring system, Saturn is a gas giant with low average density and many icy and rocky moons.",color:"saturn-dot"},
  uranus: {name:"Uranus",type:"Ice giant",diameter:"50,724 km",day:"17.2 hours",year:"84 Earth years",moons:"28 confirmed",distance:"2.87 billion km",description:"An ice giant with a blue-green atmosphere and an extreme axial tilt, making it appear to rotate on its side.",color:"uranus-dot"},
  neptune: {name:"Neptune",type:"Ice giant",diameter:"49,244 km",day:"16.1 hours",year:"164.8 Earth years",moons:"16 confirmed",distance:"4.5 billion km",description:"The most distant known planet from the Sun. Neptune is a cold, dark ice giant with supersonic winds and a deep blue atmosphere.",color:"neptune-dot"}
};

const fields = {
  name: document.getElementById("planetName"),
  description: document.getElementById("planetDescription"),
  type: document.getElementById("planetType"),
  diameter: document.getElementById("planetDiameter"),
  day: document.getElementById("planetDay"),
  year: document.getElementById("planetYear"),
  moons: document.getElementById("planetMoons"),
  distance: document.getElementById("planetDistance"),
  dot: document.getElementById("panelDot")
};

function selectPlanet(key) {
  const data = planets[key];
  if (!data) return;
  fields.name.textContent = data.name;
  fields.description.textContent = data.description;
  fields.type.textContent = data.type;
  fields.diameter.textContent = data.diameter;
  fields.day.textContent = data.day;
  fields.year.textContent = data.year;
  fields.moons.textContent = data.moons;
  fields.distance.textContent = data.distance;
  fields.dot.className = `planet-dot ${data.color}`;

  document.querySelectorAll("[data-select]").forEach(button => {
    button.classList.toggle("active", button.dataset.select === key);
    button.setAttribute("aria-pressed", button.dataset.select === key ? "true" : "false");
  });
}

document.querySelectorAll("[data-planet]").forEach(button => {
  button.addEventListener("click", () => selectPlanet(button.dataset.planet));
});
document.querySelectorAll("[data-select]").forEach(button => {
  button.addEventListener("click", () => selectPlanet(button.dataset.select));
});

selectPlanet("earth");
