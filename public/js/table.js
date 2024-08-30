document.body.insertAdjacentHTML(
  "beforeend",
  `<div class="table">
    <div class="blank">
        <div></div>
    </div>
    <div class="header">
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
    </div>
    <div class="period">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
    </div>
    <div class="courses">
    </div>
</div>`
);

const body = document.querySelector("tbody");

let courses = [];

for (const course of body.children) {
  let courseObject = {};
  [...course.children].forEach((info, i) => {
    switch (i % 5) {
      case 0: // id
        courseObject.id = info.innerText;
        break;
      case 1: // name
        courseObject.name = info.innerText;
        break;
      case 2: {
        const splitted = info.innerText.split("/");
        if (splitted.length > 1) courseObject.group = splitted[1];
        courseObject.class = splitted[0];
        break;
      }
      case 3:
        break;
      case 4: {
        const splitted = info.innerText.split("-");
        if (splitted.length > 2) {
          const roomSplit = splitted[2].split(":");
          courseObject.branch = getBranch(roomSplit[0]);
          courseObject.room = roomSplit[1];
        }

        const split1 = splitted[0].split("(");

        courseObject.days = split1[0];
        courseObject.start = split1[1];
        courseObject.end = splitted[1].split(")")[0];
        courses.push(courseObject);
        break;
      }
    }
  });
}

function getBranch(str) {
  if (str === "P.cs2") return 2;
  return 1;
}

const table = document.querySelector(".courses");
const row = 10;
const column = 6;

let area = new Array(2 * row).fill().map(() =>
  Array(column)
    .fill(0)
    .map((v, i) => `b${i}`)
);

const getDay = {
  T2: 0,
  T3: 1,
  T4: 2,
  T5: 3,
  T6: 4,
  T7: 5,
};

var next = column;
for (const course of courses) {
  const col = getDay[course.days];
  const id = course.id;
  const start = 2 * (Number(course.start) - 1);
  const end = 2 * Number(course.end);

  for (let i = start; i < end; i++) area[i][col] = id;

  for (let i = end; i < row * 2; ++i) area[i][col] = `b${next}`;
  next++;

  const cell = document.createElement("div");
  cell.innerHTML = course.name;
  cell.id = course.id;
  cell.style.gridArea = course.id;
  table.appendChild(cell);
}

let filters = {};
for (const r of area) {
  for (const cell of r) {
    if (cell.length < 4) {
      filters[cell] = 1;
    }
  }
}

for (const x in filters) {
  const blank = document.createElement("div");
  blank.id = x;
  blank.style.gridArea = x;
  table.appendChild(blank);
}

table.style.gridTemplateAreas = `${area
  .map((v) => `"${v.join(" ")}"`)
  .join(" ")}`;
