 
let canvasToRecord = null; // 録画対象キャンバス
let isRecording    = false;// 録画開始フラグ
let firstFrame     = 16;   // 録画開始フレーム
let lastFrame      = 48;   // 録画終了フレーム
let capture        = null;
 
function initGIF(canvas, flg, first, last, rate){
	canvasToRecord = canvas;
	isRecording    = flg;
	firstFrame     = first;
	lastFrame      = last;
	capturer = new CCapture({
		framerate: rate,
		format: "gif",
		workersPath: "./libs/p5/addons/gif/",
		verbose: true
	});
}
 
function recordGIF() {
	if(firstFrame > lastFrame){
		if(frameCount === 1){
			console.log("lastFrame must be a larger value than firstFrame");
		}
	}else if (firstFrame < 1){
		if(frameCount === 1){
			console.log("firstFrame must be larger than or equal to a value of 1");
		}
	}else{
		if(isRecording){
			console.log("recording");
			if(frameCount == firstFrame){
				capturer.start();
			}
			if(frameCount < lastFrame){
				capturer.capture(canvasToRecord);
			}else if(frameCount === lastFrame){
				capturer.stop();
				capturer.save();
				isRecording = false;
			}
		}
	}
}