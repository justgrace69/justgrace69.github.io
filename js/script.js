"sting";

let getRandomNumber = function (size) {
   return Math.floor(Math.random() * size);
};

let getDistance = function (event, target) {
   let diffX = event.offsetX - target.x;
   let diffY = event.offsetY - target.y;
   return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

let getDistanceHint = function (distance) {
   if (distance < 50) {
      return "Обожжешься!";
   } else if (distance < 100) {
      return "Очень горячо";
   } else if (distance < 150) {
      return "Горячо";
   } else if (distance < 200) {
      return "Тепло";
   } else if (distance < 250) {
      return "Холодно";
   } else if (distance < 350) {
      return "Очень холодно";
   } else {
      return "Замерзнешь!";
   }
};

let width = 500,
   height = 500,
   clicks = 0,
   clickLimit = 30,
   target = {
      x: getRandomNumber(width),
      y: getRandomNumber(height)
   };


$("#map").click(function (event) {
   clicks++;

   if (clicks > clickLimit) {
      alert("Игра окончена");
      let remain = confirm("Начать заного?");
      if (remain === true) {
         location.reload(true);
      }
      return;
   }

   let distance = getDistance(event, target),
      distanceHint = getDistanceHint(distance);
   $("#heading").text(distanceHint + " " + clicks + " клик(-ов)");
   if (distance < 20) {
      alert("Клад найден! Сделано кликов: " + clicks);
      location.reload(true);
   }
});








































