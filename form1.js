class Formsecond{
    constructor(){
        this.input=createInput("")
        this.button=createButton("Play")

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide()
        this.title.hide();
    }
    display(){
        //this.title.html("HILL CLIMB RACING")
        //this.title.position(displayWidth/2-150,0)

        this.input.position(displayWidth/2-130,displayHeight/2-65)
        this.button.position(displayWidth/2-70,displayHeight/2+20 );
    }
}