import {expect, test} from 'bun:test'

const {default: packGlob} = await import('#src/main.ts')

test('should run', () => {
  const result = packGlob()
  expect(result).toBe('pack-glob') // TODO Test actual functionality
})
