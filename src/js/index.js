import P5 from 'p5';
import { initOpentype } from '@/js/opentype';
import FontPath from '@/js/ClassPath';
const app = document.querySelector('#app');

new P5(function(p) {
    let fontGenerator;
    let fontPath;
    let slider;
    p.preload = async () => {
        fontGenerator = await initOpentype()
        const path = fontGenerator.getPath('龍大永鬱龘', 100, 500, 100);
        slider = p.createSlider(0, 1, 0, 0.01);
        fontPath = new FontPath(path.commands, Object.assign(p, {slider}))
    }
    
    p.setup = ()=> {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        p.background(100);
        p.noFill();
    }

    p.draw = ()=> {
        p.background(100);
        p.line(350 - 10, 450, 350 + 10, 450);
        p.line(350, 450 - 10, 350, 450 + 10);
        if(fontPath) {
            fontPath.update();
        }
    }

    p.windowResized = ()=> {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

}, app)

