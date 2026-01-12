let ball;
let balls = [];
let colorLists = [
	[
		"3d5a80-98c1d9-e0fbfc-ee6c4d-293241".split("-").map(a=>"#"+a),
		"545e75-63adf2-a7cced-304d6d-82a0bc".split("-").map(a=>"#"+a),
		"e3170a-e16036-d6a99a-d6cbc1-cdd6d0".split("-").map(a=>"#"+a),
		"ffffff-84dcc6-a5ffd6-ffa69e-ff686b".split("-").map(a=>"#"+a),
	 	"61210f-ea2b1f-edae49-f9df74-f9edcc".split("-").map(a=>"#"+a),
	],
	[
		["#000","#444","#ccc"],
		["#111","#555","#ddd"],
		["#222","#666","#eee"],
		["#333","#777","#fff"],
	]
];
let colorListsId;
let colorList;

class Ball{
	constructor(p,v,a,r,color){
		this.p=p;
		this.v=v;
		this.a=a;
		this.r=r;
		this.color=random(colorList);
		this.rotateFactor=random([-0.8,0.8]);
	}
	update(){
		this.p.add(this.v);
		this.v.add(this.a);
		this.r*=0.982;
		this.v.mult(0.999);
		this.v.rotate(this.rotateFactor);
	}
	draw(){
		fill(this.color);
		noStroke();
		circle(this.p.x,this.p.y,this.r);
	}
}

function setup() {
	createCanvas(windowWidth,400);
	background(0);

	if (random()<0.2){
		colorListsId = 0;
	}else{
		colorListsId = 1;
	}
	colorList = random(colorLists[colorListsId]);
	
	for(let i=0;i<100;i++){
		let newBall = new Ball(
			createVector(width/2,height/2),
			createVector(6,0).rotate(random(2*PI)),
			createVector(0.3,0).rotate(random(2*PI)),
			random(200,500)
		);
		balls.push(newBall);
	}
}

function draw() {
	for(let i=0;i<balls.length;i++){
		balls[i].draw();
		balls[i].update();
	}
	
	balls=balls.filter(ball=>ball.r>15);
	
	if(frameCount%1==0 && frameCount<30){
		colorList = random(colorLists[colorListsId]);
		
		for(let i=0;i<100;i++){
			let newBall = new Ball(
				createVector(width/2,height/2),
				createVector(6,0).rotate(random(2*PI)),
				createVector(0.3,0).rotate(random(2*PI)),
				random(200,500)
			);
			balls.push(newBall);
		}
	}

	// 背景
	if(frameCount<5){
		
			noFill();
			stroke(random(180,255));
			strokeWeight(random(8));
			
			for(let i=0;i<4;i++){
				line(random(width),0,random(width),height);
				line(0,random(height),width,random(height));
			}
	}
	
}

function windowResized() {
	resizeCanvas(windowWidth,400);
	background(0);
}