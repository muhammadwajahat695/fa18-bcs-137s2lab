$(function () {
  load();
  $("#Two").click(Two);
  $("#ONE").click(ONE);
});
function load() {
  $.ajax({
    type: "GET",
    url: "https://reqres.in/api/users?page=" + 1,

    success: function (response) {
      $("#Container").html("");
      for (var a = 0; a < response.data.length; a++) {
        $("#Container").append(
          ' <div class="single-data"> <p class="avatar"> <img src="' +
            response.data[a].avatar +
            '" alt=""> </p> <p class="id">' +
            response.data[a].id +
            '</p> <p class="firstname ">' +
            response.data[a].first_name +
            '</p> <p class="lastname ">' +
            response.data[a].last_name +
            '</p> <p class="email">' +
            response.data[a].email +
            "</p> </div>"
        );
      }
    },
  });
}

function Two() {
  $.ajax({
    type: "GET",
    url: "https://reqres.in/api/users?page=" + 2,

    success: function (response) {
      $("#Container").html("");
      for (var a = 0; a < response.data.length; a++) {
        $("#Container").append(
          ' <div class="single-data"> <p class="avatar"> <img src="' +
            response.data[a].avatar +
            '" alt=""> </p> <p class="id">' +
            response.data[a].id +
            '</p> <p class="firstname ">' +
            response.data[a].first_name +
            '</p> <p class="lastname ">' +
            response.data[a].last_name +
            '</p> <p class="email">' +
            response.data[a].email +
            "</p> </div>"
        );
      }
    },
  });
}

function ONE() {
  $.ajax({
    type: "GET",
    url: "https://reqres.in/api/users?page=" + 1,

    success: function (response) {
      $("#Container").html("");
      for (var a = 0; a < response.data.length; a++) {
        $("#Container").append(
          ' <div class="single-data"> <p class="avatar"> <img src="' +
            response.data[a].avatar +
            '" alt=""> </p> <p class="id">' +
            response.data[a].id +
            '</p> <p class="firstname ">' +
            response.data[a].first_name +
            '</p> <p class="lastname ">' +
            response.data[a].last_name +
            '</p> <p class="email">' +
            response.data[a].email +
            "</p> </div>"
        );
      }
    },
  });
}
