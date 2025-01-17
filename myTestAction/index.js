const core = require('@actions/core');

async function run() {
    try {
        const number = parseInt(core.getInput("number"));
        const result = number * number;
        core.setOutput("result", result);
        console.log(`✅ Squared ${number} = ${result}`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
