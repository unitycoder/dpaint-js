let process = function(source,target){
    let w = source.width;
    let h = source.height;
    target.clearRect(0,0,target.canvas.width,target.canvas.height);
    target.drawImage(source,0,0);

    function lineSet(color,alpha){
        let x = Math.floor(Math.random()*w);
        let y = Math.floor(Math.random()*h);

        let x_len = 35 + Math.random()*10;
        let y_len = -2 + Math.random()*2;

        let dist = 4;
        for (let i=0;i<4;i++){
            let d = dist*i;
            line(x,y+d,x+x_len,y+y_len+d,toRGBA(color,alpha/(1<<i)));
        }
    }

    function line(x,y,x2,y2,color){
        target.strokeStyle = color;
        target.beginPath();
        target.moveTo(x,y);
        target.lineTo(x2,y2);
        target.closePath();
        target.stroke();
    }

    for (let i = 0;i<500;i++){
        lineSet([0,0,0],0.1);
        lineSet([0,0,0],0.2);
        lineSet([255,255,255],0.08);
    }

    function toRGBA(color,alpha){
        return "rgba("+color[0]+","+color[1]+","+color[2]+","+alpha+")"
    }

}



export default process;