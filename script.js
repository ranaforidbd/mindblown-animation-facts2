const facts = [
{
title:"🐭 Mickey Mouse",
category:"Disney",
image:"https://picsum.photos/400/250?random=1",
text:"Mickey Mouse first appeared in 1928 in Steamboat Willie."
},

{
title:"❄ Frozen",
category:"Disney",
image:"https://picsum.photos/400/250?random=2",
text:"Frozen became one of Disney's biggest animated movies."
},

{
title:"🎥 Toy Story",
category:"Pixar",
image:"https://picsum.photos/400/250?random=3",
text:"Toy Story was the world's first fully computer animated movie."
},

{
title:"🧽 SpongeBob",
category:"Cartoon",
image:"https://picsum.photos/400/250?random=4",
text:"The creator of SpongeBob was a marine biology teacher."
},

{
title:"🐼 Kung Fu Panda",
category:"DreamWorks",
image:"https://picsum.photos/400/250?random=5",
text:"Po's facial expressions required many animators."
},

{
title:"⚡ Naruto",
category:"Anime",
image:"https://picsum.photos/400/250?random=6",
text:"Naruto has over 700 manga chapters."
}
];

const container=document.getElementById("factsContainer");

facts.forEach(fact=>{

container.innerHTML+=`

<div class="card">

<img src="${fact.image}" width="100%">

<h3>${fact.title}</h3>

<p>${fact.text}</p>

<small>${fact.category}</small>

</div>

`;

});
