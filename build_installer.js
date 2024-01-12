const fs = require('fs')
// 1. Import Modules
const { MSICreator } = require('electron-wix-msi');
const path = require('path');

// 2. Define input and output directory.
// Important: the directories must be absolute, not relative e.g
// appDirectory: "C:\\Users\sdkca\Desktop\OurCodeWorld-win32-x64", 
const APP_DIR = path.resolve(__dirname, './OverStadium-V1.0.5/Overfate');
// outputDirectory: "C:\\Users\sdkca\Desktop\windows_installer", 
const OUT_DIR = path.resolve(__dirname, './Overfate_installer');

const ban = fs.readFileSync('./Addons/MSI_banner.jpg')
const bg = fs.readFileSync('./Addons/MSI_bg.jpg')
const ico = fs.readFileSync('./Addons/icon.png')
// 3. Instantiate the MSICreator
const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    // Configure metadata
    description: 'Explore Overfate a 2D retro pixel brawl by Nikkerudon. Pick from 5 characters, battle on 8 maps, and enjoy classic gaming excitement',
    exe: 'overfate',
    name: 'Overfate',
    manufacturer: 'Nikkerudon',
    version: '1.0.6',

    // Configure installer User Interface
    ui: {
        chooseDirectory: true
    },
});

// 4. Create a .wxs template file
msiCreator.create().then(function(){

    // Step 5: Compile the template to a .msi file
    msiCreator.compile();
});