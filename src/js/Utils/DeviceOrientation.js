import EventEmitter from "./EventEmitter";

export default class DeviceOrientation extends EventEmitter{
    constructor() {
        super();

        this.alpha = 0; // around Z axis
        this.beta = 0; // around X axis
        this.gamma = 0; // around Y axis

        /** permission */
        if (navigator.permissions) {
            Promise.all(
                [navigator.permissions.query({ name: "accelerometer" }),
                    navigator.permissions.query({ name: "magnetometer" }),
                    navigator.permissions.query({ name: "gyroscope" })])
                .then(results => {
                    if (results.every(
                        result => result.state === "granted")) {
                        this.init()
                    } else {
                        console.log("Permission to use sensor was denied.")
                    }
                }).catch(err => {
                console.log("Integration with Permissions API is not enabled, still try to start app.")
                this.init()
            })
        } else {
            console.log("No Permissions API, still try to start app.")
            this.init()
        }
    }

    init() {
        window.addEventListener('deviceorientation', (event) => {
            this.alpha = event.alpha;
            this.beta = event.beta;
            this.gamma = event.gamma;

            this.trigger('reading')
        });
    }
}
