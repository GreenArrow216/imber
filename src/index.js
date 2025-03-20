(function (global, factory) {
    if (typeof module !== "undefined" && module.exports) {
        module.exports = factory(); // CommonJS (Node.js)
    } else if (typeof define === "function" && define.amd) {
        define([], factory); // AMD (RequireJS)
    } else {
        global.RainEffect = factory(); // Browser Global
    }
})(typeof window !== "undefined" ? window : this, function () {
    class RainEffect {
        /**
         * @param {HTMLCanvasElement} canvas 
         * @param {Object} [options={}]
         * @param {number} [options.dropCount=100]
         * @param {number} [options.dropSpeed=2]
         * @param {string} [options.dropColor="rgba(173, 216, 230, 0.6)"]
         */
        constructor(canvas, options = {}) {
            if (!(canvas instanceof HTMLCanvasElement)) {
                throw new Error("Invalid canvas element");
            }

            this.canvas = canvas;
            this.ctx = canvas.getContext("2d");

            this.options = {
                dropCount: options.dropCount || 100,
                dropSpeed: options.dropSpeed || 2,
                dropColor: options.dropColor || "rgba(173, 216, 230, 0.6)"
            };

            this.drops = [];
            this.init();
        }

        init() {
            this.resizeCanvas();
            window.addEventListener("resize", () => this.resizeCanvas());

            for (let i = 0; i < this.options.dropCount; i++) {
                this.drops.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    speed: Math.random() * this.options.dropSpeed + 1,
                    length: Math.random() * 10 + 10
                });
            }

            this.animate();
        }

        resizeCanvas() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }

        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.ctx.strokeStyle = this.options.dropColor;
            this.ctx.lineWidth = 1.5;

            for (let drop of this.drops) {
                this.ctx.beginPath();
                this.ctx.moveTo(drop.x, drop.y);
                this.ctx.lineTo(drop.x, drop.y + drop.length);
                this.ctx.stroke();

                drop.y += drop.speed;
                if (drop.y > this.canvas.height) {
                    drop.y = -drop.length;
                    drop.x = Math.random() * this.canvas.width;
                }
            }

            requestAnimationFrame(() => this.animate());
        }
    }

    return RainEffect;
});
