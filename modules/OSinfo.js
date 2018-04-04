var os = require('os');
var colors = require('colors');
var fromSec = require('./fromSec');

function getOSinfo() {
    var type = os.type();
    switch (type) {
        case 'Darwin':
            {
                console.log(colors.gray('System: ') + 'macOS');
                break;
            }
        case 'Windows_NT':
            {
                console.log(colors.gray('System: ') + 'Windows');
                break;
            }
        case 'Linux':
            {
                console.log(colors.gray('System: ') + 'Linux');
                break;
            }
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var time = os.uptime();
    var username = os.userInfo().username;
    var homedir = os.userInfo().homedir;
    console.log(colors.red('Release: ') + release);
    console.log(colors.blue('CPU Model: ') + cpu);
    if (time < 3600) {
        process.stdout.write(colors.green('Uptime: '));
        fromSec.toMin(time.toFixed(0), true);
    } else if (time >= 3600) {
        process.stdout.write(colors.green('Uptime: '));
        fromSec.toHour(time.toFixed(0), true);
    }
    console.log(colors.yellow('Username: ') + username);
    console.log(colors.grey('Homedir: ') + homedir);

}
exports.print = getOSinfo;