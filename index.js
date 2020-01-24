const SamsungTV = require('./lib/tv')
const { KEY_CODES } = require( './lib/constants')

async function main () {
    // const TVs = await SamsungTV.discover()

    // console.log(`There are ${TVs.length} Samsung Smart TVs connected to this network`)
    // const TV = TVs[0]
    const TV = new SamsungTV('192.168.1.116')
    TV.token='18077506'
    console.log(`TV ip:${JSON.stringify(TV, null, 4)}`)
    // console.log(await TV.getDeviceInfo());
    console.log(await TV.connect())
    TV.sendKey('KEY_HOME')
    TV.sendKey('KEY_RIGHT')
    TV.disconnect()

    // const devInfo = await TV.getDeviceInfo();
    // const macaddress = '54:BD:79:1E:B3:A6'
    // console.log('macaddress', macaddress)
    // turn on tv
    // await TV.wol(macaddress);

    /*const SamsungRemote = require('samsung-remote');
        
    const remote = new SamsungRemote({
      ip: TV.host // required: IP address of your Samsung Smart TV
      
  });*/
   /*
  remote.send('KEY_VOLUP', (err) => {
      if (err) {
          throw new Error(err);
      } else {
          // command has been successfully transmitted to your tv
      }
  });
   
  // check if TV is alive (ping)
  remote.isAlive((err) => {
      if (err) {
          throw new Error('TV is offline');
      } else {
          console.log('TV is ALIVE!');
      }
  });
  */


    //await TV.connect()

    // ...

    return //TV.disconnect()
}

main().catch(console.log)
