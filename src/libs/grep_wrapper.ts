import { ConsoleSqlOutlined } from '@ant-design/icons';
import {
  ChildProcessByStdio,
  ChildProcessWithoutNullStreams,
  spawn,
} from 'child_process';

class GrepWrapper {
  cmd: ChildProcessWithoutNullStreams;
  fullOutput:string = ""

  constructor() {
    this.cmd = spawn('/opt/homebrew/bin/ggrep', ['127.0.0.1', '/etc/hosts']);
  }

  getStdout() {
    this.cmd.stdout.on('data', (data) => {
      this.fullOutput+= data.toString()
    });
  }

  getStderr() {
    this.cmd.stderr.on('data', (data) => {
      this.fullOutput+= data.toString()
    });
  }

  getExit(callback: (arg0: string, arg1: number | null) => void) {
    this.getStdout();
    this.cmd.on('exit', (code) => {
      console.info(`exit ${code} message ${this.fullOutput}`)
      callback(this.fullOutput,code)
    });
  }
}

export default GrepWrapper;
