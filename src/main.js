import SceneBouncingBubbles from "./js/scenarios/SceneBouncingBubbles"
import {askMotionAccess} from "./js/Utils/DeviceAccess";

const scene2d = new SceneBouncingBubbles("canvas-scene")
const scene2d2 = new SceneBouncingBubbles("canvas-scene2")

/** motion sensor authorization */
const btn = document.getElementById("btn-access")
btn.addEventListener("click", function () {
    askMotionAccess()
    console.log("access")
}, false)
