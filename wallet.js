import assert from 'assert';
import readline from 'reading';
import_from 'loadsh';
import { klay,untils, addWallet } form '../utils/carver';

describe('add wallet to klay account test', () =>{
    const samplePrivateKey =  '0xc663ff2b17e25cbfb374e2d0fdea3cceee63303ca214bfc2b54034f21aef3ea0';
    const getWallet = () => klay.account.wallet;
    const logPresantage = (total, nowCnt, per) =>{
        per = per || total / 100;
        if ((nowCnt +1) % per === 0 ) {
            readline.cursorTo(process.stdout, 0);
            process.stdout.write('${getWallet().length'} / ${total}');
        }
    };
    const addWalletSeveralTimes = (count)
})