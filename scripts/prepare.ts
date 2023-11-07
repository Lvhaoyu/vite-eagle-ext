import { execSync } from 'node:child_process'

function writeManifest() {
  execSync('npx esno ./scripts/manifest.ts', { stdio: 'inherit' })
}

writeManifest()
