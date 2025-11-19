class Software{
    run(){
        console.log("Software is running")
    }
}

class Browser extends Software{
    constructor(){
        super()
        this.plugins = []

    }

    addPlugin(plugin){
        this.plugins.push(plugin)
    }


    installPlugins(){
        console.log('Installing plugins.......')
        this.plugins.forEach(p=>p.install())
    }
}

class Plugin{
    constructor(name){
        this.name = name
    }


install(){
        console.log(`Plugin ${this.name} installed`)
    }
}


const chrome = new Browser()
const adBlock = new Plugin('AdBlock')
const darkMode = new Plugin('Dark Mode')

chrome.addPlugin(adBlock)
chrome.addPlugin(darkMode)

chrome.run()
chrome.installPlugins()