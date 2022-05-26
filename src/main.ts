import {Hello} from './hello'

async function run(): Promise<void> {
  console.log(Hello())
}

run()
