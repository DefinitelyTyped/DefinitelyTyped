async function testDeviceAttributesApi() {
  // --------------------------------------------------------------------------------
  // NavigatorManagedData (Navigator Augmentation)
  // --------------------------------------------------------------------------------
  if (navigator.managed) {
    const managed = navigator.managed;
    // $ExpectType NavigatorManagedData
    managed;

    // NavigatorManagedData extends EventTarget
    const eventTarget: EventTarget = managed;
    // $ExpectType EventTarget
    eventTarget;

    // @ts-expect-error managed is readonly
    navigator.managed = {} as NavigatorManagedData;
  }

  // --------------------------------------------------------------------------------
  // NavigatorManagedData Methods
  // --------------------------------------------------------------------------------
  const managed: NavigatorManagedData = {} as NavigatorManagedData;

  const directoryIdPromise = managed.getDirectoryId();
  // $ExpectType Promise<string | null>
  directoryIdPromise;
  // $ExpectType string | null
  await directoryIdPromise;

  const hostnamePromise = managed.getHostname();
  // $ExpectType Promise<string | null>
  hostnamePromise;
  // $ExpectType string | null
  await hostnamePromise;

  const serialNumberPromise = managed.getSerialNumber();
  // $ExpectType Promise<string | null>
  serialNumberPromise;
  // $ExpectType string | null
  await serialNumberPromise;

  const annotatedAssetIdPromise = managed.getAnnotatedAssetId();
  // $ExpectType Promise<string | null>
  annotatedAssetIdPromise;
  // $ExpectType string | null
  await annotatedAssetIdPromise;

  const annotatedLocationPromise = managed.getAnnotatedLocation();
  // $ExpectType Promise<string | null>
  annotatedLocationPromise;
  // $ExpectType string | null
  await annotatedLocationPromise;

  // @ts-expect-error getDirectoryId takes no arguments
  managed.getDirectoryId("unexpected");

  // @ts-expect-error getHostname takes no arguments
  managed.getHostname("unexpected");

  // @ts-expect-error getSerialNumber takes no arguments
  managed.getSerialNumber("unexpected");

  // @ts-expect-error getAnnotatedAssetId takes no arguments
  managed.getAnnotatedAssetId("unexpected");

  // @ts-expect-error getAnnotatedLocation takes no arguments
  managed.getAnnotatedLocation("unexpected");
}
