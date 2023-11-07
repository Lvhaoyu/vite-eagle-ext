import { resolve } from 'node:path'
import { bgCyan, black } from 'kolorist'

export const r = (...args: string[]) => resolve(__dirname, '..', ...args)
export function log(name: string, message: string) {
  console.log(black(bgCyan(` ${name} `)), message)
}
