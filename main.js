const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://i.ebayimg.com/images/g/JR8AAOSwp6xhoT6y/s-l1200.webp",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "https://cat-world.com/wp-content/uploads/2022/05/brown-kitten.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Godzilla_%281954%29.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://www.jacksonville.com/gcdn/authoring/2016/11/27/NFTU/ghows-LK-656c44ac-0429-4952-bd73-273d734596e9-7fe3190c.jpeg?crop=710,402,x0,y29&width=710&height=355&format=pjpg&auto=webp"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://www.danspapers.com/wp-content/uploads/2018/06/KittyCatDiscus.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://ddgimgs-f43e.kxcdn.com/2088668/sbonhj_31a508b87e4404a48d4db16e67a6064782493e12.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://wallpaperaccess.com/full/94003.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://i0.wp.com/outwardhound.com/furtropolis/wp-content/uploads/2020/10/kitten.jpg?resize=640%2C335&ssl=1"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119"
    }
  ];
  
  const petCard = document.querySelector("#cards");
 
  const filterPets = (type) => {
    const filteredPets = pets.filter((pet) => pet.type === type)
    cardsOnDom(filteredPets);
  }

function setActiveButton(activeButton) {
  document.getElementById("catBtn").classList.remove("btn-outline-primary");
  document.getElementById("catBtn").classList.add("btn-outline-secondary");
  document.getElementById("dogBtn").classList.remove("btn-outline-primary");
  document.getElementById("dogBtn").classList.add("btn-outline-secondary");
  document.getElementById("dinoBtn").classList.remove("btn-outline-primary");
  document.getElementById("dinoBtn").classList.add("btn-outline-secondary");
  document.getElementById("allBtn").classList.remove("btn-outline-primary");
  document.getElementById("allBtn").classList.add("btn-outline-secondary");

  document.getElementById(activeButton).classList.add("btn-outline-primary");
  document.getElementById(activeButton).classList.remove("btn-outline-secondary");
}

  const filterContainer = document.querySelector("#filter-container");
  filterContainer.addEventListener('click', (e) => {
    if (e.target.id === "catBtn") {
      filterPets("cat");
      setActiveButton("catBtn");
    } else if (e.target.id === "dogBtn") {
      filterPets("dog");
      setActiveButton("dogBtn");
    } else if (e.target.id === "dinoBtn") {
      filterPets("dino");
      setActiveButton("dinoBtn");
    } else {
      setActiveButton("allBtn");
      cardsOnDom(pets);
    }
  });

  const cardsOnDom = (filtered) => {

  let domString = "";
  for (const pet of filtered) {
  
    domString += `
    <div class="col">
      <div class="card text-center h-100">
        <h5 class="card-header">${pet.name}</h5>
        <div class="card-body">
          <img src=${pet.imageUrl} class="card-img" alt=${pet.name}>
            <p class="card-text">
              ${pet.color} 
              <br />
              ${pet.specialSkill}
            </p>
        </div>
        <div class="card-footer ${pet.color}">${pet.type}</div>
        <button type="button" id="delete-btn-pet--${pet.id}">Delete Pet</button>
      </div>
    </div>`;
  };
  
  petCard.innerHTML = domString;
  
} 

cardsOnDom(pets);
setActiveButton("allBtn");


const petForm = () => {
  let domString = ""

  domString += `
  <form id="pet-form">
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="nameHelp" />
  </div>
  <div class="mb-3">
    <label for="color" class="form-label">Color</label>
    <input type="text" class="form-control" id="color" aria-describedby="colorHelp" />
  </div>
  <div class="mb-3">
    <label for="specialSkill" class="form-label">Special Skill</label>
    <input
      type="text"
      class="form-control"
      id="specialSkill"
      aria-describedby="specialSkillHelp"
    />
  </div>
  <div class="mb-3">
    <label for="type" class="form-label">Type</label>
    <input type="text" class="form-control" id="type" aria-describedby="typeHelp" />
  </div>
  <div class="mb-3">
    <label for="imageURL" class="form-label">Image URL</label>
    <input type="text" class="form-control" id="imageURL" aria-describedby="imageURLHelp" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `;

   document.querySelector("form").addEventListener("submit", createPet);
   const formContainer = document.querySelector("#form-container");
   formContainer.innerHTML = domString;
   
 
};

const showFormButton = document.getElementById("show-form-button");
showFormButton.addEventListener("click", (e) => {
  e.preventDefault(); 
  petForm();
});

const createPet = (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#name");
  const colorInput = document.querySelector("#color");
  const specialSkillInput = document.querySelector("#specialSkill");
  const typeInput = document.querySelector("#type");
  const imageUrlInput = document.querySelector("#imageURL");

  
  if (
    nameInput.value.trim() === "" ||
    colorInput.value.trim() === "" ||
    specialSkillInput.value.trim() === "" ||
    typeInput.value.trim() === "" ||
    imageUrlInput.value.trim() === ""
  ) {
    
    alert("Please fill out all fields before submitting.");
    return;
  }

  const petObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#imageURL").value,
  };

  pets.push(petObj);
  cardsOnDom(pets);;

    document.querySelector("#pet-form").classList.add("d-none");
    
    document.querySelector("#pet-form").reset();
    
    
  
};




petCard.addEventListener("click", (e) => {
  if (e.target.id.includes("delete-btn-pet")) {
    const [, int] = e.target.id.split("--");
    const idToDelete = Number(int);
    const index = pets.findIndex((pet) => pet.id === idToDelete);

    if (index !== -1) {
      pets.splice(index, 1);
      cardsOnDom(pets);
    }


  }
});













 
