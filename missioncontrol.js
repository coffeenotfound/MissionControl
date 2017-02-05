
window.onload = function() {
	// init canvas
	var gl = NebGL.createGLForId("game-canvas", { fullwindow: true, depth: true, alpha: false });
	var canvas = gl.canvas;
	
	MissionControl.gl = gl;
	MissionControl.canvas = canvas;
	
	// init game
	MissionControl.init();
	
	// start loop
	requestAnimationFrame(MissionControl.frame);
};

var MissionControl = {
	self: null,
	gl: null,
	canvas: null,
	
	frameCounter: 0,
	
	init: function() {
		self = this;
	},
	
	frame: function() {
		// request next frame
		requestAnimationFrame(self.frame);
		
		// make canvas visible
		if(self.frameCounter == 0) {
			self.canvas.setAttribute("game-initialized", "true");
		}
		
		// increment frame counter
		self.frameCounter++;
	},
};

(function() {
	// class Scene
	this.Scene = function() {
		
	};
	this.Scene.prototype = {
		_entities: [],
		
		update: function(delta) {
			
		},
		
		draw: function() {
			
		},
		
		spawnEntity: function(ent) {
			_entities.push(ent);
		},
	};
	
	// class Entity
	this.Entity = function() {
		
	};
	this.Entity.prototype = {
		
	};
}).call(MissionControl);
