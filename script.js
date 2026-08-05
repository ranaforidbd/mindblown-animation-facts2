const facts = [
{
title:"🐭 Mickey Mouse",
category:"Disney",
image:"https://picsum.photos/400/250?random=1",
text:"Mickey Mouse first appeared in 1928 in Steamboat Willie."
},

{
title:"❄️ Frozen",
category:"Disney",
image:"https://picsum.photos/400/250?random=2",
text:"Frozen became one of Disney's biggest animated movies."
},

{
title:"🤠 Toy Story",
category:"Pixar",
image:"https://picsum.photos/400/250?random=3",
text:"Toy Story was the world's first fully CGI feature film."
},

{
title:"🧽 SpongeBob",
category:"Nickelodeon",
image:"https://picsum.photos/400/250?random=4",
text:"SpongeBob's creator was a marine biology teacher."
},

{
title:"🦁 The Lion King",
category:"Disney",
image:"https://picsum.photos/400/250?random=5",
text:"The Lion King was inspired by Shakespeare's Hamlet."
}
];
const factsContainer = document.getElementById("factsContainer");
const searchInput = document.getElementById("search");

function displayFacts(list) {
    factsContainer.innerHTML = "";

    list.forEach(fact => {
        factsContainer.innerHTML += `
            <div class="card">
                <img src="${fact.image}" alt="${fact.title}">
                <div class="card-content">
                    <span class="category">${fact.category}</span>
                    <h2>${fact.title}</h2>
                    <p>${fact.text}</p>
                </div>
            </div>
        `;
    });
}// Search functionality
if (searchInput) {
    searchInput.addEventListener("input", function () {
        const keyword = this.value.toLowerCase();

        const filtered = facts.filter(fact =>
            fact.title.toLowerCase().includes(keyword) ||
            fact.text.toLowerCase().includes(keyword) ||
            fact.category.toLowerCase().includes(keyword)
        );

        displayFacts(filtered);
    });
}

// Show all facts when page loads
displayFacts(facts);
// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
