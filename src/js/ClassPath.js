export default class Path {
    constructor(nodes, p5) {
        const currentPoint = {
            x: 0,
            y: 0
        }
        const initPoint = {
            x: 0,
            y: 0
        }
        Object.assign(this, { nodes, p5, currentPoint, initPoint})
    }
    update() {
        this.nodes.forEach((node) => {
            if (this[node.type]) {
                this[node.type](node)
            } else {
                console.log(node)
            }
        })
    }
    M(node) {
        const {
            x,
            y
        } = node
        this.currentPoint = {
            x,
            y
        }
        this.initPoint = {
            x,
            y
        }
    }
    C(node) {
        // curve(x1, y1, x2, y2, x3, y3, x4, y4) 
        // p1 p4 control point

        // bezier(x1, y1, x2, y2, x3, y3, x4, y4)
        // p2 p3 control point
        const {
            x: x1,
            y: y1
        } = this.currentPoint
        const {
            x: x4,
            y: y4,
            x1: x2,
            y1: y2,
            x2: x3,
            y2: y3
        } = node
        this.drawBezier(x1, y1, x2, y2, x3, y3, x4, y4)
        this.currentPoint = {
            x: x4,
            y: y4
        }
    }
    L(node) {
        //     line(x1, y1, x2, y2)
        const {
            x: x1,
            y: y1
        } = this.currentPoint
        const {
            x: x2,
            y: y2
        } = node
        this.drawLine(x1, y1, x2, y2)
        this.currentPoint = {
            x: x2,
            y: y2
        }
    }
    Z() {
        const {
            x: x1,
            y: y1
        } = this.currentPoint
        const {
            x: x2,
            y: y2
        } = this.initPoint
        this.drawLine(x1, y1, x2, y2)
    }
    drawBezier(_x1, _y1, _x2, _y2, _x3, _y3, _x4, _y4) {
        const {x: x1, y: y1} = this.aroundCenterPoint(_x1, _y1, 100)
        const {x: x2, y: y2} = this.aroundCenterPoint(_x2, _y2, 100)
        const {x: x3, y: y3} = this.aroundCenterPoint(_x3, _y3, 100)
        const {x: x4, y: y4} = this.aroundCenterPoint(_x4, _y4, 100)
        this.p5.bezier( x1, y1, x2, y2, x3, y3, x4, y4)
    }
    drawLine(_x1, _y1, _x2, _y2) {
        const {x: x1, y: y1} = this.aroundCenterPoint(_x1, _y1, 100)
        const {x: x2, y: y2} = this.aroundCenterPoint(_x2, _y2, 100)
        this.p5.line(x1, y1, x2, y2)
    }
    aroundCenterPoint(x, y, r) {
        const { mouseX, mouseY } = this.p5
        const mouse = this.p5.createVector(mouseX, mouseY)
        const center = this.p5.createVector(x, y)
        const dist = center.dist(mouse)
        if (dist < r) {
            center.sub(mouse)
            center.mult(r/dist)
            x += center.x
            y += center.y
        }
        return { x, y }
    }
}