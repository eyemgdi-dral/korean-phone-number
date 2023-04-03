# About Korean Phone Number Input @eyemgdi/itwizard

IT Wizard Company dotood heregtseend zoriulj gargasan package bolno.
Компаний дотоод хэрэгцээнд зориулж гаргасан туслах сан болно.
Энэхүү сан нь солонгос утасны дугаар оруулахад ашиглахад зориулсан React Component - р хангана.

## Commands

```bash
npm i korean-phone-number
```

### Example

XXX-XXXX-XXXX

```text
010-1234-5678
```

XXX-XXX-XXXX

```text
010-123-4567
```

02-XXX-XXXX

```text
02-123-4567
```

02-XXXX-XXXX

```text
02-1234-5678
```

## Configuration | Тохиргоо

Үндсэн элемэнт нь гадуураа Wrapper элемэнт байхгүй учир <input type="text"/> ашиглаж байгаа юм шиг ашиглахад болно.
This component is direct compononet, which means there is no wrapper element around itself.

```jsx
...
return <input value={phoneNumber} type="text" style={style} onChange={updatePhoneNumber} />;
...
```

### Setup Files

Одоогоор ганцхан Component байгаа болно.

```txt
/src
  InputPhone.tsx
  index.tsx       # used only for export components
.gitignore
package.json
README.md         # Tailbar nemj bolno.
tsconfig.json
```

### Helpful Resource

```copy
  https://www.youtube.com/watch?v=aVFasPXkyRE
```

# Below is redundant script

#### Jest

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

```diff
   "alias": {
-    "react": "../node_modules/react",
-    "react-dom": "../node_modules/react-dom"
+    "react": "../../../node_modules/react",
+    "react-dom": "../../../node_modules/react-dom"
   },
```

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

### Example

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, we use [Parcel's aliasing](https://parceljs.org/module_resolution.html#aliases).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

Jest tests are set up to run with `npm test` or `yarn test`.
