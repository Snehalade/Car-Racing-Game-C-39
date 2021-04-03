class Form 
{

  constructor() 
  {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.title = createElement("h1");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  this.title.hide();
  }

  display()
  {
    
    this.title.html("Car Racing Game");

   this.title.position(displayWidth/2-100, 0);

    this.input.position(displayWidth/2-60, displayHeight/2-300);
    
    this.button.position(displayWidth/2, displayHeight/2-250);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-60, displayHeight/2-300);
    });

  }
}
