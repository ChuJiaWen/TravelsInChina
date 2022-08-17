new TypeIt("#typeItWuhan", {
   speed: 50

})
  .type("Water", {speed: 150})
  .pause(300)
  .delete(4, {speed: 150})
  .pause(300)
  .type(" University", {speed: 100})
  .pause(500)
  .delete(9, {speed: 150})
  .pause(300)
  .type(" High technology", {speed: 100})
  .pause(500)
  .delete(14, {speed: 200})
  .pause(300)
  .type(" Automobile", {speed: 100})
  .pause(500)
  .delete(9, {speed: 150})
  .pause(300)
  .type(" Noodle", {speed: 100})
  .pause(500)
  .delete(5, {speed: 150})
  .go();
