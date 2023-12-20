//const container = docunment.querySelector('.container');
const cont = document.getElementById("cont");
const user_cont = document.getElementById("listid");
const user_image = document.querySelector(".user_image");
const user_image_opener = document.querySelector(
  ".user_image_figure_container"
);
const fetchbtn = document.getElementById("btndata");
const data_cont = document.getElementById("data_cont");

var txt = "";
var desc = "";
var no = 0;
var myindex = -1;
var result_info = "";
var title = "";
const arrlist = [
  {
    name: "John",
    age: "25",
    pic: "images/Teen 1.jpeg",
    description:
      "A young talented man whose passion and determination has won the admiration of a good number of clients in this industry",
  },
  {
    name: "Mary",
    age: "15",
    pic: "images/Teen 2.jpeg",
    description:
      "A bright young female artist whose vocal performance has stunned fans and inspired other upcoming vocal artists. She is just 15yrs old!",
  },
  {
    name: "Peace",
    age: "17",
    pic: "images/Teen 3.jpeg",
    description:
      "A charming young lady with a sense of tranquility amidst humour. Welcome the young angel Peace who is as peaceful as a dove!",
  },
  {
    name: "Prosper",
    age: "9",
    pic: "images/Teen 4.jpeg",
    description:
      "This young lad has stunned  a good number of fans with an already three-star-hit record just at the little age of nine. Go on, Prosper!",
  },
  {
    name: "Larry",
    age: "21",
    pic: "images/Teen 5.jpeg",
    description:
      "Lots of love pouring in from fans worldwide with a great hit albumb titled 'Little Rock'. He surely belongs to a younger generation that never ceases to amaze everyone.",
  },
  {
    name: "Prince",
    age: "22",
    pic: "images/Teen 6.jpg",
    description:
      "Like the Prince of Bel-Air, this young prodigy has earned a nickname tagged 'DAZZLER' with his portrait and fine-art skills. Check out his latest works on Youtube.",
  },
  {
    name: "Alice",
    age: "23",
    pic: "images/Teen 7.jpg",
    description:
      "Welcome 'Alice in Talentland', this elegant beauty with amazing artistic abilities, she is a sure bet for the entertainment industry. Check her out on the show 'The Slide'.",
  },
  {
    name: "Micheal",
    age: "19",
    pic: "images/Teen 8.jpg",
    description:
      "There are just few exceptional talents who are born with dancing abilities. However, no one does it so stylishly like Michael the JMAN. Hi, there Mickey!",
  },
  {
    name: "Lucky",
    age: "24",
    pic: "images/Teen 9.jpg",
    description:
      "Among the legendary seven lucky kids, he remains one of the brightest and shinning legendary kids to have ever won the cast and role of twenty four consecutive roles in the 'SEVEN LUCKY KIDS' franchise!",
  },
  {
    name: "Richard",
    age: "22",
    pic: "images/Teen 10.jpg",
    description:
      "Elegant, tall and handsome, Richard stands as one of the most influential and intelligent stars in the family series 'Little Fantasy'.",
  },
  {
    name: "Kenny",
    age: "19",
    description:
      "When it comes to standalone comdeies and sitcoms, Kenny is at his best with his humourous and transitional personality. What a talent!",
  },
  {
    name: "Vincent",
    age: "22",
    description:
      "This talented dude has made a lot of controversies with his acting and solo career earning recognition as one of the rising young actors!",
  },
  {
    name: "Peter",
    age: "21",
    description:
      'A young talented star with instrumental abilities earning a supportive role in the young "Trident", a famous young musical club with the best hits from over the continents.',
  },
  {
    name: "Rick",
    age: "25",
    description:
      'He has held a lot of supportive roles in classics as "SUPER DUDES, SLIDES, A DIFFERENT BALL GAME" amongst others. Living up to a good reputation, he holds the ere and admiration of movie colleagues and fans alike. Well done, Ricky!',
  },
];
const newlist = arrlist.map(listing).join("");

fetchbtn.addEventListener("click", () => {
  fetchdata();
  //displayData();
});

