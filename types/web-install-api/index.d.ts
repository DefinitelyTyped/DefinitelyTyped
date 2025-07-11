export type WebInstallServiceResult = "DataError" | "AbortError" | "Success";

interface Navigator {
  install(install_url?: String | undefined, manifest_id?: String | undefined)
      : Promise<String | undefined>;
}