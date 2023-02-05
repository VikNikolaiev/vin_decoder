# [VIN Decoder](https://viknikolaiev.github.io/vin_decoder/)

![alt text](https://vik-nikolaiev.s3.eu-central-1.amazonaws.com/vin-decoder-preview.png "VIN Decoder")

Decode Your Vehicle Identification Number for Free

## Application features

### Decoding VIN code 
Checking the correctness of the entered VIN code.
Obtain all vehicle information from the NHTSA API: https://vpic.nhtsa.dot.gov/api/.

### Extended description of variables
Obtaining from the NHTSA API: https://vpic.nhtsa.dot.gov/api extended description of variables.

### Particular variable
Viewing the full description of a particular variable

## Links:

+ [Live Preview](https://viknikolaiev.github.io/vin_decoder/)
+ [Code](https://github.com/VikNikolaiev/vin_decoder)


## Technology stack

Used technologies:

- HTML5
- SASS (CSS Preprocessor)
- BEM methodology
- Javascript
- React
- AJAX (FETCH)


## Quick start

Quick start options:

- [Download from Github](https://github.com/VikNikolaiev/vin_decoder.git).
- Clone the repo: `git clone https://github.com/VikNikolaiev/vin_decoder.git`.
- run `npm i`
- run `npm start`


### What's included

Within the download you'll find the following working directories and files:

```
src/
│   App.scss
│   App.tsx
│   index.scss
│   index.tsx
│   react-app-env.d.ts
├───api
│       decodeVin.ts
│       vehicleVariables.ts
├───components
│   ├───DecodeVinDetails
│   │       DecodeVinDetails.scss
│   │       DecodeVinDetails.tsx
│   │       index.ts
│   ├───Header
│   │       Header.scss
│   │       Header.tsx
│   │       index.ts
│   ├───Loader
│   │       index.ts
│   │       Loader.scss
│   │       Loader.tsx
│   ├───Main
│   │       index.ts
│   │       Main.scss
│   │       Main.tsx
│   ├───PageNavLink
│   │       index.ts
│   │       PageNavLink.tsx
│   ├───Search
│   │       index.ts
│   │       Search.scss
│   │       Search.tsx
│   └───VehicleVariableLink
│           index.ts
│           VehicleVariableLink.tsx
├───img
│       vinDecoderLogo.png
├───pages
│   ├───HomePage
│   │       HomePage.tsx
│   │       index.ts
│   ├───VehicleVariableListPage
│   │       index.ts
│   │       VehicleVariableListPage.tsx
│   └───VehicleVariablePage
│           index.ts
│           VehicleVariablePage.tsx
├───types
│       decodeVin.ts
│       VehicleVariable.ts
└───utils
        fetchClient.ts
        _normalize.scss
        _variables.scss
```
