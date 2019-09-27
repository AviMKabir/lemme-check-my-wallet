//--------------------------------
//var API = {getExamples: function(){ return $.ajax({ url: "api/examples", type: "GET"});}};
//--------------------------------

/* eslint-disable camelcase */
var botui = new BotUI("help-bot");
//-------------------------------
//var API = {getExamples: function(){ return $.ajax({ url: "api/examples", type: "GET"});}};
var teachbot = function (){
  $.ajax({ url: "api/examples", type: "GET"}).then(function(dbExamples){
    console.log(dbExamples);
    console.log(dbExamples[0].name);
    console.log(dbExamples[0].budget);
  });
};
teachbot();
//-------------------------------
var name = "Bob";
var budget = 500;

botui.message.add({
  delay: 500,
  loading: true,
  content: "Hi " + name + "!"
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: "You going out tonight?"
  });
}).then(function () { 
  return botui.action.button({
    action: [
      {
        text: "Yes",
        value: "yes"
      },
      {
        text: "No",
        value: "no"
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "yes") {
    message = "How much money do you want to spend? You have " + budget + " left";
    botui.action.text({
      action: {
        sub_type: "number",
        placeholder: "$$$"
      }
    }).then(function (res) { // will be called when it is submitted.
      console.log(res.value); // will print whatever was typed in the field.

      var spentRaw = res.value;
      var spent = parseInt(spentRaw);
      budget = budget - spent;
      console.log(budget);

      botui.message.add({
        delay: 500,
        loading: true,
        content: "That's fine, you'll still have " + budget + " left. Have fun!"
      });

    });
  }



  else if (res.value === "no") {
    message = "Good! Save that money :)";
  }

  return botui.message.add({
    type: "html",
    delay: 1000,
    loading: true,
    content: message
  });
});
