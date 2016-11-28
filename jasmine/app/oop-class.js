module.exports = {
	Animal: function(name, type, sound) {		
				
		this.name = name;		
		this.type = type;
		this.sound;
			
		if(type == "Mammal"){
			this.backbone = true;			
		}else{
			this.backbone = false;
		}
		
		this.makeSound = function(){
			return this.sound = sound;
		}
	},
	
	
	
}