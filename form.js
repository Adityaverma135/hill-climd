class Form{
    constructor(){
        this.input=createInput("")
        this.button=createButton("Play")
        this.greeting=createElement('h2')
        this.title=createElement('h2')
        this.reset=createButton("Reset")
        this.input2=createInput("");
        this.enter=createButton("Enter")
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide()
        this.title.hide();
    }
    hidden(){
        this.input2.hide();
        this.enter.hide();
    }
    display(){
        //this.title.html("HILL CLIMB RACING")
        //this.title.position(displayWidth/2-150,0)

        this.input.position(displayWidth/2-130,displayHeight/2-65)
        this.button.position(displayWidth/2-70,displayHeight/2+20 );
        this.reset.position(displayWidth-100,30)

        this.button.mousePressed(()=>{
            
            this.input.hide();
            this.button.hide();
            this.title.hide();
            player.name = this.input.value();
            playercount+=1;
            player.index = playercount;
            player.playerset();
            player.updatecount(playercount);
            this.greeting.html("" + player.name)
            this.greeting.position(displayWidth/2-500,displayHeight/2-25);
            background(bg3)
          });
          this.reset.mousePressed(()=>{
              game.updatestate(0)
              player.updatecount(0)
              database.ref('/').update({
                players:null
              })
          })
    }
    displaysecond(){
        this.input2.position(displayWidth/2-50,displayHeight/2+175)
        this.enter.position(displayWidth/2+150,displayHeight/2+175)
        
        this.enter.mousePressed(()=>{
            //game.getstate();
            
            player.updatecarno(this.input2.value())
            car5+=1;
            player.getcart();
            player.updatecar(car5);
            //game.updatestate(3)
        })
    }
}