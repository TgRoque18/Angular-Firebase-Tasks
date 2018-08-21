// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC7o3Lf0whtlMSuSPu_YODO8l0safA7V5M',
    authDomain: 'angular-tasks-42674.firebaseapp.com',
    databaseURL: 'https://angular-tasks-42674.firebaseio.com',
    projectId: 'angular-tasks-42674',
    storageBucket: 'angular-tasks-42674.appspot.com',
    messagingSenderId: '623266470963'
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
