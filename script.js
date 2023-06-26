// Tayyaba Noor | 309233
// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  var apiKey = '065fba1f4581e1028dead44e4b58216c';
  var url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apiKey;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var articles = data.articles;
      var container = document.getElementById("food");
      for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        var div = document.createElement("div");
        div.style.width = "300px"; 
        div.style.border = "1px solid #ccc"; 
        div.style.padding = "10px"; 
        div.style.margin = "40px"; 
        div.style.textAlign = "center";
        if (i < 2) {
          div.style.margin = "0 auto"; 
        }
        var img = document.createElement("img");
        img.src = article.image;
        img.alt = article.title;
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        var h3 = document.createElement("h3");
        h3.textContent = article.title;
        var p1 = document.createElement("p");
        p1.textContent = article.description;
        var p2 = document.createElement("p");
        p2.textContent = article.publishedAt;
        // Add hover effect 
        div.addEventListener("mouseover", function () {
          this.style.backgroundColor = "#f0f0f0"; 
        });
        div.addEventListener("mouseout", function () {
          this.style.backgroundColor = "";
        });
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p1);
        div.appendChild(p2);
        container.appendChild(div);
      }
    })
    .catch(function (error) {
      console.log("Error fetching news: ", error);
    });
  