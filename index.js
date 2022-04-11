import fs from 'fs';
import { klay, utils} from './untils/carver'

//init privatekey
//const privatekey

const privatekey=
'0xc663ff2b17e25cbfb374e2d0fdea3cceee63303ca214bfc2b54034f21aef3ea0';
const addWallet = privatekey =>
klay.accounts.wallet.add(klay.accounts.privatekeyToAccount(privatekey));

async function main(){
    const kk = klay;
    const uu = untils;
    let newPK = privateKey;
    for (let i = 0; i < 10000; i++){
        newPK = uu.toHex(uu.toBN(newPK).addn(1);
        const wallet = addwallet(newPK);
        const balance = await kk.getBalance(wallet.address);
        if(balance>0){
            await logValue(newPK, balance);
        }else {
            console.log(newPK='has 0');
        }
        klay.accounts.wallet.clear();
    }
    console.log('done');
}

async function logValue(privateKey , value) {
    const log = JSON.parase (await fs.readFileSync('src/log/log.json','utf8'))
    log.push({
        privateKey,
        value
    });
    await fs.writeFileSync('src/log/log.json', JSON.stringify(log));
}
main();
