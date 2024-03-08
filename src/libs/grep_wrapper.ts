import { ConsoleSqlOutlined } from '@ant-design/icons';
import {
  ChildProcessWithoutNullStreams,
  spawn,
} from 'child_process';
import store from '../store/store';
import grep from '../store/grep';
import { randomInt } from 'crypto';
const {setOutput} = grep.actions

class GrepWrapper {
  cmd: ChildProcessWithoutNullStreams;
  fullOutput:string = ""

  constructor() {
    this.cmd = spawn('/opt/homebrew/bin/ggrep', ['127.0.0.1', '/etc/hosts']);
  }

  run(callback: (arg0:string) => void) {
    var result = '';
    this.cmd.stdout.on('data', (data:string)=> {
         result += data.toString() + Math.random().toFixed(2);
    });
    this.cmd.on('close', (code:number) => {
        return callback(result);
    });
}

}

export default GrepWrapper;
