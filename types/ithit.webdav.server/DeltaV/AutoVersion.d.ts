/**
 * Auto versioning modes supported by item to be used with versioning unaware clients.
 * @remarks This enumeration determines how engine responds to WebDAV client requests that attempt to modify
 * checked-in items content or properties. Each item that support versioning can function in one of the following
 * auto-versioning modes:
 * @remarks NoAutoVersioning Mode.
 * In this mode item must be checked-out before modifications. Clients that does not support DeltaV will not be
 * able to modify checked-in items.
 * @remarks CheckOutCheckIn Mode.
 * In this mode any WebDAV client applications will be able to modify checked-in items on server. Potentially many
 * versions may be created. Workflow for versioning-unaware WebDAV client:
 * @list number
 * 1. Lock request (optional).
 * 2. Modification request:
 * + Auto check-out performed.
 * + Modifications performed.
 * + Auto check-in performed.
 * + Unlock request (optional).
 * @remarks CheckOutUnlockedCheckIn Mode.
 * In this mode any WebDAV client applications will be able to modify checked-in items on server. If WebDAV client
 * locks the item prior to update, the item will be checked in during unlock. This mode reduces the number of
 * versions created by versioning unaware clients. The item is never left checked-out. This mode is recommended if
 * you need to support both Class 1 and Class 2 WebDAV clients. Workflow for versioning-unaware WebDAV client:
 * 1. Lock request (optional).
 * 2. Modification request:
 * + Auto check-out performed.
 * + Modifications performed.
 * + Auto check-in performed if item not locked.
 * + Unlock request (optional).
 * + Check-in performed.
 * + Unlock performed.
 * @remarks CheckOut Mode.
 * In this mode any WebDAV client applications will be able to modify checked-in items on server. If the item
 * was not locked before the update it will be left in checked-out state after modifications. Workflow for
 * versioning-unaware WebDAV client:
 * 1. Lock request (optional).
 * 2. Modification request:
 * + Auto check-out performed.
 * + Modifications performed.
 * + Unlock request (optional).
 * + Check-in performed.
 * + Unlock performed.
 * @remarks LockedCheckOut Mode.
 * Only WebDAV client applications that lock item before the update will be able to modify checked-in item.
 * This mode minimizes amount of versions created by versioning unaware clients. Class 1 WebDAV applications will
 * not be able to modify checked-in items. Workflow for versioning-unaware WebDAV client:
 * 1. Lock request (required).
 * 2. Modification request:
 * + Auto check-out performed.
 * + Modifications performed.
 * + Unlock request (required).
 * + Check-in performed.
 * + Unlock performed.
 */
export declare enum AutoVersion {
    /**
     * Auto versioning is not supported for checked-in items. Modification requests of versioning unaware clients
     * will fail if item was not checked-out.
     */
    NoAutoVersioning = 0,
    /**
     * Before any item modification (such as changing content or properties)
     * by versioning unaware client engine will call {@link IVersionableItem.CheckOut}. After the item is
     * modified {@link IVersionableItem.CheckIn} will be called.
     * @remarks This potentially can create a lot of versions.
     */
    CheckOutCheckIn = 1,
    /**
     * If client tries to modify checked-in item, engine will automatically call
     * {@link IVersionableItem.CheckOut}. If item is not locked engine
     * will call {@link IVersionableItem.CheckIn} when modification completes.
     * @remarks If item is locked, {@link IVersionableItem.CheckIn} will be called before the
     * {@link ILock.Unlock}. If lock expires you must check-in item manually.
     */
    CheckOutUnlockedCheckIn = 2,
    /**
     * If client tries to modify checked-in item, engine will automatically call
     * {@link IVersionableItem.CheckOut}. The {@link IVersionableItem.CheckIn} will not be called.
     * @remarks If item is locked, {@link IVersionableItem.CheckIn} will be called before the
     * {@link ILock.Unlock}. If lock expires you must check-in item manually.
     */
    CheckOut = 3,
    /**
     * If client tries to modify locked checked-in item, engine will automatically call
     * {@link IVersionableItem.CheckOut}.
     * @remarks {@link IVersionableItem.CheckIn} will be called before the {@link ILock.Unlock}.
     * If lock expires you must check-in item manually.
     * @remarks If item is not locked - update request will fail.
     */
    LockedCheckOut = 4
}
