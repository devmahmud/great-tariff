import { Options } from 'tsup';

export const tsup: Options = {
  target: 'esnext',
  clean: true,
  dts: true,
  entry: ['src/index.ts', 'src/config.ts'],
  keepNames: true,
  minify: true,
  sourcemap: true,
  format: ['esm', 'cjs'],
};
