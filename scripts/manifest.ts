import fs from 'fs-extra'
import type PkgType from '../package.json'
import { v4 as uuidv4 } from 'uuid'
import { log, r } from './utils'

export interface EagleManifest {
  id: string
  version: string
  platform: 'all' | 'mac' | 'windows'
  arch: 'all' | 'arm' | 'x64'
  name: string
  logo: string
  keywords: string[]
  devTools: boolean
  main: {
    url: string
    width: number
    height: number
    minWidth?: number
    minHeight?: number
    maxWidth?: number
    maxHeight?: number
    alwaysOnTop?: boolean
    frame?: boolean
    fullscreenable?: boolean
    maximizable?: boolean
    minimizable?: boolean
    resizable?: boolean
    backgroundColor?: string
    multiple?: boolean
  }
}

export async function getManifest() {
  const pkg = (await fs.readJSON(r('package.json'))) as typeof PkgType

  const manifest: EagleManifest = {
    id: uuidv4(),
    version: pkg.version,
    platform: 'all',
    arch: 'all',
    name: pkg.name,
    logo: './logo.png',
    keywords: [pkg.name],
    devTools: false,
    main: {
      url: 'index.html',
      width: 1120,
      height: 700,
      frame: false
    }
  }

  return manifest
}

export async function writeManifest() {
  await fs.writeJSON(r('extension/manifest.json'), await getManifest(), { spaces: 2 })
  log('PRE', 'write manifest.json')
}

writeManifest()
