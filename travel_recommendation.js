fetch("travel_recommendation_api.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

  const input = document.querySelector(".search-panel input");
  const searchBtn = document.querySelector(".b-search");

  function noramlizeQuery(query) {
    if (query.includes("beach")) return "beach";
    if (query.includes("temple")) return "temple";
    if (query.includes("country")) return "country";
    return null;        
  }

  searchBtn.addEventListener("click", () => {
    const rawQuery = input.value.toLowerCase(); 
    const query = noramlizeQuery(rawQuery);
    console.log("Normalized: ", query);
  });

  