let canvas = document.getElementById('matrix');

let context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontsize = 16;
const columns = canvas.width/fontsize;

const raindrops = [];

for(let i = 0; i < columns; i++){
    raindrops[i] = 1;
}

const draw = () =>{
    context.fillStyle = 'rgba(0,0,0,0.05)';
    context.fillRect(0,0,canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontsize + 'px monospace';

    for(let i = 0; i < raindrops.length; i++){
        const text = alphabet.charAt(Math.floor(Math.random()*alphabet.length));
        context.fillText(text, i*fontsize, raindrops[i]*fontsize);

        if(raindrops[i]*fontsize > canvas.height && Math.random() > 0.975){
            raindrops[i] = 0;
        }
        raindrops[i]++;
    }
};
setInterval(draw, 30);