var myarr = [];
var aa = [];

const fetchdata = async () => {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((listy) => {
        data_cont.insertAdjacentHTML("beforeend", `<li>${listy.title}</li>`); //= datadisplay;
      })
    )
    .catch((err) => console.log(err));
};

function linking(item) {
  mylist = document.createElement("li");
  mylist.id = item.id;
  title = item.title;
  mylist.append(title);
  data_cont.append(mylist);
}

function listing(value, id_user) {
  names = document.createElement("li");
  names.id = id_user;
  names.desc = value.description;
  names.username = value.name;
  names.age = value.age;
  names.image = value.pic;
  let single = arrlist.filter((user) => user);

  txt = value.name; //"<li class='vals'>"+ (ind+1) + "." + " " + value + "</li>"// +"<br/>"
  desc = value.description;
  names.append(txt);
  cont.append(names);

  return txt;
}

const mynames = document.querySelectorAll("li");

{
  mynames.forEach((mylist, listno) => {
    mylist.addEventListener("click", (e) => {
      initialize();
      myindex = listno;
      user_cont.innerHTML =
        "<p>" +
        mylist.username +
        "</p>" +
        "<blockquote>" +
        mylist.desc +
        "</blockquote>" +
        "<p>" +
        "Age:" +
        " " +
        mylist.age +
        "years" +
        "</p>";
      user_image.src = mylist.image;
      e.target.id === mylist.id.toString()
        ? mylist.classList.toggle("selecting")
        : mylist.classList.remove("selecting");
    });
  });

  mynames.forEach((teen, id_no) => {
    teen.addEventListener("mouseover", (e) => {
      initialize();
      myindex = id_no;
      user_cont.innerHTML =
        "<p>" +
        teen.username +
        "</p>" +
        "<blockquote>" +
        teen.desc +
        "</blockquote>" +
        "<p>" +
        "Age:" +
        " " +
        teen.age +
        "years" +
        "</p>";
      user_image.src = teen.image;
      e.target.id === teen.id.toString()
        ? teen.classList.toggle("selecting")
        : teen.classList.remove("selecting");
    });
  });
}
initialize = () => {
  mynames.forEach((user) => {
    return user.classList.remove("selecting");
  });
};

listselect = (list_no) => {
  mynames.forEach((user, index) => {
    index = list_no;
    index == user.id &&
      user.classList.add("selecting") &&
      (user_cont.innerHTML =
        "<p style='padding:10px 20px; font-size:25px;'>" +
        "</p>" +
        "<blockquote style='padding:10px 20px; font-size:25px;'>" +
        user.desc +
        "</blockquote>");
  });
  return list_no;
};

keyhit = (e) => {
  switch (e.key) {
    case "ArrowUp": {
      if (myindex > 0) {
        initialize();
        myindex -= 1;
        listselect(myindex);
        user_cont.innerHTML =
          "<p>" +
          arrlist[myindex].name +
          "</p>" +
          "<blockquote>" +
          arrlist[myindex].description +
          "</blockquote>" +
          "<p>" +
          "Age:" +
          " " +
          arrlist[myindex].age +
          "years" +
          "</p>";
        //mynames.forEach((myuser,index)=>{index=myindex+1; index== myuser.id && (myuser.classList.toggle('highlight')); myuser.classList.remove('highlight')})
        user_image.src = arrlist[myindex].pic;
        //user_image_opener.classList.toggle('close_image');
      }

      break;
    }
    case "ArrowDown": {
      if (myindex < mynames.length - 1) {
        initialize();
        myindex += 1;
        listselect(myindex);
        user_cont.innerHTML =
          "<p>" +
          arrlist[myindex].name +
          "</p>" +
          "<blockquote>" +
          arrlist[myindex].description +
          "</blockquote>" +
          "<p>" +
          "Age:" +
          " " +
          arrlist[myindex].age +
          "years" +
          "</p>";
        user_image.src = arrlist[myindex].pic;
      }

      break;
    }
    default: {
      return;
    }
  }
};

document.addEventListener("keydown", keyhit);
