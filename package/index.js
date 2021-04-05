function ready() {
    console.log("🌙 | The client is ready");
};

function RandomNumber(a, b) {
    Math.floor(Math.random(a) * b);
};

function log(a) {
    console.log(a);
};

function smart() {
    console.log("🌙 | Smart+ is ready");
};

function support() {
    console.log("🌙 | https://dsc.gg/smart+");
};

function msg() {
    console.log("🌙 | A message has been send")
}

module.exports = { ready, RandomNumber, log, smart, support, msg }
