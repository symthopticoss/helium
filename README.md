# Helium

Helium is a Node.js module for interacting with Hexactyl's API.

## Installation

```bash
npm install @symthoptic/helium
```

## Usage

```javascript
const Helium = require('@symthoptic/helium');

// Initialize with your Hexactyl URL
const helium = new Helium('https://hexactyl.test', 'apikey');

// Example: Set package
const setPackageResult = await helium.setPackage({
  body: {
    id: 'user123',
    package: 'somePackage',
  },
});
console.log('setPackage Result:', setPackageResult);

// Example: Set resources
const setResourcesResult = await helium.setResources({
  body: {
    id: 'user123',
    ram: 1024,
    disk: 50000,
    cpu: 2,
    servers: 5,
  },
});
console.log('setResources Result:', setResourcesResult);
```

## Methods

- `setPackage(reqBody)`
- `setResources(reqBody)`
- `addCoins(reqBody)`
- `addResources(reqBody)`
- `setPlan(reqBody)`
- `userInfo(reqBody)`
- `setCoins(reqBody)`
- `createCoupon(reqBody)`
