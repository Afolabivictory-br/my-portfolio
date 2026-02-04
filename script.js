const navbar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const skillSection = document.querySelector('.skill');
const skillBars = document.querySelectorAll('.percent');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
      });
      observer.unobserve(skillSection);
    }
  });
}, {
  threshold: 0.5
});
 
observer.observe(skillSection);

const menu = [
  {
    id: 1,
    title: "Web Design",
    category: "Web Design",
    img: "./images/My-portfolio-01-07-2026_11_12_PM.png",
  },
  {
    id: 2,
    title: "Web Design",
    category: "Web Development",
    img: "./images/screencapture-127-0-0-1-5500-Assignment-on-html-signup-html-2026-01-07-23_14_24.png",
  },
  {
    id: 3,
    title: "Web Design",
    category: "Web Design",
    img: "./images/screencapture-127-0-0-1-5500-coffee-project-index-html-2026-01-07-23_12_57.png",
  },
  {
    id: 4,
    title: "Web Design",
    category: "Web Development",
    img: "./images/screencapture-127-0-0-1-5500-revision1-facebook-signin-html-2026-01-07-23_11_09.png",
  },
  {
    id: 5,
    title: "Web Design",
    category: "Web Development",
    img: "./images/screencapture-127-0-0-1-5500-revision1-mini-project-index-html-2026-01-07-23_09_28.png",
  },
  {
    id: 6,
    title: "Web Design",
    category: "Web Design",
    img: "./images/screencapture-127-0-0-1-5500-revision1-spotify-signin-html-2026-01-07-23_10_25.png",
  }
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// remove the static item and show everything
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
      <article class="work-pic">
        <img src="${item.img}" class="photo" alt="${item.title}" />
        <div class="item-info">
          <h4>${item.title}</h4>
          <i class="fa-solid fa-plus"></i>
        </div>
      </article>
    `;
  }).join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ["All"]);

  const categoryBtns = categories.map(function (category) {
    return `
      <button class="filter-btn" type="button" data-id="${category}">
        ${category}
      </button>
    `;
  }).join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}


const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "./images/78cb7944abc6030c2ef07d991fdb56afd1a06c04-1200x800.webp",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up."
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "./images/bigstock-Portrait-of-a-senior-businessm-135280775.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice."
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "./images/images.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat."
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
