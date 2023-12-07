import fs from 'fs/promises'
import { pipe } from 'fp-ts/function'

const readFile = (path: string): Promise<string> => fs.readFile(path, 'utf8')

const splitLines = (data: string): string[] => data.split('\n')

export default async (filePath: string) => pipe(await readFile(filePath), splitLines)
