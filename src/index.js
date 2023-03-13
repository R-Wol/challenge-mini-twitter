const input = document.getElementById("Textarea");
const counter = document.getElementById("characterCount");
const PostButton = document.getElementById("submitBtn");

const tweetContainer = document.getElementById("tweeted");

input.addEventListener("input", getTweet);
PostButton.addEventListener("click", postTweet);

function getTweet(e) {
  let characters = e.target.value.length;
  counter.innerText = `${characters}/280`;

  if (characters >= 280) {
    counter.style.color = "red";
  } else if (characters < 280) {
    counter.style.color = "black";
  }
}

function postTweet() {
  if (input.value.length > 280) {
    alert("You are over your text limit");
  } else if (input.value.length == 0) {
    alert("Please enter a tweet");
  } else {
    let row = document.createElement("div");
    row.setAttribute("class", "row");

    let colIcon = document.createElement("div");
    colIcon.setAttribute("class", "col tweetTagIcon");

    let brand = document.createElement("i");
    brand.setAttribute("class", "fa-brands fa-twitter");

    let colUsername = document.createElement("div");
    colUsername.setAttribute("class", "col tweetTagUsername");

    let username = document.createElement("h3");
    username.setAttribute("class", "username");

    let usernameLink = document.createElement("p");

    let timeline = document.createElement("p");
    timeline.setAttribute("id", "timelineTweet");

    let colDelete = document.createElement("div");
    colDelete.setAttribute("class", "col tweetTagDelete");

    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa-solid fa-x");
    deleteIcon.setAttribute("id", "delete");

    // ----

    tweetContainer.appendChild(row);
    row.appendChild(colIcon);
    row.appendChild(colUsername);
    row.appendChild(colDelete);
    colIcon.appendChild(brand);
    colUsername.appendChild(username);
    colUsername.appendChild(usernameLink);
    colUsername.appendChild(timeline);
    colDelete.appendChild(deleteIcon);

    username.innerText = "username";
    usernameLink.innerText = "@username";
    let inputArray = input.value.split(" ");

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].includes("@")) {
        console.log(inputArray[i]);
        inputArray[i] = `<a href="https://www.twitter.com/${inputArray[i].slice(
          1
        )}" target=_blank>${inputArray[i]}</a>`;
      }
    }

    console.log(inputArray);
    timeline.innerHTML = inputArray.join(" ");

    deleteIcon.addEventListener("click", () => {
      let response = confirm("Are you sure you want to delete this tweet?");
      if (response) {
        row.remove();
        alert("Tweet has been deleted.");
      }
    });
  }
}
