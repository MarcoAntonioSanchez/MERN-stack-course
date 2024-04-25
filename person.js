const person = "Raven D. Milosh";
const people = ["Raven", "D.", "Milosh"]

// console.log(os.platform()); // Prints out the OS platform, example: Win32.
// console.log(os.hostname()); // Prints out the computer's name, example: ravensLaptop.
// console.log(os.machine()); // Prints out the machine architecture, example: x86_64
// console.log(os.networkInterfaces()); // Prints out the network adapter interfaces, example: netmask, family (IPv4/6), mac address, internal booleaan.
// console.log(os.userInfo()); // Prints out the user info object, example: username: 'raven', homedir: 'C:\\Users\\raven'.
// console.log(os.version()); // Prints out OS version, example: Windows 10 Pro
// console.log(person);
// console.log(people);

// module.exports = person; // Exporting a single variable as module.
module.exports = { // Exporting a group of variables as a object module.
    person,
    people,
};