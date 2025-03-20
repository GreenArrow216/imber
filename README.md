# 🌧️ Imber - A Lightweight Rain Animation Plugin

![RainEffect Demo](https://your-demo-link.com/demo.gif) *(Add a demo gif here!)*

Imber is a lightweight, **performance-efficient** rain animation plugin built using **Vanilla JavaScript**. It works with **React, Vue, and pure HTML**.

## 🚀 Features
- 🎨 **Customizable raindrop count, speed, and color**
- ⚡ **Ultra-fast and lightweight** (no dependencies)
- 🌍 **Works in any web framework** (React, Vue, Vanilla JS, etc.)
- 📏 **Auto-resizes on window changes**

---

## 📦 Installation

### **Using NPM** (Recommended for projects)
```sh
npm install @arrowgreen021/imber
```

---

## 🎨 Usage

### **In Vanilla JavaScript**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rain Effect Demo</title>
    <script src="dist/rain-effect.min.js"></script>
    <style> body { margin: 0; background: black; overflow: hidden; } </style>
</head>
<body>
    <canvas id="rainCanvas"></canvas>
    <script>
        const canvas = document.getElementById("rainCanvas");
        new RainEffect(canvas, { dropCount: 200, dropSpeed: 3 });
    </script>
</body>
</html>
```

### **In React**
```tsx
import { useEffect, useRef } from "react";
import RainEffect from "@arrowgreen021/imber";

const RainCanvas = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        new RainEffect(canvasRef.current, { dropCount: 200, dropSpeed: 3 });
    }, []);
    return <canvas ref={canvasRef} style={{ position: "fixed", width: "100%", height: "100%" }} />;
};

export default RainCanvas;
```

### **In Vue.js**
```vue
<template>
  <canvas ref="canvas" class="rain-canvas"></canvas>
</template>

<script>
import { onMounted, ref } from "vue";
import RainEffect from "@arrowgreen021/imber";

export default {
  setup() {
    const canvas = ref(null);
    onMounted(() => {
      new RainEffect(canvas.value, { dropCount: 200, dropSpeed: 3 });
    });
    return { canvas };
  }
};
</script>
```

---

## ⚙️ Options

| Option       | Type    | Default Value | Description |
|-------------|--------|---------------|-------------|
| `dropCount` | number | `100`         | Number of raindrops |
| `dropSpeed` | number | `2`           | Speed of raindrops |
| `dropColor` | string | `rgba(173, 216, 230, 0.6)` | Raindrop color |

Example:
```js
new RainEffect(canvas, { dropCount: 300, dropSpeed: 4, dropColor: "rgba(0, 255, 255, 0.5)" });
```

---

## 📜 License
This project is **MIT Licensed**. Feel free to use and modify!

## 🤝 Contributing
Want to improve RainEffect? Fork this repo and submit a pull request!

---

## 🌟 Star This Repo
If you like this project, **please give it a ⭐ on GitHub!** 😊

